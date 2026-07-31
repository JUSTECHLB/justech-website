import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code } from "lucide-react";

import { Button } from "@/components/ui/button";
import PageHero from "@/components/marketing/page-hero";
import PillGroup from "@/components/marketing/pill-group";
import Reveal from "@/components/marketing/reveal";
import SpecList from "@/components/marketing/spec-list";
import { pageMetadata } from "@/lib/seo";
import { discoveryLinkProps } from "@/lib/links";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
	title: "Custom Software Development in Lebanon",
	description:
		"Web and custom application development for businesses in Lebanon and MENA. Built on the stack that fits the problem, not the one we happen to know.",
	path: "/services/web-development",
});

const stackGroups: [string, string[]][] = [
	["Frontend", ["Next.js", "React", "Angular", "TypeScript", "Tailwind CSS"]],
	[
		"Backend",
		["Node.js", "Python (FastAPI, Django)", "Go", ".NET", "Laravel"],
	],
	["Data", ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"]],
	[
		"Delivery and infrastructure",
		[
			"Docker",
			"AWS",
			"CI/CD pipelines",
			"Infrastructure as code",
			"Monitoring and alerting",
		],
	],
	[
		"Interfaces and integrations",
		[
			"REST APIs",
			"GraphQL",
			"WebSockets",
			"Payment gateways",
			"Third-party integrations",
		],
	],
];

export default function WebDevelopmentPage() {
	return (
		<main className="min-h-screen bg-dark text-white">
			<JsonLd
				schema={serviceSchema({
					name: "Custom Software Development",
					description:
						"Web and custom application development for businesses in Lebanon and MENA.",
					path: "/services/web-development",
					serviceType: "Web and custom application development",
				})}
				id="schema-service"
			/>
			<JsonLd
				schema={breadcrumbSchema([
					{ name: "Home", path: "/" },
					{ name: "Services", path: "/services" },
					{
						name: "Web Development",
						path: "/services/web-development",
					},
				])}
				id="schema-breadcrumb"
			/>

			<PageHero
				eyebrow="Custom Software Development"
				title={
					<>
						Software built for the problem,{" "}
						<span className="gradient-text">
							not for the brochure
						</span>
						.
					</>
				}
				lede="Web and custom application development for businesses in Lebanon and MENA. We pick the language and architecture that fit the problem, your team, and the ten-year cost."
				orbit={{
					icon: <Code className="w-8 h-8 text-blue-light" />,
					title: "Development",
					subtitle: "Stack-agnostic by choice",
				}}
			/>

			<section className="py-20 relative overflow-hidden">
				<div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[120px] -z-10"></div>

				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
						<SpecList
							heading="You probably need this if"
							items={[
								"An off-the-shelf tool covers most of the job and the rest is manual",
								"Your business logic lives in one person's spreadsheet",
								"Two systems hold the same data and neither agrees with the other",
								"The current build cannot take the load you expect next year",
								"You need something no vendor sells, because the process is yours",
								"A previous developer left and nobody can safely change the code",
							]}
						/>

						<Reveal delay={0.1}>
							<h2 className="text-sm font-semibold uppercase tracking-widest text-blue-light mb-6">
								How we measure it
							</h2>
							<p className="text-lg text-gray-300 mb-8">
								Hours saved per week. Error rate. Load capacity
								before the first thing breaks. Deploy frequency.
								Whether your team can change the system without
								calling us.
							</p>
							<p className="text-gray-400">
								That last one matters most. Code you cannot
								maintain is a liability with a nice interface, so
								the handover is documentation and access, not a
								dependency on us.
							</p>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="py-20 relative bg-dark-lighter overflow-hidden">
				<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] -z-10"></div>

				<div className="container mx-auto">
					<Reveal>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							What we{" "}
							<span className="gradient-text">build with</span>
						</h2>
						<p className="text-lg text-gray-400 mb-12 max-w-2xl">
							Not a preference list. These are the tools we reach
							for, and which one we pick depends on the problem in
							front of us.
						</p>
					</Reveal>

					<div className="space-y-10 max-w-4xl">
						{stackGroups.map(([label, items], index) => (
							<div key={label}>
								<Reveal delay={Math.min(index * 0.05, 0.2)}>
									<h3 className="text-sm font-semibold uppercase tracking-widest text-blue-light mb-5">
										{label}
									</h3>
								</Reveal>
								<PillGroup items={items} />
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-20 relative">
				<div className="container mx-auto">
					<Reveal>
						<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
							How a build{" "}
							<span className="gradient-text">actually runs</span>
						</h2>
					</Reveal>
					<div className="max-w-3xl mx-auto">
						<SpecList
							heading="Sequence"
							numbered
							items={[
								"Requirements. We follow the real process end to end and write down every place it stops, rather than taking a feature list at face value.",
								"Architecture. What gets built, what gets bought, and what shape it needs to be to survive the load you expect in two years.",
								"Foundations first. Repository, environments, pipeline, and tests before feature work, so every later step is repeatable.",
								"Build in slices. Working software you can use at the end of each slice, not a big reveal at the end.",
								"Testing. Automated where it pays for itself, manual where it does not, and load testing before you find the ceiling in production.",
								"Launch and handover. Runbooks, documentation, and access, plus a support retainer if you would rather call us than learn it.",
							]}
						/>
					</div>
				</div>
			</section>

			<section className="py-24 relative">
				<div className="absolute inset-0 gradient-bg rounded-3xl mx-4 md:mx-12 -z-10"></div>
				<div className="absolute inset-0 grid-pattern opacity-10 rounded-3xl mx-4 md:mx-12 -z-10"></div>

				<Reveal className="container mx-auto py-16 text-center">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Describe the thing you{" "}
						<span className="gradient-text">cannot buy</span>.
					</h2>
					<p className="text-xl mb-10 max-w-2xl mx-auto">
						Part of{" "}
						<Link
							href="/tech-transformation"
							className="underline underline-offset-4"
						>
							tech transformation
						</Link>
						. Walk us through the process on a short call and we
						will tell you whether it needs custom software or a tool
						you already pay for.
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
