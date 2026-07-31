import type { Metadata } from "next";
import Link from "next/link";
import {
	ArrowRight,
	ClipboardCheck,
	Code,
	Cloud,
	Server,
	Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Faq from "@/components/marketing/faq";
import PageHero from "@/components/marketing/page-hero";
import Reveal from "@/components/marketing/reveal";
import SpecList from "@/components/marketing/spec-list";
import { discoveryLinkProps } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/json-ld";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
	title: "Technical Consultation",
	description:
		"A paid, fixed-fee technical consultation on your code, infrastructure, cloud, AWS and DevOps, or business automation. Ends in a written recommendation you own.",
	path: "/consultation",
});

const areas = [
	{
		icon: Code,
		title: "Code and architecture",
		body: "A read of the codebase you actually have: structure, dependencies, test coverage, and the parts that will not survive the next hire or the next feature.",
	},
	{
		icon: Server,
		title: "Infrastructure",
		body: "What runs where, what it costs, what happens when it falls over, and whether the shape of it still matches the size of the business.",
	},
	{
		icon: Cloud,
		title: "Cloud, AWS, and DevOps",
		body: "Account and network structure, IAM, pipelines, monitoring, backup and restore. Whether your deployments are repeatable and whether anyone could rebuild the environment from scratch.",
	},
	{
		icon: Workflow,
		title: "Operations and automation",
		body: "The manual processes your team runs by hand, which of them are worth automating, and what the honest saving looks like once you subtract the build.",
	},
];

export default function ConsultationPage() {
	return (
		<main className="min-h-screen bg-dark text-white">
			<JsonLd
				schema={serviceSchema({
					name: "Technical Consultation",
					description:
						"A paid, fixed-fee technical consultation on code, infrastructure, cloud, AWS and DevOps, or business automation, ending in a written recommendation.",
					path: "/consultation",
					serviceType: "Technical consulting and architecture review",
				})}
				id="schema-service"
			/>
			<PageHero
				eyebrow="Service"
				title={
					<>
						Technical{" "}
						<span className="gradient-text">consultation</span>.
					</>
				}
				lede="Senior engineering guidance on the system you already have. Paid, fixed-fee, and time-boxed. It ends in a written recommendation you keep, whether or not you hire us to build anything."
				orbit={{
					icon: <ClipboardCheck className="w-8 h-8 text-blue-light" />,
					title: "Consultation",
					subtitle: "Diagnosis before build",
				}}
			/>

			<section className="py-20 relative overflow-hidden">
				<div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[120px] -z-10"></div>

				<div className="container mx-auto">
					<Reveal>
						<h2 className="text-3xl md:text-4xl font-bold mb-12">
							What we <span className="gradient-text">consult on</span>
						</h2>
					</Reveal>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{areas.map((area, index) => (
							<Reveal
								key={area.title}
								delay={Math.min(index * 0.08, 0.32)}
								className="h-full"
							>
								<div className="h-full gradient-border rounded-2xl p-8 bg-dark-lighter group card-hover-gradient transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue/10">
									<div className="w-14 h-14 rounded-2xl bg-dark border border-blue/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-blue-light group-hover:scale-105">
										<area.icon className="w-7 h-7 text-blue-light" />
									</div>
									<h3 className="text-xl font-semibold mb-3">
										{area.title}
									</h3>
									<p className="text-gray-400 group-hover:text-gray-200">
										{area.body}
									</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="py-20 relative bg-dark-lighter">
				<div className="container mx-auto">
					<Reveal className="text-center max-w-2xl mx-auto mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							This is not the{" "}
							<span className="gradient-text">discovery call</span>
						</h2>
						<p className="text-lg text-gray-400">
							Two different things, and it is worth being clear
							about which one you are booking.
						</p>
					</Reveal>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
						<Reveal delay={0.05} className="h-full">
							<div className="h-full rounded-2xl border border-blue/20 bg-dark p-8 flex flex-col transition-all duration-300 hover:border-blue/40 hover:-translate-y-1">
							<p className="text-xs font-semibold uppercase tracking-widest text-blue-light mb-4">
								Discovery call
							</p>
							<p className="text-2xl font-bold mb-6">Free</p>
							<ul className="space-y-3 text-gray-300 mb-8">
								<li>A short call to understand the problem</li>
								<li>
									You describe what is not working, we ask
									questions
								</li>
								<li>
									We say whether we can help, and what the
									right next step is
								</li>
								<li>No document, no obligation, no invoice</li>
							</ul>
							<Link {...discoveryLinkProps} className="mt-auto block">
								<Button className="w-full bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white rounded-full py-6 h-auto">
									Book a discovery call
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
							</div>
						</Reveal>

						<Reveal delay={0.15} className="h-full">
							<div className="h-full rounded-2xl border border-blue/40 bg-dark p-8 relative flex flex-col transition-all duration-300 hover:border-blue-light hover:-translate-y-1">
							<div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-gradient-to-r from-blue to-indigo text-xs font-semibold">
								This page
							</div>
							<p className="text-xs font-semibold uppercase tracking-widest text-blue-light mb-4">
								Technical consultation
							</p>
							<p className="text-2xl font-bold mb-6">Fixed fee</p>
							<ul className="space-y-3 text-gray-300 mb-8">
								<li>
									A time-boxed engagement, scheduled and
									scoped in advance
								</li>
								<li>
									We go into the code, the infrastructure, and
									the numbers
								</li>
								<li>
									You get a written recommendation you own and
									can act on
								</li>
								<li>
									Fee credited against the project if you go
									ahead
								</li>
							</ul>
							<Link {...discoveryLinkProps} className="mt-auto block">
								<Button
									variant="outline"
									className="w-full border-blue/20 hover:bg-dark-lighter text-white rounded-full py-6 h-auto"
								>
									Start with a discovery call
								</Button>
							</Link>
							</div>
						</Reveal>
					</div>

					<Reveal delay={0.2}>
					<p className="text-center text-gray-400 mt-10 max-w-2xl mx-auto">
						Everyone starts with the discovery call. If a paid
						consultation is not the right thing for you, we will say
						so on that call rather than sell you one.
					</p>
					</Reveal>
				</div>
			</section>

			<section className="py-20 relative overflow-hidden">
				<div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] -z-10"></div>

				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
						<Reveal className="lg:col-span-5 lg:sticky lg:top-32 self-start">
							<h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
								Why the consultation is{" "}
								<span className="gradient-text">paid work</span>.
							</h2>
							<div className="w-20 h-1 bg-gradient-to-r from-blue to-indigo"></div>
						</Reveal>

						<Reveal delay={0.1} className="lg:col-span-7 space-y-6">
							<p className="text-xl leading-relaxed text-gray-300">
								A free proposal is written to win the work. That
								is its only job. So it takes your description of
								the problem at face value, prices what you asked
								for, and stays quiet about anything that would
								make the number bigger or the timeline longer.
							</p>
							<p className="text-xl leading-relaxed text-gray-300">
								Nobody is being dishonest. There is simply no
								budget to investigate before the contract is
								signed, so the investigation happens afterwards,
								during the build, at your cost. That is where
								scope creep, missed integrations, and the
								rebuild in month four come from.
							</p>
							<p className="text-xl leading-relaxed text-gray-300">
								Paying for the diagnosis changes the incentive.
								We get paid to tell you what is actually wrong,
								including when the answer is smaller, cheaper,
								or somebody else's job.
							</p>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="py-20 relative bg-dark-lighter">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
						<SpecList
							heading="What the consultation covers"
							numbered
							items={[
								"The problem in your words, restated in ours, until both match",
								"Your current stack: what runs where, what it costs, what breaks",
								"The data: where it lives, how many copies of it exist, who retypes it",
								"The commercial picture: which number this work is supposed to move",
								"Constraints we have to design around, including team, budget, and timeline",
								"Where the real risk sits, and what happens if you do nothing",
							]}
						/>

						<SpecList
							heading="What you walk away with"
							items={[
								"A written recommendation, specific enough to act on",
								"A scope and a realistic range for cost and duration",
								"The options we rejected, and why we rejected them",
								"A document you own, useful even if you never hire us",
								"An honest answer, including if the answer is that you don't need us yet",
							]}
						/>
					</div>
				</div>
			</section>

			<section className="py-20 relative">
				<div className="container mx-auto">
					<Reveal className="max-w-3xl mx-auto">
					<div className="gradient-border rounded-2xl p-8 md:p-12 bg-dark-lighter">
						<h2 className="text-2xl md:text-3xl font-bold mb-6">
							Fee and duration
						</h2>
						{/*
						  TODO (needs input from JUSTECH): the fee and the duration.
						  Drop them into the sentence below, e.g. "A fixed fee of $X for
						  a Y-day engagement." Until then the page states the terms
						  without naming a number.

						  Also confirm whether the consultation is offered as an ongoing
						  advisory retainer as well as a one-off engagement. If it is,
						  that belongs on this page.
						*/}
						<p className="text-lg text-gray-300 mb-4">
							The fee is fixed and agreed before we start, so the
							cost is never a surprise and never depends on what
							we find.
						</p>
						<p className="text-lg text-gray-300">
							If you go ahead with the project, the fee is
							credited in full against it. If you don't, you keep
							the document and owe us nothing further.
						</p>
					</div>
					</Reveal>
				</div>
			</section>

			<Faq
				heading="Common questions"
				items={[
					{
						question:
							"What is the difference between the discovery call and the technical consultation?",
						answer: "The discovery call is free. It is a short conversation where you describe what is not working and we work out whether we can help. The technical consultation is a paid, fixed-fee engagement where we go into the code, the infrastructure, and the numbers, and give you a written recommendation you own. Everyone starts with the discovery call.",
					},
					{
						question: "What does a technical consultation cost?",
						answer: "The fee is fixed and agreed before we start, so it never depends on what we find. If you go ahead with the project afterwards, the fee is credited in full against it. If you do not, you keep the written recommendation and owe nothing further.",
					},
					{
						question:
							"What do we actually get at the end of it?",
						answer: "A written recommendation specific enough to act on: the problem restated accurately, a scope with a realistic range for cost and duration, the options we rejected and why, and an honest answer about whether the work is worth doing at all. The document is yours and stays useful even if you never hire us.",
					},
					{
						question:
							"We already have a development team. Is this still useful?",
						answer: "Often more useful. A consultation with an in-house team is usually about architecture decisions, cloud and deployment practice, or an outside read on whether a plan holds up. We are not there to replace your engineers, and we will say so if the honest answer is that your team can handle it.",
					},
					{
						question: "Do you work with clients outside Lebanon?",
						answer: "Yes. We are based in Beirut and work with clients across Lebanon and the wider MENA region, including the Gulf. Consultations are run remotely unless you would rather meet in person in Beirut.",
					},
					{
						question: "What technologies do you work in?",
						answer: "We are not tied to a stack. We build with Next.js, React, Angular, Node.js, Python, Go, .NET, Laravel, PostgreSQL, MongoDB, Redis, Docker, AWS, and PyTorch, and we implement Odoo, Shopify, and WordPress. We pick the language and architecture that fit the problem, your team, and the ten-year cost.",
					},
				]}
			/>

			<section className="py-24 relative">
				<div className="absolute inset-0 gradient-bg rounded-3xl mx-4 md:mx-12 -z-10"></div>
				<div className="absolute inset-0 grid-pattern opacity-10 rounded-3xl mx-4 md:mx-12 -z-10"></div>

				<Reveal className="container mx-auto py-16 text-center">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Start with the{" "}
						<span className="gradient-text">problem</span>.
					</h2>
					<p className="text-xl mb-10 max-w-2xl mx-auto">
						Book the discovery call first. It costs nothing, and
						by the end of it you'll know whether a technical
						consultation is worth paying for.
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
