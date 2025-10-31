"use client";

import { motion } from "framer-motion";

export default function Methodology() {
	const methodologySteps = [
		{
			number: 1,
			title: "Assessment",
			description:
				"We conduct a comprehensive analysis of your current revenue streams, market position, and growth opportunities to establish a baseline.",
			activities: [
				"Revenue stream analysis",
				"Market position evaluation",
				"Competitive landscape mapping",
				"Growth opportunity identification",
			],
		},
		{
			number: 2,
			title: "Strategy Development",
			description:
				"We create a customized revenue scaling strategy tailored to your business goals, market conditions, and competitive landscape.",
			activities: [
				"Custom strategy creation",
				"Goal alignment",
				"Market-specific planning",
				"Resource allocation",
			],
		},
		{
			number: 3,
			title: "Implementation",
			description:
				"We execute the strategy with a focus on quick wins and long-term sustainable growth, adapting as needed based on real-time data.",
			activities: [
				"Phased execution",
				"Quick-win prioritization",
				"Team training",
				"Progress monitoring",
			],
		},
		{
			number: 4,
			title: "Optimization",
			description:
				"We continuously monitor performance, refine strategies, and identify new opportunities to ensure sustained revenue growth.",
			activities: [
				"Performance analysis",
				"Strategy refinement",
				"New opportunity identification",
				"Long-term planning",
			],
		},
	];

	return (
		<section className="relative py-32 bg-gradient-to-b from-dark to-dark-lighter">
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
							Our Approach
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-tight">
						Revenue Scaling{" "}
						<span className="gradient-text">Methodology</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
						Our proven 4-step methodology has helped businesses
						achieve significant revenue growth.
					</p>
				</motion.div>

				<div className="relative">
					<div className="absolute top-[60px] left-0 right-0 h-1 bg-gradient-to-r from-blue/20 via-indigo/20 to-blue/20 hidden md:block"></div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{methodologySteps.map((step, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.7,
									delay: index * 0.1,
								}}
								className="relative"
							>
								<div className="relative z-10 mb-8 flex justify-center">
									<div
										className={`w-20 h-20 rounded-full bg-gradient-to-r from-${
											getGradientColors(index).from
										} to-${
											getGradientColors(index).to
										} flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-${
											getGradientColors(index).shadow
										}/20 border border-white/20`}
									>
										<div className="flex items-center justify-center w-16 h-16 rounded-full bg-dark/50 backdrop-blur-sm">
											{step.number}
										</div>
									</div>
								</div>

								<div className="bg-gradient-to-br from-dark-lighter/50 to-dark/80 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden h-full">
									<div className="p-6 border-b border-white/10">
										<h3 className="text-xl font-bold text-white mb-3">
											{step.title}
										</h3>
										<p className="text-gray-300 leading-relaxed">
											{step.description}
										</p>
									</div>

									<div className="p-6 bg-dark/30">
										<h4 className="text-sm uppercase text-blue-light font-semibold mb-4">
											Key Activities
										</h4>
										<ul className="space-y-2">
											{step.activities.map(
												(activity, idx) => (
													<li
														key={idx}
														className="flex items-center gap-2"
													>
														<div
															className={`w-2 h-2 rounded-full bg-${
																getGradientColors(
																	index
																).from
															}`}
														></div>
														<span className="text-sm text-gray-300">
															{activity}
														</span>
													</li>
												)
											)}
										</ul>
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

function getGradientColors(index: number) {
	switch (index) {
		case 0:
			return { from: "blue-light", to: "blue", shadow: "blue" };
		case 1:
			return { from: "indigo", to: "blue-light", shadow: "indigo" };
		case 2:
			return { from: "[#4ECDC4]", to: "[#2BAA9F]", shadow: "[#4ECDC4]" };
		case 3:
			return { from: "[#FF6B6B]", to: "[#E63946]", shadow: "[#FF6B6B]" };
		default:
			return { from: "blue", to: "indigo", shadow: "blue" };
	}
}
