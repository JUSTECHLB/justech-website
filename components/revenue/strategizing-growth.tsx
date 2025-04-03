"use client";
import { Target, Award, Layers, Settings, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

export default function StrategizingGrowth() {
	const strategies = [
		{
			icon: <Target className="w-8 h-8 text-blue-light" />,
			title: "Understand Your Business Model",
			description:
				"We dive deep into your business operations, revenue streams, and market position to gain a comprehensive understanding of your current state and potential.",
			step: "01",
		},
		{
			icon: <Award className="w-8 h-8 text-blue-light" />,
			title: "Unique Selling Point",
			description:
				"We identify and refine what makes your business special in the marketplace to leverage these unique advantages in our scaling strategies and market positioning.",
			step: "02",
		},
		{
			icon: <Layers className="w-8 h-8 text-blue-light" />,
			title: "Core Services",
			description:
				"We analyze your core offerings to determine which products or services have the highest scaling potential and market demand to focus our growth efforts effectively.",
			step: "03",
		},
		{
			icon: <Settings className="w-8 h-8 text-blue-light" />,
			title: "Allocate Solutions",
			description:
				"We match the right strategies and solutions to your specific business needs and growth objectives, creating a customized approach that maximizes your revenue potential.",
			step: "04",
		},
		{
			icon: <BarChart2 className="w-8 h-8 text-blue-light" />,
			title: "Establish Success Metrics",
			description:
				"We define clear, measurable KPIs to track progress and ensure accountability throughout the scaling process, allowing for data-driven optimization of our strategies.",
			step: "05",
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
							Our Process
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-tight">
						<span className="gradient-text">Strategizing</span> Your
						Growth
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
						We begin with a comprehensive strategic approach to
						understand your business and establish the foundation
						for revenue scaling.
					</p>
				</motion.div>

				<div className="relative">
					<div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue/20 via-indigo/20 to-blue/20"></div>

					<div className="space-y-12">
						{strategies.map((strategy, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.7,
									delay: index * 0.1,
								}}
								className={`flex flex-col ${
									index % 2 === 0
										? "md:flex-row"
										: "md:flex-row-reverse"
								} gap-8 relative`}
							>
								<div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue to-indigo flex items-center justify-center transform -translate-x-1/2 md:-translate-x-4 border-4 border-dark-lighter z-10">
									<span className="text-xs font-bold text-white">
										{strategy.step}
									</span>
								</div>

								<div
									className={`md:w-1/2 ${
										index % 2 === 0
											? "md:pr-12"
											: "md:pl-12"
									} pl-12 md:pl-0`}
								>
									<div className="bg-gradient-to-br from-dark-lighter/50 to-dark/80 backdrop-blur-sm p-8 rounded-3xl border border-white/5 h-full">
										<div className="flex items-center gap-4 mb-6">
											<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue/20 to-blue/5 flex items-center justify-center border border-white/5">
												{strategy.icon}
											</div>
											<h3 className="text-2xl font-bold text-white">
												{strategy.title}
											</h3>
										</div>
										<p className="text-gray-300 leading-relaxed">
											{strategy.description}
										</p>
									</div>
								</div>

								<div className="md:w-1/2"></div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
