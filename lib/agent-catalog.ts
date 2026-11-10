/**
 * Machine-facing summary of the site, shared by the MCP endpoint (/mcp) and
 * the WebMCP tools registered in the browser. Keep it in step with
 * public/llms.txt: both describe the same pages to agents.
 */
import { CONTACT, SITE_NAME, SITE_URL, SOCIAL_PROFILES, absoluteUrl } from "@/lib/site";
import { DISCOVERY_CALL_URL } from "@/lib/links";

export type CatalogPage = {
	slug: string;
	title: string;
	path: string;
	kind: "pillar" | "service" | "company";
	summary: string;
};

export const CATALOG: CatalogPage[] = [
	{
		slug: "revenue-scaling",
		title: "Revenue scaling",
		path: "/revenue-scaling",
		kind: "pillar",
		summary:
			"Websites, SEO, e-commerce, CRM and analytics setup, AI chatbots and lead capture, and lead scoring. For businesses whose site produces traffic but not enquiries. Measured in qualified leads per month and conversion rate.",
	},
	{
		slug: "business-operation-optimization",
		title: "Business operation optimization",
		path: "/business-operation-optimization",
		kind: "pillar",
		summary:
			"Odoo and ERP implementation, workflow automation, internal systems and admin panels, integrations, dashboards and BI, AI document processing, intelligent routing, and demand forecasting. Measured in hours saved per week and error rate.",
	},
	{
		slug: "tech-transformation",
		title: "Tech transformation",
		path: "/tech-transformation",
		kind: "pillar",
		summary:
			"AWS cloud migration and architecture, DevOps and CI/CD, legacy modernization, web and mobile application development, microservices, machine learning infrastructure, security hardening, and performance engineering. Measured in uptime, load capacity, and infrastructure cost.",
	},
	{
		slug: "consultation",
		title: "Technical consultation",
		path: "/consultation",
		kind: "service",
		summary:
			"A paid, fixed-fee, time-boxed engagement covering code and architecture, infrastructure, cloud and AWS and DevOps, or operations and automation. Ends in a written recommendation the client owns, credited against the project if they proceed. Distinct from the free discovery call.",
	},
	{
		slug: "odoo",
		title: "Odoo implementation in Lebanon",
		path: "/services/odoo",
		kind: "service",
		summary:
			"Odoo implementation, migration, and customization: inventory, accounting, sales, purchasing, manufacturing, point of sale, HR, and custom modules.",
	},
	{
		slug: "aws-devops",
		title: "AWS consulting and DevOps in Lebanon",
		path: "/services/aws-devops",
		kind: "service",
		summary:
			"AWS migration and landing zones, cloud architecture review, infrastructure as code, CI/CD, containers, serverless, monitoring, cost optimization, disaster recovery, and security hardening.",
	},
	{
		slug: "web-design",
		title: "Website design in Lebanon",
		path: "/services/web-design",
		kind: "service",
		summary: "Responsive website design for businesses in Lebanon and MENA.",
	},
	{
		slug: "web-development",
		title: "Custom software development in Lebanon",
		path: "/services/web-development",
		kind: "service",
		summary: "Web and custom application development.",
	},
	{
		slug: "seo",
		title: "SEO in Lebanon",
		path: "/services/seo",
		kind: "service",
		summary:
			"Search engine optimization aimed at terms that convert rather than vanity keywords.",
	},
	{
		slug: "ai",
		title: "AI and machine learning",
		path: "/ai",
		kind: "service",
		summary:
			"Document extraction, ticket and enquiry routing, demand forecasting, internal copilots over company documents, and lead capture and scoring. A layer across the three pillars rather than a standalone product.",
	},
	{
		slug: "about",
		title: "About",
		path: "/about",
		kind: "company",
		summary:
			"Founded in Beirut in 2019 by Omar Chouman (Founder and CEO, Technical Lead), who leads the technical side of every engagement and runs the discovery calls himself.",
	},
	{
		slug: "portfolio",
		title: "Portfolio",
		path: "/portfolio",
		kind: "company",
		summary: "Web and software projects delivered for clients across Lebanon and MENA.",
	},
	{
		slug: "contact",
		title: "Contact",
		path: "/contact",
		kind: "company",
		summary: `${CONTACT.city}, ${CONTACT.country}. ${CONTACT.phone}. ${CONTACT.email}.`,
	},
	{
		slug: "blog",
		title: "Blog",
		path: "/blog",
		kind: "company",
		summary: "Notes on software engineering, web development, SEO, and automation.",
	},
];

export const contactInfo = () => ({
	company: SITE_NAME,
	website: SITE_URL,
	email: CONTACT.email,
	phone: CONTACT.phoneE164,
	location: `${CONTACT.city}, ${CONTACT.country}`,
	discoveryCall: DISCOVERY_CALL_URL,
	profiles: SOCIAL_PROFILES,
});

export const discoveryCallInfo = () => ({
	url: DISCOVERY_CALL_URL,
	description:
		"Free, no-obligation discovery call with Omar Chouman, JUSTECH's founder. Every engagement starts here; the next step is either a paid technical consultation or a project.",
});

export const findPage = (slug: string) =>
	CATALOG.find((p) => p.slug === slug.replace(/^\/+|\/+$/g, "").split("/").pop());

export const pageWithUrl = (p: CatalogPage) => ({ ...p, url: absoluteUrl(p.path) });
