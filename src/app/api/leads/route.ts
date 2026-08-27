import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log("NEW INTERIOR DESIGN LEAD:", data);

    return NextResponse.json(
      {
        success: true,
        message: "Lead received successfully",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request",
      },
      { status: 400 },
    );
  }
}
