import { NodeHtmlMarkdown } from "node-html-markdown";
import { SITE_URL } from "@/lib/site";

/**
 * Markdown rendering of any page, reached through middleware.ts when an agent
 * sends Accept: text/markdown (or requests /<page>.md). It fetches the page's
 * own server-rendered HTML and converts the <main> content, so it never drifts
 * from what humans see.
 */
export const dynamic = "force-dynamic";

const MD_INTERNAL_HEADER = "x-justech-md-render";

const nhm = new NodeHtmlMarkdown({
	ignore: ["script", "style", "noscript", "svg", "form", "iframe"],
	maxConsecutiveNewlines: 2,
});

const decode = (s: string) =>
	s
		.replace(/&amp;/g, "&")
		.replace(/&quot;/g, '"')
		.replace(/&#x27;|&#39;/g, "'")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">");

const pick = (html: string, re: RegExp) => {
	const m = html.match(re);
	return m ? decode(m[1].trim()) : undefined;
};

export async function GET(
	request: Request,
	{ params }: { params: Promise<{ slug?: string[] }> },
) {
	const { slug = [] } = await params;
	const path = "/" + slug.map(encodeURIComponent).join("/");
	const origin = new URL(request.url).origin;

	const res = await fetch(new URL(path, origin), {
		headers: { Accept: "text/html", [MD_INTERNAL_HEADER]: "1" },
		cache: "no-store",
	});

	const headers = {
		"Content-Type": "text/markdown; charset=utf-8",
		Vary: "Accept",
		"X-Robots-Tag": "noindex",
		"Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
	};

	if (!res.ok) {
		return new Response(`# Not found\n\nNo page exists at ${SITE_URL}${path}.\n`, {
			status: res.status === 404 ? 404 : 502,
			headers: { ...headers, "Cache-Control": "no-store" },
		});
	}

	const html = await res.text();
	const title = pick(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
	const description = pick(html, /<meta name="description" content="([^"]*)"/i);
	const canonical =
		pick(html, /<link rel="canonical" href="([^"]*)"/i) ?? `${SITE_URL}${path}`;
	const main =
		html.match(/<main[\s\S]*?>([\s\S]*)<\/main>/i)?.[1] ??
		html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ??
		"";

	const body = nhm
		// Cards and logo rows are inline runs of block elements; without a
		// separator their text runs together ("Rut EssentialsAGS Solutions").
		.translate(main.replace(/<\/(div|p|span|h[1-6]|li|blockquote)>(?=<)/gi, "$& "))
		.replace(/\[ +/g, "[")
		.replace(/ +\]\(/g, "](")
		// Relative links and images are useless outside the browser.
		.replace(/\]\(\//g, `](${SITE_URL}/`)
		.trim();

	const markdown = [
		"---",
		title && `title: ${JSON.stringify(title)}`,
		description && `description: ${JSON.stringify(description)}`,
		`url: ${canonical}`,
		"---",
		"",
		body,
		"",
	]
		.filter((l) => l !== undefined)
		.join("\n");

	return new Response(markdown, {
		headers: {
			...headers,
			// Rough estimate (~4 characters per token), as agents budget by it.
			"x-markdown-tokens": String(Math.ceil(markdown.length / 4)),
			Link: `<${canonical}>; rel="canonical"`,
		},
	});
}
