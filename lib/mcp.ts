/**
 * Minimal, stateless, read-only MCP server (Streamable HTTP transport, JSON
 * responses only). No SDK: the surface is four tools over static data.
 */
import {
	CATALOG,
	contactInfo,
	discoveryCallInfo,
	findPage,
	pageWithUrl,
} from "@/lib/agent-catalog";

export const MCP_PROTOCOL_VERSION = "2025-06-18";
const SUPPORTED_VERSIONS = ["2025-11-25", "2025-06-18", "2025-03-26", "2024-11-05"];

export const MCP_SERVER_INFO = {
	name: "justech",
	title: "JUSTECH",
	version: "1.0.0",
};

type Tool = {
	name: string;
	title: string;
	description: string;
	inputSchema: Record<string, unknown>;
	run: (args: Record<string, unknown>) => unknown;
};

const readOnly = { readOnlyHint: true, openWorldHint: false };

export const MCP_TOOLS: Tool[] = [
	{
		name: "list_services",
		title: "List services",
		description:
			"List JUSTECH's pillars, services, and company pages with a short summary and URL for each.",
		inputSchema: {
			type: "object",
			properties: {
				kind: {
					type: "string",
					enum: ["pillar", "service", "company"],
					description: "Optional filter by page kind.",
				},
			},
			additionalProperties: false,
		},
		run: ({ kind }) =>
			CATALOG.filter((p) => !kind || p.kind === kind).map(pageWithUrl),
	},
	{
		name: "get_service",
		title: "Get service details",
		description:
			"Get the summary and URL of one JUSTECH pillar or service by slug (e.g. 'odoo', 'aws-devops', 'revenue-scaling').",
		inputSchema: {
			type: "object",
			properties: {
				slug: {
					type: "string",
					enum: CATALOG.map((p) => p.slug),
					description: "Slug of the page, as returned by list_services.",
				},
			},
			required: ["slug"],
			additionalProperties: false,
		},
		run: ({ slug }) => {
			const page = typeof slug === "string" ? findPage(slug) : undefined;
			if (!page) throw new Error(`Unknown slug: ${String(slug)}`);
			return pageWithUrl(page);
		},
	},
	{
		name: "get_contact_info",
		title: "Get contact information",
		description: "Get JUSTECH's email, phone number, location, and social profiles.",
		inputSchema: { type: "object", properties: {}, additionalProperties: false },
		run: () => contactInfo(),
	},
	{
		name: "get_discovery_call_link",
		title: "Get discovery call booking link",
		description:
			"Get the link to book a free discovery call with JUSTECH, the first step for every engagement.",
		inputSchema: { type: "object", properties: {}, additionalProperties: false },
		run: () => discoveryCallInfo(),
	},
];

type JsonRpcRequest = {
	jsonrpc: "2.0";
	id?: string | number | null;
	method: string;
	params?: Record<string, any>;
};

const ok = (id: JsonRpcRequest["id"], result: unknown) => ({ jsonrpc: "2.0", id, result });
const fail = (id: JsonRpcRequest["id"], code: number, message: string) => ({
	jsonrpc: "2.0",
	id: id ?? null,
	error: { code, message },
});

/** Returns a JSON-RPC response, or null for notifications. */
export function handleMcpMessage(msg: JsonRpcRequest) {
	if (!msg || msg.jsonrpc !== "2.0" || typeof msg.method !== "string") {
		return fail(msg?.id, -32600, "Invalid Request");
	}
	const isNotification = msg.id === undefined;
	if (isNotification) return null;

	switch (msg.method) {
		case "initialize": {
			const requested = msg.params?.protocolVersion;
			return ok(msg.id, {
				protocolVersion: SUPPORTED_VERSIONS.includes(requested)
					? requested
					: MCP_PROTOCOL_VERSION,
				capabilities: { tools: { listChanged: false } },
				serverInfo: MCP_SERVER_INFO,
				instructions:
					"Read-only information about JUSTECH, a software engineering company in Beirut, Lebanon. Use list_services to see what JUSTECH does and get_discovery_call_link to start an engagement.",
			});
		}
		case "ping":
			return ok(msg.id, {});
		case "tools/list":
			return ok(msg.id, {
				tools: MCP_TOOLS.map(({ name, title, description, inputSchema }) => ({
					name,
					title,
					description,
					inputSchema,
					annotations: readOnly,
				})),
			});
		case "tools/call": {
			const tool = MCP_TOOLS.find((t) => t.name === msg.params?.name);
			if (!tool) return fail(msg.id, -32602, `Unknown tool: ${msg.params?.name}`);
			try {
				const data = tool.run(msg.params?.arguments ?? {});
				return ok(msg.id, {
					content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
					structuredContent: Array.isArray(data) ? { items: data } : data,
				});
			} catch (e) {
				return ok(msg.id, {
					content: [{ type: "text", text: (e as Error).message }],
					isError: true,
				});
			}
		}
		default:
			return fail(msg.id, -32601, `Method not found: ${msg.method}`);
	}
}
