import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Boxes } from "lucide-react";

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
	title: "Odoo Implementation in Lebanon",
	description:
		"Odoo implementation, migration, and customization for businesses in Lebanon and MENA. Inventory, accounting, sales, and manufacturing in one system.",
	path: "/services/odoo",
});

const modules = [
	"Inventory and warehouse",
	"Accounting and invoicing",
	"Sales and CRM",
	"Purchase and vendor management",
	"Manufacturing (MRP)",
	"Point of sale",
	"HR and payroll",
	"Project and timesheets",
	"E-commerce and website",
	"Custom modules",
];

export default function OdooPage() {
	return (
		<main className="min-h-screen bg-dark text-white">
			<JsonLd
				schema={serviceSchema({
					name: "Odoo Implementation",
					description:
						"Odoo implementation, migration, and customization for businesses in Lebanon and MENA.",
					path: "/services/odoo",
					serviceType: "Odoo ERP implementation",
				})}
				id="schema-service"
			/>
			<JsonLd
				schema={breadcrumbSchema([
					{ name: "Home", path: "/" },
					{ name: "Services", path: "/services" },
					{ name: "Odoo Implementation", path: "/services/odoo" },
				])}
				id="schema-breadcrumb"
			/>
			<PageHero
				eyebrow="Odoo Implementation"
				title={
					<>
						One system instead of{" "}
						<span className="gradient-text">
							nine spreadsheets
						</span>
						.
					</>
				}
				lede="Odoo implementation, migration, and customization for businesses in Lebanon and MENA. We configure what fits, build what doesn't exist, and connect it to the tools you already run."
				orbit={{
					icon: <Boxes className="w-8 h-8 text-blue-light" />,
					title: "Odoo",
					subtitle: "One system, not nine",
				}}
			/>

			<section className="py-20 relative overflow-hidden">
				<div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[120px] -z-10"></div>

				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
						<SpecList
							heading="You probably need this if"
							items={[
								"Stock levels in the system and stock levels on the shelf disagree",
								"The same order gets typed into a sheet, a chat, and an invoice",
								"Your accountant works from exports nobody can reproduce",
								"You can't answer what a product actually costs you to sell",
								"Month-end close takes days of copy and paste",
								"You already run Odoo, but only two modules and nobody trusts the data",
							]}
						/>

						<Reveal delay={0.1}>
							<h2 className="text-sm font-semibold uppercase tracking-widest text-blue-light mb-6">
								What we implement
							</h2>
							<PillGroup items={modules} />

							<h2 className="text-sm font-semibold uppercase tracking-widest text-blue-light mt-12 mb-6">
								How we measure it
							</h2>
							<p className="text-lg text-gray-300">
								Hours saved per week. Stock accuracy. Days to
								close the month. Number of places a single piece
								of data has to be entered.
							</p>
						</Reveal>
					</div>
				</div>
			</section>

			<section className="py-20 relative bg-dark-lighter">
				<div className="container mx-auto">
					<Reveal>
						<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
							How an implementation{" "}
							<span className="gradient-text">actually runs</span>
						</h2>
					</Reveal>
					<div className="max-w-3xl mx-auto">
						<SpecList
							heading="Sequence"
							numbered
							items={[
								"Process mapping. We follow one order end to end and write down every place it stops.",
								"Scoping. Which modules earn their keep in phase one, and which can wait.",
								"Configuration. Chart of accounts, taxes, warehouses, product structure, user roles.",
								"Data migration. Products, partners, opening balances, historical transactions.",
								"Custom development. The reports and workflows Odoo doesn't ship with.",
								"Integration. Your website, payment provider, bank exports, and anything else that holds data.",
								"Training and handover. Your team runs it, not us.",
								"Support retainer. Someone to call when the business changes shape.",
							]}
						/>
					</div>
				</div>
			</section>

			{/*
			  TODO (needs input from JUSTECH): a named Odoo client and one line of
			  outcome. This page targets a high-intent search term and a single real
			  reference will do more for it than any amount of description above.
			*/}

			<section className="py-24 relative">
				<div className="absolute inset-0 gradient-bg rounded-3xl mx-4 md:mx-12 -z-10"></div>
				<div className="absolute inset-0 grid-pattern opacity-10 rounded-3xl mx-4 md:mx-12 -z-10"></div>

				<Reveal className="container mx-auto py-16 text-center">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Find out where the{" "}
						<span className="gradient-text">hours are going</span>.
					</h2>
					<p className="text-xl mb-10 max-w-2xl mx-auto">
						Part of{" "}
						<Link
							href="/business-operation-optimization"
							className="underline underline-offset-4"
						>
							business operation optimization
						</Link>
						. Start with a short call and we'll tell you whether
						Odoo is the right answer for your business.
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
