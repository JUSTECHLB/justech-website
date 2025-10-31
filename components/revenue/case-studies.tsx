"use client";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CaseStudies() {
	const [activeCase, setActiveCase] = useState(0);

	const caseStudies = [
		{
			image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
			title: "E-commerce Growth",
			description:
				"Helped an e-commerce company increase revenue by 215% in 12 months through market expansion and conversion optimization.",
			stat: "215% Growth",
			link: "/case-studies/ecommerce",
			industry: "E-commerce",
			challenge:
				"Stagnant growth, low conversion rates, limited market reach",
			solution:
				"Implemented conversion rate optimization, expanded to new markets, optimized pricing strategy",
			results: [
				"215% revenue growth in 12 months",
				"43% increase in average order value",
				"3.2x improvement in customer lifetime value",
				"Expansion into 5 new regional markets",
			],
		},
		{
			image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=2101&auto=format&fit=crop",
			title: "SaaS Subscription Scaling",
			description:
				"Helped a SaaS company increase MRR by 180% and reduce churn by 45% through pricing optimization and customer retention strategies.",
			stat: "180% MRR Growth",
			link: "/case-studies/saas",
			industry: "Software as a Service",
			challenge:
				"High churn rate, underpriced offerings, ineffective upselling",
			solution:
				"Implemented tiered pricing, developed retention program, created customer success framework",
			results: [
				"180% increase in monthly recurring revenue",
				"45% reduction in customer churn",
				"68% improvement in expansion revenue",
				"2.8x increase in customer lifetime value",
			],
		},
		{
			image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
			title: "Service Business Expansion",
			description:
				"Helped a professional services firm increase revenue by 125% by developing new service offerings and implementing value-based pricing.",
			stat: "125% Revenue Growth",
			link: "/case-studies/services",
			industry: "Professional Services",
			challenge:
				"Commoditized services, hourly billing model, limited service offerings",
			solution:
				"Developed value-based pricing, created new service packages, implemented client tiering",
			results: [
				"125% revenue growth in 18 months",
				"87% increase in profit margin",
				"3 new high-value service offerings",
				"52% reduction in client acquisition cost",
			],
		},
		{
			image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop",
			title: "Retail Digital Transformation",
			description:
				"Helped a retail chain increase revenue by 95% through omnichannel strategy implementation and customer experience enhancement.",
			stat: "95% Revenue Growth",
			link: "/case-studies/retail",
			industry: "Retail",
			challenge:
				"Declining foot traffic, limited online presence, poor customer experience",
			solution:
				"Implemented omnichannel strategy, enhanced in-store experience, developed loyalty program",
			results: [
				"95% revenue growth in 24 months",
				"320% increase in online sales",
				"42% improvement in customer retention",
				"28% increase in average transaction value",
			],
		},
	];

	return (
		<section className="relative py-32">
			<div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo/10 to-blue/5 rounded-full blur-[180px] -z-10"></div>
			<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue/5 to-transparent rounded-full blur-[120px] -z-10"></div>

			<div className="container mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="lg:col-span-5"
					>
						<div className="mb-4">
							<span className="px-5 py-2 bg-gradient-to-r from-blue/20 to-indigo/10 rounded-full text-blue-light text-sm font-medium border border-blue/10 shadow-sm">
								Success Stories
							</span>
						</div>
						<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-tight">
							Our <span className="gradient-text">Results</span>{" "}
							<br />
							Speak For Us
						</h2>
						<p className="text-xl text-gray-300 mb-8 leading-relaxed">
							We've helped businesses across various industries
							achieve significant revenue growth. Here are some of
							our success stories.
						</p>
						<div className="w-24 h-1.5 bg-gradient-to-r from-blue to-indigo rounded-full mb-8"></div>

						<div className="space-y-4 mb-8">
							{caseStudies.map((study, index) => (
								<button
									key={index}
									onClick={() => setActiveCase(index)}
									className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center justify-between ${
										activeCase === index
											? "bg-gradient-to-r from-blue/20 to-transparent text-white"
											: "text-gray-400 hover:text-gray-200 hover:bg-white/5"
									}`}
								>
									<div className="flex items-center gap-4">
										<div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 relative">
											<Image
												src={study.image}
												alt={study.title}
												fill
												className="object-cover"
											/>
										</div>
										<div>
											<h3
												className={`font-medium ${
													activeCase === index
														? "text-white"
														: "text-gray-300"
												}`}
											>
												{study.title}
											</h3>
											<p className="text-sm text-gray-400">
												{study.industry}
											</p>
										</div>
									</div>
									<div
										className={`text-blue-light font-semibold ${
											activeCase === index
												? "opacity-100"
												: "opacity-0"
										}`}
									>
										<ChevronRight className="w-5 h-5" />
									</div>
								</button>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="lg:col-span-7 lg:sticky lg:top-32"
					>
						<div className="bg-gradient-to-br from-dark-lighter/50 to-dark/80 backdrop-blur-sm rounded-3xl border border-white/5 overflow-hidden">
							<div className="h-64 relative">
								<Image
									src={caseStudies[activeCase].image}
									alt={caseStudies[activeCase].title}
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent"></div>
								<div className="absolute bottom-0 left-0 p-8">
									<div className="bg-blue/20 backdrop-blur-sm rounded-full px-4 py-1 inline-block mb-3">
										<span className="text-blue-light font-medium">
											{caseStudies[activeCase].stat}
										</span>
									</div>
									<h3 className="text-3xl font-bold text-white">
										{caseStudies[activeCase].title}
									</h3>
								</div>
							</div>

							<div className="p-8">
								<p className="text-gray-300 text-lg leading-relaxed mb-8">
									{caseStudies[activeCase].description}
								</p>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
									<div>
										<h4 className="text-blue-light font-semibold mb-2">
											The Challenge
										</h4>
										<p className="text-gray-300">
											{caseStudies[activeCase].challenge}
										</p>
									</div>
									<div>
										<h4 className="text-blue-light font-semibold mb-2">
											Our Solution
										</h4>
										<p className="text-gray-300">
											{caseStudies[activeCase].solution}
										</p>
									</div>
								</div>

								<div>
									<h4 className="text-blue-light font-semibold mb-4">
										Key Results
									</h4>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
										{caseStudies[activeCase].results.map(
											(result, idx) => (
												<div
													key={idx}
													className="flex items-center gap-2"
												>
													<div className="w-2 h-2 rounded-full bg-blue"></div>
													<span className="text-gray-300">
														{result}
													</span>
												</div>
											)
										)}
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
