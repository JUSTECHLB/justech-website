import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain } from "lucide-react";

import { Button } from "@/components/ui/button";
import PageHero from "@/components/marketing/page-hero";
import Reveal from "@/components/marketing/reveal";
import SpecList from "@/components/marketing/spec-list";
import { discoveryLinkProps } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/json-ld";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
	title: "AI and Machine Learning",
	description:
		"AI that connects to the systems you already run. Document extraction, ticket routing, forecasting, and internal copilots, built and deployed by engineers in Beirut.",
	path: "/ai",
});

const useCases = [
	{
		title: "Document extraction",
		body: "Invoices, delivery notes, purchase orders, and contracts read automatically and written straight into your accounting or ERP system. The saving is the retyping that stops.",
		pillar: {
			label: "Business operation optimization",
			href: "/business-operation-optimization",
		},
	},
	{
		title: "Ticket and enquiry routing",
		body: "Incoming messages classified by intent, urgency, and owner, then routed without a human triaging the queue first. Works on email, forms, and chat.",
		pillar: {
			label: "Business operation optimization",
			href: "/business-operation-optimization",
		},
	},
	{
		title: "Demand forecasting",
		body: "Sales and stock history turned into a forecast your purchasing decisions can actually use, refreshed on a schedule rather than rebuilt in a spreadsheet each month.",
		pillar: {
			label: "Business operation optimization",
			href: "/business-operation-optimization",
		},
	},
	{
		title: "Internal copilots over company documents",
		body: "A retrieval layer over your own policies, contracts, and product data, so staff get answers with citations instead of asking the one person who knows.",
		pillar: {
			label: "Tech transformation",
			href: "/tech-transformation",
		},
	},
	{
		title: "Lead capture and scoring",
		body: "Chatbots that qualify rather than deflect, and scoring that tells your sales team which enquiries are worth calling first.",
		pillar: {
			label: "Revenue scaling",
			href: "/revenue-scaling",
		},
	},
];

export default function AiPage() {
	return (
		<main className="min-h-screen bg-dark text-white">
			<JsonLd
				schema={serviceSchema({
					name: "AI and Machine Learning Integration",
					description:
						"Document extraction, ticket routing, forecasting, and internal copilots, connected to the systems a business already runs.",
					path: "/ai",
					serviceType: "Machine learning integration and deployment",
				})}
				id="schema-service"
			/>
			<PageHero
				eyebrow="AI & Machine Learning"
				title={
					<>
						Most AI projects fail at{" "}
						<span className="gradient-text">integration</span>, not
						at the model.
					</>
				}
				lede="We build the pipeline, the deployment, and the connection to the systems you already run. Then the model is the easy part."
				orbit={{
					icon: <Brain className="w-8 h-8 text-blue-light" />,
					title: "AI & ML",
					subtitle: "Integration, not demos",
				}}
			/>

			<section className="py-20 relative overflow-hidden">
				<div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[120px] -z-10"></div>

				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
						<Reveal className="lg:col-span-5 lg:sticky lg:top-32 self-start">
							<h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
								Not a fourth pillar.{" "}
								<span className="gradient-text">
									A layer on the other three
								</span>
								.
							</h2>
							<div className="w-20 h-1 bg-gradient-to-r from-blue to-indigo"></div>
						</Reveal>

						<Reveal delay={0.1} className="lg:col-span-7 space-y-6">
							<p className="text-xl leading-relaxed text-gray-300">
								Calling a model API is an afternoon's work and
								most of the market sells exactly that. The part
								that takes engineering is everything around it:
								getting clean data out of the systems that hold
								it, handling the cases the model gets wrong,
								deciding what happens when it is not confident,
								and running the whole thing reliably once real
								volume arrives.
							</p>
							<p className="text-xl leading-relaxed text-gray-300">
								That is why AI shows up on this site as part of
								each pillar rather than as a product of its own.
								It earns its place when it removes hours of
								manual work or produces enquiries you would not
								otherwise have had, and we would rather tell you
								when it does not.
							</p>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="py-20 relative bg-dark-lighter">
				<div className="container mx-auto">
					<Reveal>
						<h2 className="text-3xl md:text-4xl font-bold mb-12">
							What we actually{" "}
							<span className="gradient-text">build</span>
						</h2>
					</Reveal>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{useCases.map((useCase, index) => (
							<Reveal
								key={useCase.title}
								delay={Math.min(index * 0.08, 0.32)}
								className="h-full"
							>
								<div className="h-full gradient-border rounded-2xl p-8 bg-dark group card-hover-gradient transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue/10">
									<h3 className="text-xl font-semibold mb-3">
										{useCase.title}
									</h3>
									<p className="text-gray-400 group-hover:text-gray-200 mb-6">
										{useCase.body}
									</p>
									<Link
										href={useCase.pillar.href}
										className="text-sm text-blue-light hover:text-white transition-colors"
									>
										{useCase.pillar.label} &rarr;
									</Link>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="py-20 relative">
				<div className="container mx-auto">
					<div className="max-w-3xl">
						{/*
						  TODO (needs input from JUSTECH): what "small ML models with
						  training" concretely covers. Classification? Forecasting?
						  Fine-tuned LLMs? The list below is the honest general version;
						  replace it with the specific techniques you have shipped, since
						  that is what a technical reader is here to check.
						*/}
						<SpecList
							heading="How we work on it"
							numbered
							items={[
								"Start from the metric. If we can't name the hours or the enquiries it should move, we don't build it.",
								"Use the smallest thing that works. A rules engine or a classifier beats a language model whenever it can.",
								"Build the data path first. Extraction, cleaning, and storage, because that is where the project usually dies.",
								"Design for the wrong answer. Confidence thresholds, human review queues, and an audit trail.",
								"Deploy it properly. Versioned models, monitoring, retraining, and rollback.",
								"Hand it over. Documentation and access, so you are not renting your own system back from us.",
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
						Bring us the{" "}
						<span className="gradient-text">manual process</span>,
						not the technology.
					</h2>
					<p className="text-xl mb-10 max-w-2xl mx-auto">
						Describe the task somebody on your team does by hand
						every week. We'll tell you whether a model helps, and
						what it would take to put one in front of it.
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
