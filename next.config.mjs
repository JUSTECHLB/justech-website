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
	experimental: {
		webpackBuildWorker: true,
		parallelServerBuildTraces: true,
		parallelServerCompiles: true,
	},
};
