import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import { founderSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
	title: "About",
	description:
		"Software engineers in Beirut, building for businesses across Lebanon and MENA since 2019. Founded by Omar Chouman.",
	path: "/about",
});

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{/* Emitted from the layout so the Person markup is unambiguously
			    server-rendered: the page itself is a client component. */}
			<JsonLd schema={founderSchema} id="schema-founder" />
			{children}
		</>
	);
}
