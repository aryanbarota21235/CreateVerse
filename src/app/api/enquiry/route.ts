import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "online",
      service: "CreateVerse Inquiry Intake API",
      timestamp: new Date().toISOString(),
      methods: ["GET", "POST"],
    },
    { status: 200 }
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, company, service, budget, message, source, channel } = body;

    // Required field validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Client name is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || !phone.trim()) {
      return NextResponse.json(
        { success: false, error: "Phone number / WhatsApp is required." },
        { status: 400 }
      );
    }

    const enquiryId = `ENQ-${Math.floor(1000 + Math.random() * 9000)}`;
    const record = {
      id: enquiryId,
      name: name.trim(),
      phone: phone.trim(),
      email: email ? String(email).trim() : "",
      company: company ? String(company).trim() : "",
      service: service ? String(service).trim() : "General Consultation",
      budget: budget ? String(budget).trim() : "Flexible / Not Specified",
      source: source ? String(source).trim() : "Direct API Intake",
      channel: channel ? String(channel).trim() : "Direct Traffic",
      message: message ? String(message).trim() : "",
      status: "New",
      createdAt: new Date().toISOString(),
    };

    console.log("[CreateVerse API] New Inquiry Received:", record);

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry logged successfully.",
        data: record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[CreateVerse API Error] Failed to process enquiry:", error);
    return NextResponse.json(
      { success: false, error: "Invalid JSON request payload or internal server error." },
      { status: 500 }
    );
  }
}
