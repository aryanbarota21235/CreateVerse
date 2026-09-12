import { spawn } from "node:child_process";

const PORT = 3456;
const BASE_URL = `http://localhost:${PORT}`;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(retries = 30) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(`${BASE_URL}/api/health`);
      if (res.ok) return true;
    } catch {
      // ignore
    }
    await sleep(500);
  }
  return false;
}

async function runTests() {
  console.log(`Starting CreateVerse production server on port ${PORT}...`);
  const server = spawn("npx", ["next", "start", "-p", String(PORT)], {
    shell: true,
    stdio: "pipe",
  });

  server.stdout.on("data", (d) => {
    // console.log("[server stdout]", d.toString());
  });
  server.stderr.on("data", (d) => {
    // console.error("[server stderr]", d.toString());
  });

  const isReady = await waitForServer();
  if (!isReady) {
    console.error("FAIL: Server failed to start within timeout.");
    server.kill();
    process.exit(1);
  }
  console.log("PASS: Server is up and accepting connections.");

  const results = [];

  async function testRoute(name, fn) {
    try {
      await fn();
      console.log(`[PASS] ${name}`);
      results.push({ name, status: "PASS" });
    } catch (err) {
      console.error(`[FAIL] ${name}: ${err.message}`);
      results.push({ name, status: "FAIL", error: err.message });
    }
  }

  // 1. Health API
  await testRoute("GET /api/health returns 200 and healthy status", async () => {
    const res = await fetch(`${BASE_URL}/api/health`);
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
    const json = await res.json();
    if (json.status !== "healthy") throw new Error(`Expected status 'healthy', got ${json.status}`);
    if (!Array.isArray(json.endpoints)) throw new Error("Missing endpoints array");
  });

  // 2. Enquiry GET
  await testRoute("GET /api/enquiry returns 200 online", async () => {
    const res = await fetch(`${BASE_URL}/api/enquiry`);
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
    const json = await res.json();
    if (json.status !== "online") throw new Error(`Expected status 'online', got ${json.status}`);
  });

  // 3. Enquiry POST validation check
  await testRoute("POST /api/enquiry with missing name/phone returns 400", async () => {
    const res = await fetch(`${BASE_URL}/api/enquiry`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "test@example.com" }),
    });
    if (res.status !== 400) throw new Error(`Expected 400, got ${res.status}`);
    const json = await res.json();
    if (json.success !== false) throw new Error("Expected success: false");
  });

  // 4. Enquiry POST success check
  await testRoute("POST /api/enquiry with valid payload returns 201 and record ID", async () => {
    const res = await fetch(`${BASE_URL}/api/enquiry`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Aman Sharma",
        phone: "+91 9988776655",
        email: "aman@techcorp.in",
        company: "Tech Corp",
        service: "Real Estate Lead Generation",
        budget: "₹3L - ₹10 Lakhs",
        message: "Automated E2E Test Inquiry",
      }),
    });
    if (res.status !== 201) throw new Error(`Expected 201, got ${res.status}`);
    const json = await res.json();
    if (!json.success || !json.data.id.startsWith("ENQ-")) {
      throw new Error(`Invalid response structure: ${JSON.stringify(json)}`);
    }
  });

  // 5. Finance GET
  await testRoute("GET /api/finance returns 200 online", async () => {
    const res = await fetch(`${BASE_URL}/api/finance`);
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
    const json = await res.json();
    if (json.status !== "online") throw new Error(`Expected status 'online', got ${json.status}`);
  });

  // 6. Finance POST validation check
  await testRoute("POST /api/finance with invalid numbers returns 400", async () => {
    const res = await fetch(`${BASE_URL}/api/finance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ client: "Acme", revenue: -500, cost: "abc" }),
    });
    if (res.status !== 400) throw new Error(`Expected 400, got ${res.status}`);
  });

  // 7. Finance POST success check
  await testRoute("POST /api/finance with valid transaction computes profit & margin", async () => {
    const res = await fetch(`${BASE_URL}/api/finance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service: "Google Ads Management",
        client: "Apex Global",
        revenue: 200000,
        cost: 60000,
        status: "Collected",
        category: "Client Retainer",
      }),
    });
    if (res.status !== 201) throw new Error(`Expected 201, got ${res.status}`);
    const json = await res.json();
    if (json.data.profit !== 140000) throw new Error(`Expected profit 140000, got ${json.data.profit}`);
    if (json.data.margin !== 70) throw new Error(`Expected margin 70, got ${json.data.margin}`);
  });

  // 8. Key HTML Pages & All 13 Services
  const pages = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/industries",
    "/work",
    "/admin",
    "/services/real-estate-lead-generation",
    "/services/immigration-lead-generation",
    "/services/political-management",
    "/services/google-ads",
    "/services/social-media-paid-ads",
    "/services/web-development",
    "/services/lead-generation",
    "/services/social-media-marketing",
    "/services/social-media-optimization",
    "/services/content-marketing",
    "/services/influencer-marketing",
    "/services/native-advertising",
    "/services/graphic-design",
    "/robots.txt",
    "/sitemap.xml",
  ];

  for (const page of pages) {
    await testRoute(`GET ${page} returns 200`, async () => {
      const res = await fetch(`${BASE_URL}${page}`);
      if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
      const text = await res.text();
      if (text.length < 50) throw new Error("Response body is empty or too short");
    });
  }

  // Graceful shutdown
  server.kill();

  const failures = results.filter((r) => r.status === "FAIL");
  console.log("\n=================================");
  console.log(`TOTAL TESTS: ${results.length}`);
  console.log(`PASSED: ${results.length - failures.length}`);
  console.log(`FAILED: ${failures.length}`);
  console.log("=================================\n");

  if (failures.length > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runTests().catch((err) => {
  console.error("Test execution runner error:", err);
  process.exit(1);
});
