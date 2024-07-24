import { appDetails } from "@/constants/home_pages";
import db from "@/lib/database/db";
import { VerifyEmail } from "@/utils/emails/verifyEmail";
import { generateVerificationCode } from "@/utils/generators/generateVerificationCode";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req, res) {
  try {
    const { email } = await req.json();
    // Generate verification code
    const code = generateVerificationCode();
    // Calculate Expiry Time - in One Hour
    const expiryTime = new Date(Date.now() + 3600 * 1000);

    // Use Resend to Send Emails from domain
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Check if the email exists
    const userEmail = await db.verificationToken.findUnique({
      where: {
        email,
      },
    });

    if (userEmail) {
      return NextResponse.json(
        {
          data: null,
          message: "Check your email. Code has already been sent.",
        },
        {
          status: 409,
        }
      );
    }

    const newToken = await db.verificationToken.create({
      data: {
        email,
        code,
        expiryTime,
      },
    });

    const sendMail = await resend.emails.send({
      from: `${appDetails.name} <${appDetails.email}>`,
      to: email,
      subject: `Verify Your Email Address - ${appDetails.name}`,
      react: VerifyEmail({ code }),
    });

    const verifyCode = {
      ...newToken,
    };
    console.log(verifyCode);

    return NextResponse.json(
      {
        data: null,
        message: "Code has been sent to your email",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        data: null,
        message: "An error occurred while sending the code",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
