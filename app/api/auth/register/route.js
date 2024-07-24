import db from "@/lib/database/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req, res) {
  try {
    const { email, password, code, isTos } = await req.json();
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "User already exists",
        },
        {
          status: 409,
        }
      );
    }

    const verifyToken = await db.verificationToken.findFirst({
      where: { email, code },
    });
    if (!verifyToken) {
      return NextResponse.json(
        {
          data: null,
          message: "Please verify your email",
        },
        {
          status: 404,
        }
      );
    }

    console.log("Email verified...");
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create New User
    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        isTos,
      },
    });

    // Create New User Account
    const userAccount = await db.userAccount.create({
      data: {
        userId: newUser.id,
      },
    });
    console.log("User account created...");
    await db.user.update({
      where: { id: newUser.id },
      data: { isVerified: true },
    });
    console.log("Account verified...");
    await db.verificationToken.delete({
      where: { email },
    });
    console.log("Deleted token...");
    const userData = {
      ...newUser,
    };
    console.log(userData, "User registered successfully");
    return NextResponse.json(
      {
        data: userData,
        message: "User registered successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error.message);

    return NextResponse.json(
      {
        data: null,
        message: "An error occurred while creating the user",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
