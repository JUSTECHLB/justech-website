import { SITE_DESCRIPTION, absoluteUrl } from "@/lib/site";
import { MCP_PROTOCOL_VERSION, MCP_SERVER_INFO, MCP_TOOLS } from "@/lib/mcp";

/** MCP Server Card (SEP-1649) so agents can discover /mcp without a handshake. */
export const dynamic = "force-static";

export function GET() {
	const card = {
		$schema: "https://static.modelcontextprotocol.io/schemas/mcp-server-card/v1.json",
		version: "1.0",
		protocolVersion: MCP_PROTOCOL_VERSION,
		serverInfo: MCP_SERVER_INFO,
		description: `Read-only MCP server for JUSTECH. ${SITE_DESCRIPTION}`,
		documentationUrl: absoluteUrl("/llms.txt"),
		transport: { type: "streamable-http", endpoint: absoluteUrl("/mcp") },
		endpoint: absoluteUrl("/mcp"),
		capabilities: { tools: { listChanged: false } },
		authentication: { required: false },
		tools: MCP_TOOLS.map(({ name, title, description, inputSchema }) => ({
			name,
			title,
			description,
			inputSchema,
		})),
	};
	return Response.json(card, {
		headers: { "Access-Control-Allow-Origin": "*" },
	});
}
