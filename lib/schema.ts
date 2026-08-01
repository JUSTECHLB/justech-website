import {
	CONTACT,
	FOUNDING_YEAR,
	SITE_DESCRIPTION,
	SITE_NAME,
	SITE_URL,
	SOCIAL_PROFILES,
	absoluteUrl,
} from "@/lib/site";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const FOUNDER_ID = `${SITE_URL}/about#omar-chouman`;

/**
 * A named human behind the company. Search engines and answer engines both
 * weigh this: it is the difference between a company that claims engineering
 * depth and one that says who is accountable for it.
 */
export const founderSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	"@id": FOUNDER_ID,
	name: "Omar Chouman",
	jobTitle: "Founder and CEO, Technical Lead",
	image: absoluteUrl("/images/Omar.jpg"),
	url: absoluteUrl("/about"),
	worksFor: { "@id": ORGANIZATION_ID },
	address: {
		"@type": "PostalAddress",
		addressLocality: CONTACT.city,
		addressCountry: CONTACT.countryCode,
	},
};

/**
 * ProfessionalService inherits from both Organization and LocalBusiness, which
 * is what a software company with a physical office in Beirut actually is.
 *
 * TODO (needs input from JUSTECH): a street address and geo coordinates. Without
 * them this is valid markup but weaker for local search. Adding `openingHours`
 * and `priceRange` would help too, but only if they are real.
 */
export const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	"@id": ORGANIZATION_ID,
	name: SITE_NAME,
	legalName: "JUSTECH",
	url: SITE_URL,
	description: SITE_DESCRIPTION,
	logo: {
		"@type": "ImageObject",
		url: absoluteUrl("/jt.webp"),
	},
	image: absoluteUrl("/jt.webp"),
	foundingDate: FOUNDING_YEAR,
	founder: { "@id": FOUNDER_ID },
	email: CONTACT.email,
	telephone: CONTACT.phoneE164,
	address: {
		"@type": "PostalAddress",
		addressLocality: CONTACT.city,
		addressCountry: CONTACT.countryCode,
	},
	areaServed: [
		{ "@type": "Country", name: "Lebanon" },
		{ "@type": "Place", name: "Middle East and North Africa" },
	],
	knowsAbout: [
		"Software engineering",
		"Website design and development",
		"Search engine optimization",
		"Odoo ERP implementation",
		"AWS cloud architecture",
		"DevOps and CI/CD",
		"Workflow automation",
		"Machine learning integration",
	],
	sameAs: SOCIAL_PROFILES,
	contactPoint: {
		"@type": "ContactPoint",
		contactType: "sales",
		telephone: CONTACT.phoneE164,
		email: CONTACT.email,
		areaServed: ["LB", "AE", "SA", "QA"],
		availableLanguage: ["English", "Arabic"],
	},
};

export const websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": WEBSITE_ID,
	url: SITE_URL,
	name: SITE_NAME,
	description: SITE_DESCRIPTION,
	inLanguage: "en",
	publisher: { "@id": ORGANIZATION_ID },
};

export function serviceSchema({
	name,
	description,
	path,
	serviceType,
}: {
	name: string;
	description: string;
	path: string;
	serviceType: string;
}) {
	return {
		"@context": "https://schema.org",
		"@type": "Service",
		name,
		description,
		serviceType,
		url: absoluteUrl(path),
		provider: { "@id": ORGANIZATION_ID },
		areaServed: [
			{ "@type": "Country", name: "Lebanon" },
			{ "@type": "Place", name: "Middle East and North Africa" },
		],
	};
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: absoluteUrl(item.path),
		})),
	};
}

export function faqSchema(items: { question: string; answer: string }[]) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		})),
	};
}
