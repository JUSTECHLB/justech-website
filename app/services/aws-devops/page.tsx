import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cloud } from "lucide-react";

import { Button } from "@/components/ui/button";
import PageHero from "@/components/marketing/page-hero";
import PillGroup from "@/components/marketing/pill-group";
import Reveal from "@/components/marketing/reveal";
import SpecList from "@/components/marketing/spec-list";
import { discoveryLinkProps } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
	title: "AWS Consulting and DevOps in Lebanon",
	description:
		"AWS migration, cloud architecture, CI/CD, and infrastructure as code for businesses in Lebanon and MENA. AWS Solutions Architect certified.",
	path: "/services/aws-devops",
});

const capabilities = [
	"AWS migration and landing zone setup",
	"Cloud architecture review",
	"Infrastructure as code (Terraform, CDK)",
	"CI/CD pipelines",
	"Containers (Docker, ECS, EKS)",
	"Serverless (Lambda, API Gateway)",
	"Monitoring and alerting",
	"Cost optimization",
	"Backup and disaster recovery",
	"Security hardening and IAM",
	"Database migration and tuning",
	"Support retainers",
];

export default function AwsDevOpsPage() {
	return (
		<main className="min-h-screen bg-dark text-white">
			<JsonLd
				schema={serviceSchema({
					name: "AWS Consulting and DevOps",
					description:
						"AWS migration, cloud architecture, CI/CD, and infrastructure as code for businesses in Lebanon and MENA.",
					path: "/services/aws-devops",
					serviceType: "AWS cloud consulting and DevOps",
				})}
				id="schema-service"
			/>
			<JsonLd
				schema={breadcrumbSchema([
					{ name: "Home", path: "/" },
					{ name: "Services", path: "/services" },
					{ name: "AWS & DevOps", path: "/services/aws-devops" },
				])}
				id="schema-breadcrumb"
			/>
			<PageHero
				eyebrow="AWS & DevOps"
				title={
					<>
						Deployments that stop being{" "}
						<span className="gradient-text">an event</span>.
					</>
				}
				lede="AWS migration, cloud architecture, and the delivery pipeline around it. For teams in Lebanon and MENA whose infrastructure has quietly become the thing holding everything back."
				orbit={{
					icon: <Cloud className="w-8 h-8 text-blue-light" />,
					title: "AWS & DevOps",
					subtitle: "Repeatable by design",
				}}
			/>

			<section className="py-20 relative overflow-hidden">
				<div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[120px] -z-10"></div>

				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
						<SpecList
							heading="You probably need this if"
							items={[
								"Releases happen at night, by hand, with everyone watching",
								"The system slows down or falls over when traffic spikes",
								"One server does everything and nobody wants to touch it",
								"Your cloud bill grows and nobody can say which service is responsible",
								"You have backups but you've never tested a restore",
								"A client asked about your security posture and you couldn't answer",
							]}
						/>

						<Reveal delay={0.1}>
							<h2 className="text-sm font-semibold uppercase tracking-widest text-blue-light mb-6">
								What we do
							</h2>
							<PillGroup items={capabilities} />

							<h2 className="text-sm font-semibold uppercase tracking-widest text-blue-light mt-12 mb-6">
								How we measure it
							</h2>
							<p className="text-lg text-gray-300">
								Uptime. Deploy frequency. Time to restore.
								Infrastructure cost per transaction. Load
								capacity before the first thing breaks.
							</p>

							<p className="mt-8 pt-6 border-t border-blue/10 text-gray-400">
								<span className="font-semibold text-white">
									Certifications held:
								</span>{" "}
								AWS Solutions Architect &middot; AWS Cloud
								Practitioner
							</p>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="py-20 relative bg-dark-lighter">
				<div className="container mx-auto">
					<Reveal>
						<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
							How a migration{" "}
							<span className="gradient-text">actually runs</span>
						</h2>
					</Reveal>
					<div className="max-w-3xl mx-auto">
						<SpecList
							heading="Sequence"
							numbered
							items={[
								"Inventory. Everything currently running, where it runs, and what depends on it.",
								"Target architecture. What the system should look like, sized for the load you expect in two years rather than the load you had last year.",
								"Landing zone. Accounts, networking, IAM, logging, and cost controls before a single workload moves.",
								"Pipeline first. CI/CD and infrastructure as code, so every later step is repeatable.",
								"Migrate in slices. Lowest risk workload first, with a tested rollback at each step.",
								"Cut over. Rehearsed, timed, and reversible.",
								"Harden and tune. Monitoring, alerting, restore testing, and a pass on cost.",
								"Handover. Runbooks your team can follow without calling us, and a retainer if you'd rather call us.",
							]}
						/>
					</div>
				</div>
			</section>

			{/*
			  TODO (needs input from JUSTECH): a named infrastructure client and one
			  line of outcome. This is the same evidence gap flagged on the tech
			  transformation pillar page, and it matters most here.
			*/}

			<section className="py-24 relative">
				<div className="absolute inset-0 gradient-bg rounded-3xl mx-4 md:mx-12 -z-10"></div>
				<div className="absolute inset-0 grid-pattern opacity-10 rounded-3xl mx-4 md:mx-12 -z-10"></div>

				<Reveal className="container mx-auto py-16 text-center">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Have someone look at it{" "}
						<span className="gradient-text">before it breaks</span>.
					</h2>
					<p className="text-xl mb-10 max-w-2xl mx-auto">
						Part of{" "}
						<Link
							href="/tech-transformation"
							className="underline underline-offset-4"
						>
							tech transformation
						</Link>
						. Start with a short call about your architecture and
						where you expect it to break.
					</p>
					<Link {...discoveryLinkProps} className="inline-block w-full sm:w-auto">
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
