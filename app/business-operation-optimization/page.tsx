import type { Metadata } from "next";
import BusinessHero from "@/components/business/business-hero";
import CapabilityContent from "@/components/business/capability-content";
import UniqueSellingPoints from "@/components/business/unique-selling-points";
import OperationalAreas from "@/components/business/operational-areas";
import CoreBenefits from "@/components/business/core-benefits";
import SuccessStories from "@/components/business/success-stories";
import BusinessCTA from "@/components/business/business-cta";
import PillarFit from "@/components/pillar/pillar-fit";
import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/json-ld";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
	title: "Business Operation Optimization",
	description:
		"Odoo implementation, workflow automation, and internal systems that cut manual work. Measured in hours saved per week.",
	path: "/business-operation-optimization",
});

export default function BusinessOperationOptimization() {
	return (
		<main className="pt-24 overflow-hidden bg-gradient-to-br from-dark via-dark/95 to-dark/90 relative">
			<JsonLd
				schema={serviceSchema({
					name: "Business Operation Optimization",
					description:
						"Odoo implementation, workflow automation, and internal systems that cut manual work. Measured in hours saved per week.",
					path: "/business-operation-optimization",
					serviceType: "ERP implementation and workflow automation",
				})}
				id="schema-service"
			/>
			<div className="absolute inset-0 -z-10 pointer-events-none">
				<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo/20 to-blue/10 rounded-full blur-[180px] -z-10"></div>
				<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue/15 to-transparent rounded-full blur-[150px] -z-10"></div>

				<div className="absolute inset-0 overflow-hidden opacity-20">
					<div className="h-full w-full flex">
						<div className="flex-1 grid grid-cols-12 grid-rows-12">
							{Array.from({ length: 144 }).map((_, i) => (
								<div
									key={i}
									className="border-[0.5px] border-white/5"
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			<BusinessHero />
			<PillarFit
				problems={[
					"The same data gets entered into three different places",
					"No single view of stock, cash, or what's actually been ordered",
					"Month-end reporting takes days",
					"When one person is on leave, part of the business stops",
					"You're making decisions on numbers that are two weeks old",
				]}
				services={[
					{ label: "Odoo/ERP implementation", href: "/services/odoo" },
					{ label: "Workflow automation" },
					{ label: "Internal systems and admin panels" },
					{ label: "Custom business applications" },
					{
						label: "Integrations between the tools you already pay for",
					},
					{ label: "Dashboards and BI" },
					{ label: "AI document processing", href: "/ai" },
					{ label: "Intelligent routing", href: "/ai" },
					{ label: "Demand forecasting", href: "/ai" },
				]}
				metrics={[
					"Hours saved per week",
					"Error rate",
					"Cost per transaction",
					"Time from question to answer",
				]}
				proof={{
					client: "Rut Essentials:",
					body: "five projects plus an ongoing maintenance and management retainer.",
				}}
			/>
			<CapabilityContent />
			<UniqueSellingPoints />
			<OperationalAreas />
			<CoreBenefits />
			<SuccessStories />
			<BusinessCTA />
		</main>
	);
}
