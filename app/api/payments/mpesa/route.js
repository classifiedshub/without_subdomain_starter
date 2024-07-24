import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { phone, isPaid } = await req.json();
    const payment = {
      phone,
      isPaid: true
    };
    console.log(payment);

    return NextResponse.json(
      {
        data: payment,
        message: "Payment was successful",
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
        message: "An error occurred while paying for the plan",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
