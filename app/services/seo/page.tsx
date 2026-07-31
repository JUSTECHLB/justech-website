import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import Faq from "@/components/marketing/faq";
import PageHero from "@/components/marketing/page-hero";
import PillGroup from "@/components/marketing/pill-group";
import Reveal from "@/components/marketing/reveal";
import SpecList from "@/components/marketing/spec-list";
import { pageMetadata } from "@/lib/seo";
import { discoveryLinkProps } from "@/lib/links";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
	title: "SEO in Lebanon",
	description:
		"SEO for businesses in Lebanon and MENA, aimed at the terms customers actually search. Measured in enquiries, not impressions.",
	path: "/services/seo",
});

const work = [
	"Technical SEO audit",
	"Keyword and intent research",
	"On-page optimization",
	"Site architecture and internal linking",
	"Core Web Vitals and page speed",
	"Structured data",
	"Local SEO and Google Business Profile",
	"Arabic and English search",
	"Content strategy",
	"Link acquisition",
	"Analytics and conversion tracking",
	"Monthly reporting",
];

export default function SEOPage() {
	return (
		<main className="min-h-screen bg-dark text-white">
			<JsonLd
				schema={serviceSchema({
					name: "Search Engine Optimization",
					description:
						"SEO for businesses in Lebanon and MENA, aimed at the terms customers actually search.",
					path: "/services/seo",
					serviceType: "Search engine optimization",
				})}
				id="schema-service"
			/>
			<JsonLd
				schema={breadcrumbSchema([
					{ name: "Home", path: "/" },
					{ name: "Services", path: "/services" },
					{ name: "SEO", path: "/services/seo" },
				])}
				id="schema-breadcrumb"
			/>

			<PageHero
				eyebrow="Search Engine Optimization"
				title={
					<>
						Ranking for terms that{" "}
						<span className="gradient-text">produce enquiries</span>
						.
					</>
				}
				lede="SEO for businesses in Lebanon and across MENA. We go after the searches your customers actually make, not the ones that make a report look good."
				orbit={{
					icon: <Search className="w-8 h-8 text-blue-light" />,
					title: "SEO",
					subtitle: "Enquiries, not impressions",
				}}
			/>

			<section className="py-20 relative overflow-hidden">
				<div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[120px] -z-10"></div>

				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
						<SpecList
							heading="You probably need this if"
							items={[
								"You are invisible on Google for the terms customers actually search",
								"Traffic goes up and enquiries stay flat",
								"Competitors with worse offerings outrank you",
								"Nobody can say which pages bring in business",
								"An agency sent you rankings for keywords nobody searches",
								"Your Google Business Profile is out of date or unclaimed",
							]}
						/>

						<div>
							<Reveal>
								<h2 className="text-sm font-semibold uppercase tracking-widest text-blue-light mb-6">
									What the work involves
								</h2>
							</Reveal>
							<PillGroup items={work} />

							<Reveal delay={0.1}>
								<h2 className="text-sm font-semibold uppercase tracking-widest text-blue-light mt-12 mb-6">
									How we measure it
								</h2>
								<p className="text-lg text-gray-300">
									Qualified enquiries per month. Conversion
									rate from organic. Rankings for terms with
									commercial intent. Revenue per visitor.
									Impressions and average position are
									diagnostics, not results.
								</p>
							</Reveal>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 relative bg-dark-lighter overflow-hidden">
				<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] -z-10"></div>

				<div className="container mx-auto">
					<Reveal>
						<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
							How an engagement{" "}
							<span className="gradient-text">actually runs</span>
						</h2>
					</Reveal>
					<div className="max-w-3xl mx-auto">
						<SpecList
							heading="Sequence"
							numbered
							items={[
								"Technical audit. Crawlability, indexation, speed, structured data, and everything quietly stopping pages from ranking.",
								"Research. The terms your buyers use, in Arabic and English, sorted by intent rather than volume.",
								"Fix the foundations. Site structure, internal linking, metadata, and Core Web Vitals before any content work.",
								"Content. Pages that answer a real search, written for the person searching rather than for a keyword count.",
								"Authority. Earning links and citations a human would consider relevant.",
								"Measure and iterate. Conversion tracking wired to enquiries, reviewed monthly, with the plan adjusted from data.",
							]}
						/>
					</div>
				</div>
			</section>

			{/*
			  The previous version of this page carried two case studies with
			  invented numbers (150% traffic, 35% conversion, 120% leads) for
			  unnamed clients, linking to /portfolio/seo-case-study-1 and -2,
			  which do not exist. Both have been removed.

			  TODO (needs input from JUSTECH): a named SEO client with real
			  before-and-after numbers. Alkoun Business, AmazeTech, Rut
			  Essentials and The Yas Design are tagged as SEO work in the
			  portfolio, so the data may already exist.
			*/}

			<Faq
				heading="Common questions"
				items={[
					{
						question: "How long does SEO take to show results?",
						answer: "Technical fixes can move things within weeks. Ranking for competitive commercial terms usually takes three to six months, and longer in a crowded category. Anyone promising page one in thirty days is either targeting terms nobody searches or planning something that will cost you the domain later.",
					},
					{
						question: "Do you work in Arabic as well as English?",
						answer: "Yes. Search behaviour differs between the two, including transliteration and dialect, so we research them separately rather than translating a keyword list.",
					},
					{
						question:
							"What is the difference between local SEO and regular SEO?",
						answer: "Local SEO targets searches with geographic intent, where the map pack and your Google Business Profile decide who gets called. For a business serving Beirut or the Gulf that is often where the enquiries actually come from, so it gets treated as its own workstream.",
					},
					{
						question: "Can you guarantee a number one ranking?",
						answer: "No, and neither can anyone else. Google does not sell placement in organic results and does not publish the algorithm. What we commit to is the work, the measurement, and an honest read on whether a term is worth chasing at all.",
					},
				]}
			/>

			<section className="py-24 relative">
				<div className="absolute inset-0 gradient-bg rounded-3xl mx-4 md:mx-12 -z-10"></div>
				<div className="absolute inset-0 grid-pattern opacity-10 rounded-3xl mx-4 md:mx-12 -z-10"></div>

				<Reveal className="container mx-auto py-16 text-center">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Find out what you are{" "}
						<span className="gradient-text">missing</span>.
					</h2>
					<p className="text-xl mb-10 max-w-2xl mx-auto">
						Part of{" "}
						<Link
							href="/revenue-scaling"
							className="underline underline-offset-4"
						>
							revenue scaling
						</Link>
						. Tell us the terms you want to win on a short call and
						we will tell you honestly whether they are worth
						chasing.
					</p>
					<Link
						{...discoveryLinkProps}
						className="inline-block w-full sm:w-auto"
					>
						<Button className="bg-white text-dark hover:bg-gray-100 w-full sm:w-auto whitespace-normal px-6 sm:px-8 py-6 text-base sm:text-lg h-auto rounded-full group transition-transform duration-300 hover:scale-105">
							Book a discovery call
							<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
						</Button>
					</Link>
				</Reveal>
			</section>
		</main>
	);
}
