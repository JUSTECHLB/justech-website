"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	Search,
	PenTool,
	Code2,
	Rocket,
	BarChart,
	RefreshCw,
} from "lucide-react";
import Image from "next/image";

export default function TransformationApproach() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const steps = [
		{
			icon: <Search className="h-6 w-6 text-blue" />,
			title: "Discovery & Assessment",
			description:
				"We analyze your current technology landscape, identify pain points, and define transformation goals aligned with your business objectives.",
			color: "from-blue/20 to-indigo/20",
		},
		{
			icon: <PenTool className="h-6 w-6 text-indigo" />,
			title: "Strategy & Roadmap",
			description:
				"We develop a comprehensive transformation strategy and implementation roadmap tailored to your specific needs and priorities.",
			color: "from-indigo/20 to-violet/20",
		},
		{
			icon: <Code2 className="h-6 w-6 text-blue" />,
			title: "Solution Design",
			description:
				"Our experts design scalable, future-proof solutions that leverage the latest technologies and best practices.",
			color: "from-blue/20 to-indigo/20",
		},
		{
			icon: <Rocket className="h-6 w-6 text-indigo" />,
			title: "Implementation",
			description:
				"We execute the transformation with minimal disruption to your operations, ensuring smooth transition and knowledge transfer.",
			color: "from-indigo/20 to-violet/20",
		},
		{
			icon: <BarChart className="h-6 w-6 text-blue" />,
			title: "Measurement & Optimization",
			description:
				"We continuously monitor performance metrics and optimize solutions to maximize ROI and business impact.",
			color: "from-blue/20 to-indigo/20",
		},
		{
			icon: <RefreshCw className="h-6 w-6 text-indigo" />,
			title: "Continuous Innovation",
			description:
				"We help you stay ahead with ongoing innovation, updates, and enhancements to your technology ecosystem.",
			color: "from-indigo/20 to-violet/20",
		},
	];

	return (
		<section className="py-20 bg-dark" ref={ref}>
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
				>
					<span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-gradient-to-r from-blue/20 to-indigo/20 text-blue border border-blue/20 mb-4">
						Our Approach
					</span>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Systematic Transformation Methodology
					</h2>
					<p className="text-gray-400 max-w-3xl mx-auto">
						Our proven six-step approach ensures successful
						technology transformation with minimal risk and maximum
						business impact.
					</p>
				</motion.div>

				<div className="flex flex-col lg:flex-row gap-12 items-center">
					<motion.div
						className="flex-1 relative"
						initial={{ opacity: 0, x: -30 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6 }}
					>
						<div className="relative">
							<div className="absolute top-0 bottom-0 left-[42px] w-[2px] bg-gradient-to-b from-blue via-indigo to-blue/0"></div>

							<div className="space-y-12">
								{steps.map((step, index) => (
									<motion.div
										key={index}
										className="flex gap-6"
										initial={{ opacity: 0, y: 20 }}
										animate={
											inView ? { opacity: 1, y: 0 } : {}
										}
										transition={{
											duration: 0.5,
											delay: 0.1 * index,
										}}
									>
										<div className="relative">
											<div className="absolute top-0 left-0 w-[84px] h-[84px] bg-gradient-to-br from-blue/10 to-indigo/10 rounded-full blur-lg"></div>
											<div
												className={`relative flex-shrink-0 h-[84px] w-[84px] rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center border border-gray-700 z-10`}
											>
												<div className="absolute inset-2 bg-dark rounded-full flex items-center justify-center">
													{step.icon}
												</div>
												<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-dark-lighter border border-blue/30 flex items-center justify-center text-sm font-bold">
													{index + 1}
												</div>
											</div>
										</div>

										<div className="pt-4 flex-1">
											<h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
												{step.title}
											</h3>
											<p className="text-gray-400">
												{step.description}
											</p>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>

					<motion.div
						className="flex-1"
						initial={{ opacity: 0, x: 30 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<div className="sticky top-32">
							<div className="relative rounded-2xl overflow-hidden">
								<div className="absolute -inset-1 bg-gradient-to-r from-blue/20 to-indigo/20 blur-xl -z-10"></div>
								<div className="aspect-[4/3] relative">
									<Image
										src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
										alt="Tech Transformation Process"
										fill
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-br from-dark/80 to-dark/40 mix-blend-multiply"></div>

									<div className="absolute inset-0 flex items-center justify-center p-8">
										<div className="w-full max-w-md">
											<h3 className="text-2xl font-bold mb-6 text-center">
												Transformation Results
											</h3>

											<div className="space-y-6">
												{[
													{
														label: "Cost Reduction",
														value: 40,
														color: "from-blue-600 to-blue-400",
													},
													{
														label: "Time-to-Market",
														value: 65,
														color: "from-indigo-600 to-indigo-400",
													},
													{
														label: "System Reliability",
														value: 85,
														color: "from-blue-400 to-indigo-600",
													},
												].map((item, idx) => (
													<motion.div
														key={idx}
														initial={{
															opacity: 0,
															x: 30,
														}}
														animate={
															inView
																? {
																		opacity: 1,
																		x: 0,
																  }
																: {}
														}
														transition={{
															duration: 0.5,
															delay:
																0.4 + idx * 0.1,
														}}
														className="bg-dark/70 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
													>
														<div className="flex justify-between items-center mb-2">
															<span className="text-gray-300">
																{item.label}
															</span>
															<span className="text-xl font-bold text-white">
																{item.value}%
															</span>
														</div>
														<div className="h-2 bg-gray-800 rounded-full overflow-hidden">
															<motion.div
																className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
																initial={{
																	width: 0,
																}}
																animate={
																	inView
																		? {
																				width: `${item.value}%`,
																		  }
																		: {}
																}
																transition={{
																	duration: 1,
																	delay:
																		0.6 +
																		idx *
																			0.2,
																}}
															></motion.div>
														</div>
													</motion.div>
												))}

												<motion.div
													initial={{
														opacity: 0,
														y: 20,
													}}
													animate={
														inView
															? {
																	opacity: 1,
																	y: 0,
															  }
															: {}
													}
													transition={{
														duration: 0.5,
														delay: 0.8,
													}}
													className="bg-gradient-to-r from-blue/20 to-indigo/20 rounded-lg p-4 border border-blue/20"
												>
													<div className="flex items-center justify-center">
														<div className="text-center">
															<div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue to-indigo mb-1">
																3.5x
															</div>
															<div className="text-gray-300">
																Average ROI
															</div>
														</div>
													</div>
												</motion.div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.5, delay: 0.9 }}
								className="mt-6 bg-gradient-to-br from-dark-lighter/50 to-dark/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
							>
								<h4 className="text-lg font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-light to-indigo">
									Why Our Approach Works
								</h4>
								<ul className="space-y-3">
									{[
										"Business-first perspective that aligns technology with strategic goals",
										"Iterative implementation with continuous feedback loops",
										"Cross-functional expertise across all technology domains",
										"Change management focus to ensure user adoption",
									].map((item, idx) => (
										<li
											key={idx}
											className="flex items-start"
										>
											<div className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
												<div className="w-2 h-2 rounded-full bg-blue"></div>
											</div>
											<span className="text-gray-300">
												{item}
											</span>
										</li>
									))}
								</ul>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
