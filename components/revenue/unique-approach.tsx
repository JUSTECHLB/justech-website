"use client";
import Image from "next/image";
import { BarChart, Shield, Zap, Target, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function UniqueApproach() {
	const approaches = [
		{
			icon: <Shield className="w-7 h-7 text-blue-light" />,
			title: "Risk-Mitigated Growth",
			description:
				"Our proprietary risk assessment framework ensures that every growth strategy is evaluated for potential downsides, with built-in contingency plans that protect your business during scaling.",
			benefits: [
				"98% client satisfaction rate",
				"Comprehensive risk assessment",
				"Built-in contingency planning",
				"Proactive issue identification",
			],
		},
		{
			icon: <Zap className="w-7 h-7 text-blue-light" />,
			title: "Rapid Implementation Framework",
			description:
				"While competitors take months to implement changes, our agile methodology allows for quick deployment of revenue strategies, with most clients seeing initial results within 30 days of engagement.",
			benefits: [
				"30-day implementation timeline",
				"Agile methodology approach",
				"Quick-win identification",
				"Iterative improvement cycles",
			],
		},
		{
			icon: <Target className="w-7 h-7 text-blue-light" />,
			title: "Industry-Specific Strategies",
			description:
				"Unlike generic growth consultants, we've developed specialized revenue scaling playbooks for 15+ industries, with benchmarks and strategies tailored to your specific market dynamics.",
			benefits: [
				"15+ industry playbooks",
				"Sector-specific benchmarks",
				"Competitive analysis",
				"Market-specific strategies",
			],
		},
	];

	return (
		<section className="relative py-32 bg-gradient-to-b from-dark-lighter to-dark">
			<div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue/10 to-transparent rounded-full blur-[180px] -z-10"></div>

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
							What Sets Us Apart
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-tight">
						Our <span className="gradient-text">Unique</span>{" "}
						Approach
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
						What makes our revenue scaling services different from
						traditional growth strategies and competitors.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="relative"
					>
						<div className="absolute -inset-4 bg-gradient-to-r from-blue/10 to-indigo/10 rounded-xl blur-xl -z-10"></div>
						<div className="relative rounded-3xl overflow-hidden border border-blue/10 h-full group">
							<Image
								src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8A%3D%3D&auto=format&fit=crop&w=2070&q=80"
								alt="Data-Driven Approach"
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/70 to-dark/30 group-hover:via-dark/60 transition-colors duration-500"></div>

							<div className="relative z-10 p-10 h-full flex flex-col justify-end">
								<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue/20 to-blue/5 flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
									<BarChart className="w-8 h-8 text-blue-light" />
								</div>
								<h3 className="text-3xl font-bold mb-4 text-white">
									Data-Driven Methodology
								</h3>
								<p className="text-gray-200 text-lg mb-6 leading-relaxed max-w-xl">
									Unlike traditional consultants who rely on
									intuition and past experience, our approach
									is built on real-time data analysis and
									predictive modeling that identifies specific
									revenue opportunities unique to your
									business.
								</p>

								<div className="bg-dark/50 backdrop-blur-sm rounded-xl border border-blue/10 overflow-hidden">
									<table className="w-full">
										<tbody>
											<tr className="border-b border-blue/10">
												<td className="py-3 px-4 text-blue-light font-medium">
													Revenue Projection Accuracy
												</td>
												<td className="py-3 px-4 text-right text-white font-bold">
													85% higher
												</td>
											</tr>
											<tr className="border-b border-blue/10">
												<td className="py-3 px-4 text-blue-light font-medium">
													Data Points Analyzed
												</td>
												<td className="py-3 px-4 text-right text-white font-bold">
													500+
												</td>
											</tr>
											<tr>
												<td className="py-3 px-4 text-blue-light font-medium">
													Predictive Models
												</td>
												<td className="py-3 px-4 text-right text-white font-bold">
													12 industry-specific
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</motion.div>

					<div className="space-y-6">
						{approaches.map((approach, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.7,
									delay: index * 0.1,
								}}
							>
								<div className="bg-gradient-to-br from-dark/80 to-dark-lighter/50 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden">
									<div className="p-6 border-b border-white/10">
										<div className="flex items-start gap-4">
											<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue/20 to-blue/5 flex items-center justify-center flex-shrink-0 border border-white/5">
												{approach.icon}
											</div>
											<div>
												<h3 className="text-xl font-bold text-white mb-2">
													{approach.title}
												</h3>
												<p className="text-gray-300 leading-relaxed">
													{approach.description}
												</p>
											</div>
										</div>
									</div>

									<div className="p-6 bg-dark/30">
										<h4 className="text-sm uppercase text-blue-light font-semibold mb-4">
											Key Benefits
										</h4>
										<div className="grid grid-cols-2 gap-3">
											{approach.benefits.map(
												(benefit, idx) => (
													<div
														key={idx}
														className="flex items-center gap-2"
													>
														<div className="w-5 h-5 rounded-full bg-blue/20 flex items-center justify-center flex-shrink-0">
															<Check className="w-3 h-3 text-blue-light" />
														</div>
														<span className="text-sm text-gray-300">
															{benefit}
														</span>
													</div>
												)
											)}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
