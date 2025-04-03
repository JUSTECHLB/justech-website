import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
	return (
		<section className="py-24 relative">
			<div className="absolute inset-0 gradient-bg rounded-3xl mx-4 md:mx-12 -z-10"></div>
			<div className="absolute inset-0 grid-pattern opacity-10 rounded-3xl mx-4 md:mx-12 -z-10"></div>

			<div className="container mx-auto py-16 text-center">
				<h2 className="text-3xl md:text-5xl font-bold mb-6">
					Ready to <span className="gradient-text">Scale</span> Your
					Business?
				</h2>
				<p className="text-xl mb-10 max-w-3xl mx-auto">
					Contact us today to discuss how we can help you scale
					revenue, optimize operations, and automate workflows.
				</p>
				<Link href="/contact">
					<Button className="bg-white text-dark hover:bg-gray-100 px-8 py-6 text-lg h-auto rounded-full">
						Get Started Now
						<ArrowRight className="ml-2 h-5 w-5" />
					</Button>
				</Link>
			</div>
		</section>
	);
}
