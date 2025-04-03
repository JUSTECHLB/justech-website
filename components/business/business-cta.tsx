"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BusinessCTA() {
	return (
		<section className="py-20 bg-dark-lighter">
			<div className="container mx-auto px-4">
				<div className="relative rounded-3xl overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-blue/20 to-indigo/10"></div>

					<div className="relative z-10 py-16 px-8 md:px-16">
						<motion.div
							className="max-w-3xl mx-auto text-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<h2 className="text-3xl md:text-4xl font-bold mb-6">
								Ready to Transform Your{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-indigo">
									Business Operations
								</span>
								?
							</h2>

							<p className="text-lg text-gray-300 mb-8">
								Schedule a consultation with our operational
								experts to discover how we can optimize your
								business processes, reduce costs, and drive
								sustainable growth.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link href="/contact">
									<Button className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white rounded-full px-8 py-6 h-auto w-full sm:w-auto">
										Schedule Consultation
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</Link>
								<Link href="#optimization-process">
									<Button
										variant="outline"
										className="rounded-full px-8 py-6 h-auto border-white/10 hover:bg-white/5 w-full sm:w-auto"
									>
										Learn More
									</Button>
								</Link>
							</div>

							<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
								<div className="bg-dark/50 backdrop-blur-sm rounded-xl p-4 border border-white/5">
									<div className="text-2xl font-bold text-blue-light mb-1">
										45%
									</div>
									<div className="text-sm text-gray-400">
										Average Efficiency Improvement
									</div>
								</div>
								<div className="bg-dark/50 backdrop-blur-sm rounded-xl p-4 border border-white/5">
									<div className="text-2xl font-bold text-blue-light mb-1">
										32%
									</div>
									<div className="text-sm text-gray-400">
										Average Cost Reduction
									</div>
								</div>
								<div className="bg-dark/50 backdrop-blur-sm rounded-xl p-4 border border-white/5">
									<div className="text-2xl font-bold text-blue-light mb-1">
										3-6
									</div>
									<div className="text-sm text-gray-400">
										Months to See Results
									</div>
								</div>
							</div>
						</motion.div>
					</div>

					<div className="absolute top-0 left-0 w-32 h-32 bg-blue/10 rounded-full blur-3xl"></div>
					<div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo/10 rounded-full blur-3xl"></div>
				</div>
			</div>
		</section>
	);
}
