"use client";

import { useEffect } from "react";
import {
	CATALOG,
	contactInfo,
	discoveryCallInfo,
	findPage,
	pageWithUrl,
} from "@/lib/agent-catalog";

/**
 * WebMCP (https://webmachinelearning.github.io/webmcp/): exposes a few
 * read-only tools to AI agents running in the visitor's browser. Mirrors the
 * server-side MCP tools in lib/mcp.ts. A no-op in browsers without the API.
 */
type ModelContext = {
	registerTool: (
		tool: {
			name: string;
			description: string;
			inputSchema: Record<string, unknown>;
			annotations?: Record<string, unknown>;
			execute: (args: any) => Promise<unknown> | unknown;
		},
		options?: { signal?: AbortSignal },
	) => Promise<void> | void;
};

const asText = (data: unknown) => ({
	content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
});

export default function WebMcp() {
	useEffect(() => {
		const mc: ModelContext | undefined =
			(document as any).modelContext ?? (navigator as any).modelContext;
		if (!mc?.registerTool) return;

		const controller = new AbortController();
		const opts = { signal: controller.signal };
		const readOnly = { readOnlyHint: true };

		const tools = [
			{
				name: "list_services",
				description:
					"List JUSTECH's pillars, services, and company pages with a short summary and URL for each.",
				inputSchema: {
					type: "object",
					properties: {
						kind: { type: "string", enum: ["pillar", "service", "company"] },
					},
				},
				annotations: readOnly,
				execute: ({ kind }: { kind?: string } = {}) =>
					asText(CATALOG.filter((p) => !kind || p.kind === kind).map(pageWithUrl)),
			},
			{
				name: "get_contact_info",
				description: "Get JUSTECH's email, phone number, location, and social profiles.",
				inputSchema: { type: "object", properties: {} },
				annotations: readOnly,
				execute: () => asText(contactInfo()),
			},
			{
				name: "book_discovery_call",
				description:
					"Open the booking page for a free discovery call with JUSTECH, the first step for every engagement.",
				inputSchema: { type: "object", properties: {} },
				execute: () => {
					const info = discoveryCallInfo();
					window.open(info.url, "_blank", "noopener,noreferrer");
					return asText(info);
				},
			},
			{
				name: "open_page",
				description:
					"Navigate this tab to a JUSTECH page by slug, as returned by list_services (e.g. 'odoo', 'about', 'contact').",
				inputSchema: {
					type: "object",
					properties: {
						slug: { type: "string", enum: CATALOG.map((p) => p.slug) },
					},
					required: ["slug"],
				},
				execute: ({ slug }: { slug: string }) => {
					const page = findPage(slug);
					if (!page) return asText({ error: `Unknown slug: ${slug}` });
					window.location.assign(page.path);
					return asText(pageWithUrl(page));
				},
			},
		];

		for (const tool of tools) {
			try {
				Promise.resolve(mc.registerTool(tool, opts)).catch(() => {});
			} catch {
				// Already registered (e.g. React strict-mode double effect) or
				// unsupported shape; never break the page over it.
			}
		}
		return () => controller.abort();
	}, []);

	return null;
}
