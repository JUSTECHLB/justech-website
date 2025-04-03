import type { Metadata } from "next";
import BusinessHero from "@/components/business/business-hero";
import CapabilityContent from "@/components/business/capability-content";
import UniqueSellingPoints from "@/components/business/unique-selling-points";
import OperationalAreas from "@/components/business/operational-areas";
import CoreBenefits from "@/components/business/core-benefits";
import SuccessStories from "@/components/business/success-stories";
import BusinessCTA from "@/components/business/business-cta";

export const metadata: Metadata = {
	title: "Business Operation Optimization | JUSTECH",
	description:
		"Streamline your business operations, reduce costs, and increase efficiency with our proven optimization strategies.",
};

export default function BusinessOperationOptimization() {
	return (
		<main className="pt-24 overflow-hidden bg-gradient-to-br from-dark via-dark/95 to-dark/90 relative">
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
			<CapabilityContent />
			<UniqueSellingPoints />
			<OperationalAreas />
			<CoreBenefits />
			<SuccessStories />
			<BusinessCTA />
		</main>
	);
}
