"use client";
import { BarChart, Zap, Shield, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function UniqueSellingPoints() {
	const sellingPoints = [
		{
			icon: <BarChart className="w-8 h-8 text-blue-light" />,
			title: "Data-Driven Methodology",
			description:
				"Unlike traditional consultants who rely on intuition, our approach is built on real-time data analysis and predictive modeling that identifies specific revenue opportunities unique to your business, resulting in 85% more accurate revenue projections.",
			highlight: "85% more accurate revenue projections",
		},
		{
			icon: <Zap className="w-8 h-8 text-blue-light" />,
			title: "Rapid Implementation Framework",
			description:
				"While competitors take months to implement changes, our agile methodology allows for quick deployment of revenue strategies, with most clients seeing initial results within 30 days of engagement and full implementation within 90 days.",
			highlight: "Results within 30 days",
		},
		{
			icon: <Shield className="w-8 h-8 text-blue-light" />,
			title: "Risk-Mitigated Growth",
			description:
				"Our proprietary risk assessment framework ensures that every growth strategy is evaluated for potential downsides, with built-in contingency plans that protect your business during scaling, resulting in 98% client satisfaction during the scaling process.",
			highlight: "98% client satisfaction",
		},
		{
			icon: <Target className="w-8 h-8 text-blue-light" />,
			title: "Industry-Specific Strategies",
			description:
				"Unlike generic growth consultants, we've developed specialized revenue scaling playbooks for 15+ industries, with benchmarks and strategies tailored to your specific market dynamics, resulting in 92% of clients maintaining growth for 3+ years.",
			highlight: "92% maintain growth for 3+ years",
		},
	];

	return (
		<section className="relative py-32">
			<div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo/10 to-blue/5 rounded-full blur-[180px] -z-10"></div>
			<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue/5 to-transparent rounded-full blur-[120px] -z-10"></div>

			<div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10"></div>

			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="text-center mb-16"
				>
					<div className="mb-4 inline-block">
						<span className="px-5 py-2 bg-gradient-to-r from-blue/20 to-indigo/10 rounded-full text-blue-light text-sm font-medium border border-blue/10 shadow-sm">
							Why Choose Us
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-tight">
						Our <span className="gradient-text">Unique</span>{" "}
						Selling Points
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Discover what sets our revenue scaling services apart
						from the competition and why businesses trust us to
						drive their growth.
					</p>
				</motion.div>

				<div className="space-y-16">
					{sellingPoints.map((point, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: index * 0.1 }}
							className={`flex flex-col ${
								index % 2 === 0
									? "md:flex-row"
									: "md:flex-row-reverse"
							} gap-12 items-center`}
						>
							<div className="md:w-1/2">
								<div className="bg-gradient-to-br from-dark-lighter/50 to-dark/80 backdrop-blur-sm p-8 rounded-3xl border border-white/5 relative overflow-hidden">
									<div className="absolute inset-0 bg-gradient-to-br from-blue/5 via-indigo/5 to-transparent opacity-30"></div>
									<div className="relative z-10">
										<div className="flex items-center gap-4 mb-6">
											<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue/20 to-blue/5 flex items-center justify-center border border-white/5">
												{point.icon}
											</div>
											<h3 className="text-2xl font-bold text-white">
												{point.title}
											</h3>
										</div>
										<div className="bg-gradient-to-r from-blue/20 to-transparent p-4 rounded-lg inline-block mb-6">
											<p className="text-blue-light font-semibold">
												{point.highlight}
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="md:w-1/2">
								<p className="text-gray-300 text-lg leading-relaxed">
									{point.description}
								</p>
								<div className="w-16 h-1 bg-gradient-to-r from-blue to-indigo rounded-full mt-6"></div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
