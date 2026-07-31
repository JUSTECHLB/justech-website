import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
	title: "Portfolio",
	description:
		"Web and software projects delivered by JUSTECH for clients across Lebanon and MENA.",
	path: "/portfolio",
});

export default function PortfolioLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
