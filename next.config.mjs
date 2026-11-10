/** @type {import('next').NextConfig} */
export default {
	// output: 'export',
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "justechlb.com",
				pathname: "/wp-content/uploads/**",
			},
		],
	},
	// RFC 8288 Link headers so agents can find the machine-readable resources
	// without guessing. The Markdown alternates are served by middleware.ts.
	async headers() {
		const discovery = [
			'</llms.txt>; rel="describedby"; type="text/plain"',
			'</.well-known/mcp/server-card.json>; rel="service-desc"; type="application/json"',
			'</sitemap.xml>; rel="sitemap"; type="application/xml"',
		];
		return [
			{
				source: "/",
				headers: [
					{
						key: "Link",
						value: ['</index.md>; rel="alternate"; type="text/markdown"', ...discovery].join(", "),
					},
				],
			},
			{
				source: "/:path((?!_next/|mcp|md/|\\.well-known/)[^.]+)",
				headers: [
					{
						key: "Link",
						value: ['</:path.md>; rel="alternate"; type="text/markdown"', ...discovery].join(", "),
					},
				],
			},
		];
	},
	experimental: {
		webpackBuildWorker: true,
		parallelServerBuildTraces: true,
		parallelServerCompiles: true,
	},
};
