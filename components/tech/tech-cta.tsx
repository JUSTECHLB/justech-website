"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TechCta() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const benefits = [
		"Comprehensive technology assessment",
		"Tailored transformation roadmap",
		"Expert implementation guidance",
		"Ongoing support and optimization",
	];

	return (
		<section
			className="py-20 bg-gradient-to-b from-dark-lighter to-dark"
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
								Ready to Transform Your Technology Ecosystem?
							</h2>
							<p className="text-gray-300 mb-8">
								Schedule a free consultation with our tech
								transformation experts to discuss your
								challenges, explore potential solutions, and
								develop a tailored roadmap for your
								organization.
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
							<Link href="/contact">
								<Button className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white px-8 py-6 text-lg h-auto rounded-full">
									Schedule a Consultation
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</Link>
							<Link
								href="#case-studies"
								className="inline-flex items-center justify-center py-6 px-8 rounded-full border border-blue/20 text-white font-medium transition-all hover:bg-dark-lighter"
							>
								View Success Stories
							</Link>
						</motion.div>
					</div>
				</div>

				<div className="mt-16 text-center">
					<motion.p
						initial={{ opacity: 0 }}
						animate={inView ? { opacity: 1 } : {}}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="text-gray-400"
					>
						Join the{" "}
						<span className="text-blue font-medium">
							500+ businesses
						</span>{" "}
						that have successfully transformed their technology with
						JusTech
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5, delay: 0.5 }}
						className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
					>
						{[...Array(6)].map((_, index) => (
							<div
								key={index}
								className="flex items-center justify-center"
							>
								<div className="h-12 w-32 bg-gray-800/50 rounded-md animate-pulse"></div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
