import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { discoveryLinkProps } from "@/lib/links";

export default function CtaSection() {
	return (
		<section className="py-24 relative">
			<div className="absolute inset-0 gradient-bg rounded-3xl mx-4 md:mx-12 -z-10"></div>
			<div className="absolute inset-0 grid-pattern opacity-10 rounded-3xl mx-4 md:mx-12 -z-10"></div>

			<div className="container mx-auto py-16 text-center">
				<h2 className="text-3xl md:text-5xl font-bold mb-6">
					Not sure which of the{" "}
					<span className="gradient-text">three</span> you need?
				</h2>
				<p className="text-xl mb-10 max-w-3xl mx-auto">
					Start with a discovery call. No charge, no obligation, and
					by the end of it you'll know which of the three you're
					actually looking at, or that you don't need us yet.
				</p>
				<Link {...discoveryLinkProps} className="inline-block w-full sm:w-auto">
					<Button className="bg-white text-dark hover:bg-gray-100 w-full sm:w-auto whitespace-normal px-6 sm:px-8 py-6 text-base sm:text-lg h-auto rounded-full">
						Book a discovery call
						<ArrowRight className="ml-2 h-5 w-5" />
					</Button>
				</Link>
			</div>
		</section>
	);
}
