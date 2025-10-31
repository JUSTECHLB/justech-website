"use client";

import { useState } from "react";
import {
	TrendingUp,
	BarChart,
	PieChart,
	Layers,
	Users,
	Globe,
	ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Capabilities() {
	const [viewedCapabilities, setViewedCapabilities] = useState<Set<number>>(
		new Set()
	);

	const capabilities = [
		{
			icon: <TrendingUp className="w-8 h-8 text-blue-light" />,
			title: "Market Expansion Analysis",
			description:
				"Advanced market analysis tools that identify untapped opportunities and potential new markets for your business to enter, complete with risk assessment and revenue projections.",
			features: [
				"Geographic expansion planning",
				"Market penetration strategies",
				"Competitive landscape analysis",
				"Risk assessment frameworks",
				"Revenue projection models",
			],
		},
		{
			icon: <BarChart className="w-8 h-8 text-blue-light" />,
			title: "Sales Process Optimization",
			description:
				"AI-powered sales funnel analysis that identifies bottlenecks and opportunities for improvement, with automated recommendations for increasing conversion rates at each stage.",
			features: [
				"Conversion rate optimization",
				"Sales funnel analysis",
				"Lead qualification frameworks",
				"Sales team performance metrics",
				"Closing ratio improvements",
			],
		},
		{
			icon: <PieChart className="w-8 h-8 text-blue-light" />,
			title: "Revenue Channel Diversification",
			description:
				"Strategic planning tools for developing new revenue streams, including subscription models, digital products, and service expansions tailored to your business model.",
			features: [
				"Subscription model development",
				"Digital product creation",
				"Service expansion planning",
				"Recurring revenue strategies",
				"Cross-selling opportunities",
			],
		},
		{
			icon: <Layers className="w-8 h-8 text-blue-light" />,
			title: "Pricing Strategy Optimization",
			description:
				"Dynamic pricing models and analysis tools that help you determine optimal price points, implement value-based pricing, and create tiered pricing structures to maximize revenue.",
			features: [
				"Value-based pricing models",
				"Tiered pricing structures",
				"Competitive pricing analysis",
				"Price elasticity testing",
				"Bundle pricing strategies",
			],
		},
		{
			icon: <Users className="w-8 h-8 text-blue-light" />,
			title: "Customer Retention Systems",
			description:
				"Comprehensive customer lifecycle management tools that identify at-risk customers, implement retention strategies, and maximize customer lifetime value through personalized engagement.",
			features: [
				"Churn prediction algorithms",
				"Customer health scoring",
				"Personalized retention campaigns",
				"Loyalty program development",
				"Customer lifetime value optimization",
			],
		},
		{
			icon: <Globe className="w-8 h-8 text-blue-light" />,
			title: "Digital Transformation Tools",
			description:
				"End-to-end digital transformation solutions that help traditional businesses develop online revenue channels, implement e-commerce capabilities, and create digital products.",
			features: [
				"E-commerce implementation",
				"Digital product development",
				"Online sales channel creation",
				"Digital marketing integration",
				"Technology stack modernization",
			],
		},
	];

	const markAsViewed = (index: number) => {
		setViewedCapabilities((prev) => new Set([...prev, index]));
	};

	return (
		<section className="relative py-32">
			<div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo/10 to-blue/5 rounded-full blur-[180px] -z-10"></div>
			<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue/5 to-transparent rounded-full blur-[120px] -z-10"></div>

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
							System Capabilities
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-tight">
						Comprehensive{" "}
						<span className="gradient-text">Revenue Scaling</span>{" "}
						Capabilities
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Our revenue scaling system offers a complete suite of
						tools and strategies to help businesses maximize their
						revenue potential.
					</p>
				</motion.div>

				<div className="space-y-6">
					{capabilities.map((capability, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px 0px" }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							onViewportEnter={() => markAsViewed(index)}
							className={`bg-gradient-to-br from-dark-lighter/50 to-dark/80 backdrop-blur-sm rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 mb-8 ${
								viewedCapabilities.has(index)
									? "shadow-lg shadow-blue/10"
									: ""
							}`}
						>
							<div className="w-full flex items-center justify-between p-6">
								<div className="flex items-center gap-4">
									<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue/20 to-blue/5 flex items-center justify-center border border-white/5">
										{capability.icon}
									</div>
									<div>
										<h3 className="text-2xl font-bold text-white">
											{capability.title}
										</h3>
										<p className="text-gray-400 mt-1 md:max-w-md">
											{capability.description.substring(
												0,
												80
											)}
											...
										</p>
									</div>
								</div>
							</div>

							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={
									viewedCapabilities.has(index)
										? { opacity: 1, height: "auto" }
										: { opacity: 0, height: 0 }
								}
								transition={{ duration: 0.5 }}
								className="px-6 pb-6"
							>
								<div className="pt-4 border-t border-white/10">
									<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
										<div>
											<p className="text-gray-300 text-lg leading-relaxed mb-6">
												{capability.description}
											</p>
											<button className="flex items-center text-blue-light hover:text-blue transition-colors duration-300 group">
												<span className="font-medium">
													Learn more about this
													capability
												</span>
												<ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
											</button>
										</div>

										<div className="bg-dark/50 backdrop-blur-sm rounded-xl p-8 border border-white/5">
											<h4 className="text-xl font-semibold mb-6 text-white/90">
												Key Features
											</h4>
											<ul className="space-y-4">
												{capability.features.map(
													(feature, idx) => (
														<li
															key={idx}
															className="flex items-start gap-3"
														>
															<div className="w-6 h-6 rounded-full bg-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
																<ChevronRight className="w-4 h-4 text-blue-light" />
															</div>
															<span className="text-gray-300">
																{feature}
															</span>
														</li>
													)
												)}
											</ul>
										</div>
									</div>
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
