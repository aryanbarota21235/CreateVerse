import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "healthy",
      service: "CreateVerse Core API Engine",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      endpoints: [
        { path: "/api/health", methods: ["GET"], status: "operational" },
        { path: "/api/enquiry", methods: ["GET", "POST"], status: "operational" },
        { path: "/api/finance", methods: ["GET", "POST"], status: "operational" },
      ],
    },
    { status: 200 }
  );
}
