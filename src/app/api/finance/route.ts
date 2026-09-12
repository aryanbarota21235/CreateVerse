import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "online",
      service: "CreateVerse Financial Ledger API",
      timestamp: new Date().toISOString(),
      methods: ["GET", "POST"],
    },
    { status: 200 }
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { service, client, revenue, cost, status, category, date, notes } = body;

    const revNum = Number(revenue);
    const costNum = Number(cost);

    if (!client || typeof client !== "string" || !client.trim()) {
      return NextResponse.json(
        { success: false, error: "Client name is required." },
        { status: 400 }
      );
    }

    if (isNaN(revNum) || revNum < 0 || isNaN(costNum) || costNum < 0) {
      return NextResponse.json(
        { success: false, error: "Revenue and cost must be non-negative numeric values." },
        { status: 400 }
      );
    }

    const profit = revNum - costNum;
    const margin = revNum > 0 ? Number(((profit / revNum) * 100).toFixed(1)) : 0;
    const id = `FIN-${Math.floor(1000 + Math.random() * 9000)}`;

    const record = {
      id,
      service: service || "General Practice",
      client: client.trim(),
      revenue: revNum,
      cost: costNum,
      profit,
      margin,
      status: status || "Collected",
      category: category || "Client Retainer",
      date: date || new Date().toISOString().slice(0, 10),
      notes: notes ? String(notes).trim() : "",
      createdAt: new Date().toISOString(),
    };

    console.log("[CreateVerse Finance API] Transaction logged:", record);

    return NextResponse.json(
      {
        success: true,
        message: "Financial transaction recorded successfully.",
        data: record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[CreateVerse Finance API Error]:", error);
    return NextResponse.json(
      { success: false, error: "Invalid JSON request payload." },
      { status: 500 }
    );
  }
}
