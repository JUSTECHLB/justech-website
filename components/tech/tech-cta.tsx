"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { discoveryLinkProps } from "@/lib/links";

export default function TechCta() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const benefits = [
		"No charge and no obligation",
		"Talk to an engineer, not a salesperson",
		"You leave knowing what the next step costs",
		"An honest answer, including no",
	];

	return (
		<section
			className="py-20 bg-gradient-to-b from-dark-lighter to-dark overflow-hidden"
			ref={ref}
		>
			<div className="container mx-auto px-4">
				<div className="bg-gradient-to-r from-blue/10 to-indigo/10 rounded-2xl p-8 md:p-12 border border-blue/20 relative overflow-hidden">
					<div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
					<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

					<div className="max-w-3xl mx-auto text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5 }}
						>
							<h2 className="text-3xl md:text-4xl font-bold mb-6">
								Have someone look at the system before it
								breaks.
							</h2>
							<p className="text-gray-300 mb-8">
								Start with a short call about your architecture,
								your deployment process, and what you are afraid
								will break. From there we'll tell you whether a{" "}
								<Link
									href="/consultation"
									className="underline underline-offset-4 hover:text-white"
								>
									technical consultation
								</Link>{" "}
								or a project is the right next step.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="mb-8"
						>
							<div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
								{benefits.map((benefit, index) => (
									<div
										key={index}
										className="flex items-center"
									>
										<CheckCircle className="h-5 w-5 text-blue mr-2 flex-shrink-0" />
										<span className="text-gray-200">
											{benefit}
										</span>
									</div>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="flex flex-col sm:flex-row gap-4 justify-center"
						>
							<Link {...discoveryLinkProps} className="inline-block w-full sm:w-auto">
								<Button className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white w-full sm:w-auto whitespace-normal px-6 sm:px-8 py-6 text-base sm:text-lg h-auto rounded-full">
									Book a discovery call
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</Link>
						</motion.div>
					</div>
				</div>

			</div>
		</section>
	);
}
