import { NextResponse } from 'next/server';

export default function POST(req, res) {
 try {
    
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
