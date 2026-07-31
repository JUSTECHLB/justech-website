import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
	title: "About",
	description:
		"Software engineers in Beirut, building for businesses across Lebanon and MENA since 2019.",
	path: "/about",
});

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
