"use client";
import Link from "next/link";
import { ChevronRight, TrendingUp, Layers, Shield, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ValueProposition() {
	const valueProps = [
		{
			icon: <TrendingUp className="w-6 h-6 text-blue-light" />,
			title: "Guaranteed Revenue Growth",
			description:
				"We're so confident in our ability to increase your revenue that we offer a performance-based pricing model—if you don't see growth, you don't pay the full fee. Our clients typically see a 25-145% increase in revenue within the first year.",
			stat: "Average 85% revenue increase in year one",
			features: [
				"Performance-based pricing model",
				"25-145% revenue increase in year one",
				"Guaranteed minimum growth targets",
				"Transparent reporting and metrics",
			],
		},
		{
			icon: <Layers className="w-6 h-6 text-blue-light" />,
			title: "Sustainable Business Model",
			description:
				"Unlike strategies that focus on short-term gains, our revenue scaling approach builds sustainable growth systems that continue to generate results long after our engagement ends, creating lasting value for your business.",
			stat: "92% of clients maintain growth for 3+ years",
			features: [
				"Long-term growth infrastructure",
				"Sustainable scaling methodologies",
				"Knowledge transfer to your team",
				"Ongoing support options",
			],
		},
		{
			icon: <Shield className="w-6 h-6 text-blue-light" />,
			title: "Operational Excellence",
			description:
				"Revenue growth without operational strain. Our scaling methodology ensures your operations can handle increased demand, preventing the quality and service issues that often accompany rapid growth.",
			stat: "98% client satisfaction during scaling",
			features: [
				"Operational capacity planning",
				"Process optimization",
				"Scalable infrastructure design",
				"Quality control systems",
			],
		},
	];

	return (
		<section className="relative py-32">
			<div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo/10 to-blue/5 rounded-full blur-[180px] -z-10"></div>
			<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue/5 to-transparent rounded-full blur-[120px] -z-10"></div>

			<div className="container mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="lg:col-span-5 lg:sticky lg:top-32 self-start"
					>
						<div className="mb-4">
							<span className="px-5 py-2 bg-gradient-to-r from-blue/20 to-indigo/10 rounded-full text-blue-light text-sm font-medium border border-blue/10 shadow-sm">
								Our Promise
							</span>
						</div>
						<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-tight">
							The <span className="gradient-text">Value</span>{" "}
							<br />
							We Deliver
						</h2>
						<div className="w-24 h-1.5 bg-gradient-to-r from-blue to-indigo rounded-full mb-8"></div>
						<p className="text-xl text-gray-300 mb-8 leading-relaxed">
							Our revenue scaling services deliver measurable,
							sustainable growth that transforms your business. We
							don't just promise results—we guarantee them.
						</p>
						<Link href="/contact">
							<Button className="bg-gradient-to-br from-dark-lighter to-dark hover:from-dark-lighter/80 hover:to-dark/80 text-white border border-blue/20 rounded-full px-8 py-6 text-lg h-auto group transition-all duration-300">
								Learn More
								<ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
							</Button>
						</Link>
					</motion.div>

					<div className="lg:col-span-7">
						<div className="bg-gradient-to-br from-dark-lighter/50 to-dark/80 backdrop-blur-sm rounded-3xl border border-white/5 overflow-hidden">
							<table className="w-full">
								<thead>
									<tr className="border-b border-white/10">
										<th className="py-5 px-6 text-left text-lg font-semibold text-white">
											Value Proposition
										</th>
										<th className="py-5 px-6 text-left text-lg font-semibold text-white">
											Key Benefits
										</th>
										<th className="py-5 px-6 text-left text-lg font-semibold text-white">
											Performance
										</th>
									</tr>
								</thead>
								<tbody>
									{valueProps.map((prop, index) => (
										<motion.tr
											key={index}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.7,
												delay: index * 0.1,
											}}
											className={
												index < valueProps.length - 1
													? "border-b border-white/10"
													: ""
											}
										>
											<td className="py-6 px-6">
												<div className="flex items-start gap-4">
													<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue/30 to-blue/10 flex items-center justify-center border border-white/10 flex-shrink-0">
														{prop.icon}
													</div>
													<div>
														<h3 className="text-xl font-bold text-white mb-2">
															{prop.title}
														</h3>
														<p className="text-gray-400 leading-relaxed">
															{prop.description}
														</p>
													</div>
												</div>
											</td>
											<td className="py-6 px-6">
												<ul className="space-y-2">
													{prop.features.map(
														(feature, idx) => (
															<li
																key={idx}
																className="flex items-center gap-2"
															>
																<div className="w-5 h-5 rounded-full bg-blue/20 flex items-center justify-center flex-shrink-0">
																	<Check className="w-3 h-3 text-blue-light" />
																</div>
																<span className="text-sm text-gray-300">
																	{feature}
																</span>
															</li>
														)
													)}
												</ul>
											</td>
											<td className="py-6 px-6">
												<div className="bg-gradient-to-r from-blue/20 to-transparent p-4 rounded-lg">
													<p className="text-blue-light font-semibold">
														{prop.stat}
													</p>
												</div>
											</td>
										</motion.tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
