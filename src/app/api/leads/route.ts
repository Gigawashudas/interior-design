import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      leads,
    });
  } catch (error) {
    console.error("Lead fetch error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch leads.",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, email, projectType, budget, location, message } = body;

    if (!name || !phone || !projectType || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 },
      );
    }

    const lead = await prisma.lead.create({
      data: {
        name: String(name).trim(),
        phone: String(phone).trim(),
        email: email ? String(email).trim() : null,
        projectType: String(projectType).trim(),
        budget: budget ? String(budget).trim() : null,
        location: location ? String(location).trim() : null,
        message: String(message).trim(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received.",
        leadId: lead.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Lead submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}
