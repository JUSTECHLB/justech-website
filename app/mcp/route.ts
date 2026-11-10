import { handleMcpMessage } from "@/lib/mcp";

/**
 * Stateless MCP endpoint (Streamable HTTP). Every POST is answered with plain
 * JSON; there is no session and no server-initiated stream, so GET is 405.
 */
const cors = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "POST, OPTIONS",
	"Access-Control-Allow-Headers":
		"Content-Type, Accept, Mcp-Session-Id, Mcp-Protocol-Version, Authorization",
};

export function OPTIONS() {
	return new Response(null, { status: 204, headers: cors });
}

export function GET() {
	return new Response("Method Not Allowed", {
		status: 405,
		headers: { ...cors, Allow: "POST, OPTIONS" },
	});
}

export async function POST(request: Request) {
	let payload: unknown;
	try {
		payload = await request.json();
	} catch {
		return Response.json(
			{ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } },
			{ status: 400, headers: cors },
		);
	}

	const messages = Array.isArray(payload) ? payload : [payload];
	const responses = messages.map((m) => handleMcpMessage(m as any)).filter(Boolean);

	if (responses.length === 0) return new Response(null, { status: 202, headers: cors });
	return Response.json(Array.isArray(payload) ? responses : responses[0], {
		headers: { ...cors, "Cache-Control": "no-store" },
	});
}
