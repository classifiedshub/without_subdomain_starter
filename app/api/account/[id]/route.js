import db from "@/lib/database/db";
import { NextResponse } from "next/server";

// Get Account Details by User ID
export async function GET(req, { params: { id } }) {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
      select: {
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        isVerified: true,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.error(new Error("Failed to fetch user"), {
      status: 500,
    });
  }
}
