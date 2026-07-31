import type { Metadata } from "next";
import Link from "next/link";
import {
	Accessibility,
	ArrowRight,
	Gauge,
	Palette,
	Search,
	Smartphone,
	Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import PageHero from "@/components/marketing/page-hero";
import Reveal from "@/components/marketing/reveal";
import SpecList from "@/components/marketing/spec-list";
import { pageMetadata } from "@/lib/seo";
import { discoveryLinkProps } from "@/lib/links";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
	title: "Website Design in Lebanon",
	description:
		"Website design and development for businesses in Lebanon and MENA. Responsive, fast, and built so visitors can tell what you do in five seconds.",
	path: "/services/web-design",
});

const features = [
	{
		icon: Smartphone,
		title: "Responsive by default",
		body: "One layout that holds up from a 320px phone to a 27 inch monitor. Tested at every size rather than checked once in a browser window.",
	},
	{
		icon: Search,
		title: "Structured for search",
		body: "Clean markup, real heading hierarchy, fast server-rendered pages, and metadata that describes the page rather than the company.",
	},
	{
		icon: Gauge,
		title: "Fast on a bad connection",
		body: "Compressed images, minimal client-side JavaScript, and a page that renders before the network finishes. Speed is a conversion feature in Lebanon.",
	},
	{
		icon: Sparkles,
		title: "Built around one action",
		body: "Every page has a job. We decide what a visitor should do next and remove the things competing with it.",
	},
	{
		icon: Palette,
		title: "Consistent with your brand",
		body: "Colour, type, and imagery applied as a system, so the site still looks like you on the pages we did not design.",
	},
	{
		icon: Accessibility,
		title: "Usable by everyone",
		body: "Contrast that passes, targets big enough to hit on a phone, keyboard navigation that works, and motion that respects the reduced-motion setting.",
	},
];

export default function WebDesignPage() {
	return (
		<main className="min-h-screen bg-dark text-white">
			<JsonLd
				schema={serviceSchema({
					name: "Website Design",
					description:
						"Website design and development for businesses in Lebanon and MENA.",
					path: "/services/web-design",
					serviceType: "Website design",
				})}
				id="schema-service"
			/>
			<JsonLd
				schema={breadcrumbSchema([
					{ name: "Home", path: "/" },
					{ name: "Services", path: "/services" },
					{ name: "Website Design", path: "/services/web-design" },
				])}
				id="schema-breadcrumb"
			/>

			<PageHero
				eyebrow="Website Design"
				title={
					<>
						A site that says what you do in{" "}
						<span className="gradient-text">five seconds</span>.
					</>
				}
				lede="Website design for businesses in Lebanon and across MENA. Responsive, fast, and structured so a visitor knows what you do and what to do next before they scroll."
				orbit={{
					icon: <Palette className="w-8 h-8 text-blue-light" />,
					title: "Web Design",
					subtitle: "Clarity over decoration",
				}}
			/>

			<section className="py-20 relative overflow-hidden">
				<div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[120px] -z-10"></div>

				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
						<SpecList
							heading="You probably need this if"
							items={[
								"People land on the site and cannot tell what you sell",
								"It looks fine on your laptop and falls apart on a phone",
								"Pages take a few seconds to appear on mobile data",
								"There is no obvious next step on any page",
								"The design was done once, years ago, and has been patched since",
								"You are embarrassed to send the link to a serious prospect",
							]}
						/>

						<Reveal delay={0.1}>
							<h2 className="text-sm font-semibold uppercase tracking-widest text-blue-light mb-6">
								How we measure it
							</h2>
							<p className="text-lg text-gray-300 mb-8">
								Qualified enquiries per month. Conversion rate.
								Bounce rate on mobile. Time to first
								contentful paint. Whether a stranger can
								describe your business after five seconds on the
								page.
							</p>
							<p className="text-gray-400">
								Design work that cannot move one of those is
								decoration, and we will tell you so rather than
								bill you for it.
							</p>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="py-20 relative bg-dark-lighter overflow-hidden">
				<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] -z-10"></div>

				<div className="container mx-auto">
					<Reveal>
						<h2 className="text-3xl md:text-4xl font-bold mb-12">
							What you actually{" "}
							<span className="gradient-text">get</span>
						</h2>
					</Reveal>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{features.map((feature, index) => (
							<Reveal
								key={feature.title}
								delay={Math.min(index * 0.06, 0.3)}
								className="h-full"
							>
								<div className="h-full gradient-border rounded-2xl p-8 bg-dark group card-hover-gradient transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue/10">
									<div className="w-14 h-14 rounded-2xl bg-dark-lighter border border-blue/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-blue-light group-hover:scale-105">
										<feature.icon className="w-7 h-7 text-blue-light" />
									</div>
									<h3 className="text-xl font-semibold mb-3">
										{feature.title}
									</h3>
									<p className="text-gray-400 group-hover:text-gray-200">
										{feature.body}
									</p>
								</div>
							</Reveal>
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
								"Discovery. Your business, your buyers, what your competitors already say, and which number the site is meant to move.",
								"Structure. Sitemap and wireframes first, so we argue about the content and the flow before anything looks pretty.",
								"Copy. Written or edited before design, because designing around placeholder text produces layouts that break on the real thing.",
								"Design. Visual system applied to the real structure and the real words, at mobile and desktop together.",
								"Build. Server-rendered, responsive, and fast, with the CMS or editing setup you asked for.",
								"Launch and measure. Analytics and conversion tracking wired up on day one, so the next round of changes is based on data.",
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
						Send us the site that isn't{" "}
						<span className="gradient-text">working</span>.
					</h2>
					<p className="text-xl mb-10 max-w-2xl mx-auto">
						Part of{" "}
						<Link
							href="/revenue-scaling"
							className="underline underline-offset-4"
						>
							revenue scaling
						</Link>
						. See the{" "}
						<Link
							href="/portfolio"
							className="underline underline-offset-4"
						>
							work we have shipped
						</Link>
						, then book a short call and we will tell you what is
						costing you enquiries.
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
