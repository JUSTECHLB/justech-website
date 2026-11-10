import { NextResponse, type NextRequest } from "next/server";

/**
 * Markdown for agents. A request that asks for text/markdown in Accept, or
 * that appends ".md" to a page path (/about.md, /index.md), is rewritten to
 * the /md route, which returns a Markdown rendering of the same page.
 * Everything else passes through untouched and gets the HTML page.
 *
 * Runs at the edge, ahead of the CDN cache, so a cached HTML page is never
 * handed to an agent that asked for Markdown.
 */
export const MD_INTERNAL_HEADER = "x-justech-md-render";

export function middleware(request: NextRequest) {
	// The /md route fetches the HTML page itself; let that request through.
	if (request.headers.get(MD_INTERNAL_HEADER)) return NextResponse.next();

	const { pathname } = request.nextUrl;
	const accept = request.headers.get("accept") ?? "";
	const wantsMarkdown = /\btext\/markdown\b/i.test(accept);
	const isMdSuffix = pathname.endsWith(".md");

	if (!wantsMarkdown && !isMdSuffix) return NextResponse.next();

	let page = isMdSuffix ? pathname.slice(0, -3) : pathname;
	if (page === "/index" || page === "") page = "/";

	const url = request.nextUrl.clone();
	url.pathname = page === "/" ? "/md" : `/md${page}`;
	return NextResponse.rewrite(url);
}

export const config = {
	// Pages only: skip Next internals, API-ish routes, and static files (but
	// keep *.md so /about.md works).
	matcher: [
		"/((?!_next/|md/|md$|mcp|api/|\\.well-known/|.*\\.(?!md$)[a-zA-Z0-9]+$).*)",
	],
};
