import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const statuses = ["NEW", "CONTACTED", "QUALIFIED", "CONVERTED", "LOST"] as const;

type LeadStatus = (typeof statuses)[number];

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

export async function PATCH(request: Request) {
  try {
    const body = await request.json();

    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        {
          success: false,
          message: "Lead ID and status are required.",
        },
        { status: 400 },
      );
    }

    if (!statuses.includes(status as LeadStatus)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid lead status.",
        },
        { status: 400 },
      );
    }

    const existingLead = await prisma.lead.findUnique({
      where: {
        id: String(id),
      },
    });

    if (!existingLead) {
      return NextResponse.json(
        {
          success: false,
          message: "Lead not found.",
        },
        { status: 404 },
      );
    }

    const lead = await prisma.lead.update({
      where: {
        id: String(id),
      },
      data: {
        status: status as LeadStatus,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Lead status updated.",
      lead,
    });
  } catch (error) {
    console.error("Lead status update error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update lead status.",
      },
      { status: 500 },
    );
  }
}
