import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

/**
 * The generated card from app/opengraph-image.tsx. Next only attaches that file
 * to the segment it lives in, so pages that declare their own `openGraph` block
 * have to point at it themselves or they ship without an image.
 */
const OG_IMAGE = {
	url: "/opengraph-image",
	width: 1200,
	height: 630,
	alt: "JUSTECH: software engineering for businesses in Lebanon and MENA",
};

/**
 * Builds the metadata every page needs: a canonical URL so the same content
 * cannot be indexed under two addresses, plus matching Open Graph and Twitter
 * cards. `title` is the short form; the root layout template appends the brand.
 */
export function pageMetadata({
	title,
	description,
	path,
	ogTitle,
	type = "website",
}: {
	title: string;
	description: string;
	path: string;
	/** Overrides the social-card headline when the short title reads oddly alone. */
	ogTitle?: string;
	type?: "website" | "article";
}): Metadata {
	const socialTitle = ogTitle ?? `${title} | ${SITE_NAME}`;

	return {
		title,
		description,
		alternates: {
			canonical: path,
		},
		openGraph: {
			type,
			siteName: SITE_NAME,
			locale: "en_US",
			url: path,
			title: socialTitle,
			description,
			images: [OG_IMAGE],
		},
		twitter: {
			card: "summary_large_image",
			title: socialTitle,
			description,
			images: [OG_IMAGE.url],
		},
	};
}
