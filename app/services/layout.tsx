import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		// Bare, because the root layout's template appends the brand. The
		// template here is what gives child pages (odoo, aws-devops, ...) their
		// suffix, since a nested template stops the root one propagating.
		default: "Services",
		template: "%s | JUSTECH",
	},
	description:
		"Website design, custom software, SEO, Odoo implementation, and AWS consulting for businesses in Lebanon and MENA.",
};

export default function ServicesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
