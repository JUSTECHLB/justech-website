import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

type Entry = {
	path: string;
	priority: number;
	changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const routes: Entry[] = [
	{ path: "/", priority: 1, changeFrequency: "monthly" },
	{ path: "/consultation", priority: 0.9, changeFrequency: "monthly" },
	{ path: "/revenue-scaling", priority: 0.9, changeFrequency: "monthly" },
	{
		path: "/business-operation-optimization",
		priority: 0.9,
		changeFrequency: "monthly",
	},
	{ path: "/tech-transformation", priority: 0.9, changeFrequency: "monthly" },
	{ path: "/services", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/services/odoo", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/services/aws-devops", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/services/web-design", priority: 0.8, changeFrequency: "monthly" },
	{
		path: "/services/web-development",
		priority: 0.8,
		changeFrequency: "monthly",
	},
	{ path: "/services/seo", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/ai", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/portfolio", priority: 0.7, changeFrequency: "monthly" },
	{ path: "/about", priority: 0.7, changeFrequency: "yearly" },
	{ path: "/contact", priority: 0.7, changeFrequency: "yearly" },
	{ path: "/blog", priority: 0.6, changeFrequency: "weekly" },
	{ path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
	{ path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
];

/** Blog frontmatter dates are written DD-MM-YYYY. */
function parsePostDate(value: unknown): Date | undefined {
	if (typeof value !== "string") return undefined;
	const match = value.match(/^(\d{2})-(\d{2})-(\d{4})$/);
	if (!match) return undefined;
	const [, day, month, year] = match;
	const date = new Date(`${year}-${month}-${day}T00:00:00Z`);
	return Number.isNaN(date.getTime()) ? undefined : date;
}

function blogEntries(): MetadataRoute.Sitemap {
	const dir = path.join(process.cwd(), "content/blog");
	if (!fs.existsSync(dir)) return [];

	return fs
		.readdirSync(dir)
		.filter((file) => file.endsWith(".md"))
		.map((file) => {
			const slug = file.replace(/\.md$/, "");
			const { data } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
			return {
				url: `${SITE_URL}/blog/${slug}`,
				lastModified: parsePostDate(data.date) ?? new Date(),
				changeFrequency: "yearly" as const,
				priority: 0.5,
			};
		});
}

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();

	return [
		...routes.map((route) => ({
			url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
			lastModified: now,
			changeFrequency: route.changeFrequency,
			priority: route.priority,
		})),
		...blogEntries(),
	];
}
