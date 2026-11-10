import { SITE_URL } from "@/lib/site";

/**
 * Hand-written rather than app/robots.ts because the Metadata API cannot emit
 * Content-Signal (https://contentsignals.org) directives.
 *
 * Content-Signal: search = appear in search results, ai-input = be used to
 * ground AI answers (ChatGPT, Claude, Perplexity browsing), ai-train = be used
 * to train models. All three are "yes" because the point is for assistants to
 * know and recommend JUSTECH. Set ai-train=no to opt out of training only.
 */
const body = `User-Agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /
Disallow: /__forms.html
Disallow: /md/

Host: ${SITE_URL}
Sitemap: ${SITE_URL}/sitemap.xml
`;

export const dynamic = "force-static";

export function GET() {
	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
