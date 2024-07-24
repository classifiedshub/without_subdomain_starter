import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { email, password } = await req.json();
    const newUser = {
      email,
      password,
    };
    console.log(newUser);

    return NextResponse.json(
      {
        data: newUser,
        message: "Login successfull",
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
        message: "An error occurred while login",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
