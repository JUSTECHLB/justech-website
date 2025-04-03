"use client";

import { motion } from "framer-motion";
import {
	ArrowRight,
	Activity,
	Settings,
	CheckCircle,
	Clock,
	Users,
	FileText,
	BarChart2,
	Database,
	Zap,
	TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function BusinessHero() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const workflowNodes = [
		{
			id: "planning",
			label: "Planning",
			icon: FileText,
			color: "from-blue-600 to-blue-400",
		},
		{
			id: "resources",
			label: "Resources",
			icon: Users,
			color: "from-indigo-600 to-indigo-400",
		},
		{
			id: "execution",
			label: "Execution",
			icon: Settings,
			color: "from-blue-500 to-indigo-500",
		},
		{
			id: "monitoring",
			label: "Monitoring",
			icon: Activity,
			color: "from-blue-400 to-blue-600",
		},
		{
			id: "analysis",
			label: "Analysis",
			icon: BarChart2,
			color: "from-indigo-400 to-indigo-600",
		},
		{
			id: "optimization",
			label: "Optimization",
			icon: Zap,
			color: "from-blue-600 to-indigo-600",
		},
	];

	const connections = [
		{ from: "planning", to: "resources", delay: 0 },
		{ from: "resources", to: "execution", delay: 1 },
		{ from: "execution", to: "monitoring", delay: 2 },
		{ from: "monitoring", to: "analysis", delay: 3 },
		{ from: "analysis", to: "optimization", delay: 4 },
		{ from: "optimization", to: "planning", delay: 5 },
	];

	const nodeVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { type: "spring", stiffness: 300, damping: 20 },
		},
	};

	const particleVariants = {
		start: (custom) => ({
			pathOffset: 0,
			opacity: 1,
		}),
		end: (custom) => ({
			pathOffset: 1,
			opacity: 0,
			transition: {
				pathOffset: {
					duration: 2,
					repeat: Number.POSITIVE_INFINITY,
					ease: "linear",
					delay: custom * 0.5,
				},
				opacity: {
					duration: 0.3,
					delay: 1.7 + custom * 0.5,
					repeat: Number.POSITIVE_INFINITY,
					repeatDelay: 1.7,
				},
			},
		}),
	};

	const optimizationVariants = {
		hidden: { opacity: 0, scale: 0 },
		visible: (custom) => ({
			opacity: 1,
			scale: 1,
			transition: {
				delay: 1 + custom * 0.2,
				duration: 0.5,
			},
		}),
	};

	return (
		<section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-dark/90"></div>
				<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo/20 to-blue/10 rounded-full blur-[180px] -z-10"></div>
				<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue/15 to-transparent rounded-full blur-[150px] -z-10"></div>

				<div className="absolute inset-0 overflow-hidden opacity-20">
					<div className="h-full w-full flex">
						<div className="flex-1 grid grid-cols-12 grid-rows-12">
							{Array.from({ length: 144 }).map((_, i) => (
								<motion.div
									key={i}
									className="border-[0.5px] border-white/5"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										delay: i * 0.001,
										duration: 0.5,
									}}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4">
				<div className="flex flex-col lg:flex-row items-center gap-12">
					<motion.div
						className="flex-1 z-10"
						initial={{ opacity: 0, y: 20 }}
						animate={isLoaded ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.7, ease: "easeOut" }}
					>
						<motion.div
							className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-blue/10 to-indigo/10 rounded-full backdrop-blur-sm border border-white/10"
							initial={{ opacity: 0, x: -20 }}
							animate={isLoaded ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<span className="text-sm font-medium text-blue-light">
								Transform Your Business
							</span>
						</motion.div>

						<motion.h1
							className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
							initial={{ opacity: 0 }}
							animate={isLoaded ? { opacity: 1 } : {}}
							transition={{ duration: 0.7, delay: 0.3 }}
						>
							Unlock Operational <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-light via-blue to-indigo">
								Excellence & Efficiency
							</span>
						</motion.h1>

						<motion.p
							className="text-lg text-gray-300 mb-8 max-w-xl"
							initial={{ opacity: 0 }}
							animate={isLoaded ? { opacity: 1 } : {}}
							transition={{ duration: 0.7, delay: 0.4 }}
						>
							Streamline workflows, eliminate bottlenecks, and
							drive sustainable growth with our data-driven
							optimization strategies. Our proven methodology has
							helped businesses reduce operational costs by up to
							35% while increasing productivity by 58%.
						</motion.p>

						<motion.div
							className="flex flex-wrap gap-4 mb-8"
							initial={{ opacity: 0, y: 20 }}
							animate={isLoaded ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.5 }}
						>
							<Link href="/contact">
								<Button className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white rounded-full px-8 py-6 h-auto text-lg font-medium shadow-lg shadow-blue/20 hover:shadow-xl hover:shadow-blue/30 transition-all">
									Start Optimization
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</Link>
							<Link href="#success-stories">
								<Button
									variant="outline"
									className="rounded-full px-8 py-6 h-auto text-lg font-medium border-white/10 hover:bg-white/5 transition-all"
								>
									View Success Stories
								</Button>
							</Link>
						</motion.div>

						<motion.div
							className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl"
							initial={{ opacity: 0, y: 20 }}
							animate={isLoaded ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							<div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
								<div className="flex items-center gap-3 mb-2">
									<div className="p-2 rounded-full bg-blue/10">
										<Clock className="h-4 w-4 text-blue" />
									</div>
									<p className="text-sm text-gray-400">
										Efficiency
									</p>
								</div>
								<p className="text-2xl font-bold text-white">
									+42
									<span className="text-blue-light">%</span>
								</p>
							</div>
							<div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
								<div className="flex items-center gap-3 mb-2">
									<div className="p-2 rounded-full bg-indigo/10">
										<Settings className="h-4 w-4 text-indigo" />
									</div>
									<p className="text-sm text-gray-400">
										Cost Reduction
									</p>
								</div>
								<p className="text-2xl font-bold text-white">
									-35<span className="text-indigo">%</span>
								</p>
							</div>
							<div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
								<div className="flex items-center gap-3 mb-2">
									<div className="p-2 rounded-full bg-blue-light/10">
										<Activity className="h-4 w-4 text-blue-light" />
									</div>
									<p className="text-sm text-gray-400">
										Productivity
									</p>
								</div>
								<p className="text-2xl font-bold text-white">
									+58<span className="text-blue">%</span>
								</p>
							</div>
						</motion.div>
						<motion.div
							className="mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 max-w-xl"
							initial={{ opacity: 0, y: 20 }}
							animate={isLoaded ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.7 }}
						>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div className="p-2 rounded-full bg-blue/10">
										<TrendingUp className="h-4 w-4 text-blue-light" />
									</div>
									<div>
										<p className="text-sm text-gray-400">
											Overall Performance
										</p>
										<p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-light to-indigo">
											Exceptional
										</p>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<div className="flex items-center gap-2">
										<CheckCircle className="h-5 w-5 text-green-500" />
										<span className="text-sm text-gray-300">
											ROI{" "}
											<span className="font-bold text-white">
												+187%
											</span>
										</span>
									</div>
									<div className="flex items-center gap-2">
										<Clock className="h-5 w-5 text-blue" />
										<span className="text-sm text-gray-300">
											Time{" "}
											<span className="font-bold text-white">
												-42%
											</span>
										</span>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>

					<motion.div
						className="hidden lg:block flex-1 relative z-10"
						initial={{ opacity: 0 }}
						animate={isLoaded ? { opacity: 1 } : {}}
						transition={{ duration: 0.7, delay: 0.3 }}
					>
						<div className="relative w-full h-[500px] md:h-[600px]">
							<div className="absolute inset-0 flex items-center justify-center">
								<motion.div
									className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={
										isLoaded ? { opacity: 1, scale: 1 } : {}
									}
									transition={{ duration: 0.8, delay: 0.4 }}
								>
									<motion.div
										className="absolute inset-0 rounded-full border border-blue/20 flex items-center justify-center"
										animate={{ rotate: 360 }}
										transition={{
											duration: 120,
											repeat: Number.POSITIVE_INFINITY,
											ease: "linear",
										}}
									>
										<motion.div
											className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue rounded-full shadow-[0_0_10px_rgba(77,171,247,0.7)]"
											animate={{ scale: [1, 1.5, 1] }}
											transition={{
												duration: 3,
												repeat: Number.POSITIVE_INFINITY,
												ease: "easeInOut",
											}}
										/>
										<motion.div
											className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-indigo rounded-full shadow-[0_0_10px_rgba(99,102,241,0.7)]"
											animate={{ scale: [1, 1.5, 1] }}
											transition={{
												duration: 3,
												repeat: Number.POSITIVE_INFINITY,
												ease: "easeInOut",
												delay: 1.5,
											}}
										/>
									</motion.div>

									<motion.div
										className="absolute inset-[40px] rounded-full border border-blue/15 flex items-center justify-center"
										animate={{ rotate: -360 }}
										transition={{
											duration: 90,
											repeat: Number.POSITIVE_INFINITY,
											ease: "linear",
										}}
									>
										<motion.div
											className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-blue-light rounded-full shadow-[0_0_8px_rgba(77,171,247,0.6)]"
											animate={{ opacity: [0.6, 1, 0.6] }}
											transition={{
												duration: 4,
												repeat: Number.POSITIVE_INFINITY,
												ease: "easeInOut",
											}}
										/>
										<motion.div
											className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-indigo rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]"
											animate={{ opacity: [0.6, 1, 0.6] }}
											transition={{
												duration: 4,
												repeat: Number.POSITIVE_INFINITY,
												ease: "easeInOut",
												delay: 2,
											}}
										/>
									</motion.div>

									<motion.div
										className="absolute inset-[80px] rounded-full border border-blue/10"
										animate={{ scale: [1, 1.03, 1] }}
										transition={{
											duration: 8,
											repeat: Number.POSITIVE_INFINITY,
											ease: "easeInOut",
										}}
									/>

									<motion.div
										className="absolute inset-[120px] rounded-full bg-gradient-to-br from-blue/10 to-indigo/10 flex items-center justify-center overflow-hidden backdrop-blur-sm border border-white/5"
										initial={{ opacity: 0 }}
										animate={isLoaded ? { opacity: 1 } : {}}
										transition={{ duration: 1, delay: 0.6 }}
									>
										<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,139,230,0.15)_0%,rgba(12,12,15,0)_70%)]"></div>

										<motion.div
											className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-blue-light/50 to-transparent"
											animate={{
												left: ["0%", "100%", "0%"],
												opacity: [0, 1, 0],
											}}
											transition={{
												duration: 8,
												repeat: Number.POSITIVE_INFINITY,
												ease: "easeInOut",
												times: [0, 0.5, 1],
											}}
										/>

										<motion.div
											className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-light/50 to-transparent"
											animate={{
												top: ["0%", "100%", "0%"],
												opacity: [0, 1, 0],
											}}
											transition={{
												duration: 8,
												repeat: Number.POSITIVE_INFINITY,
												ease: "easeInOut",
												times: [0, 0.5, 1],
												delay: 4,
											}}
										/>

										<motion.div
											className="relative z-10 text-center p-6 flex flex-col items-center justify-center"
											initial={{ scale: 0.9, opacity: 0 }}
											animate={
												isLoaded
													? { scale: 1, opacity: 1 }
													: {}
											}
											transition={{
												delay: 0.8,
												duration: 0.8,
											}}
										>
											<motion.div
												className="w-16 h-16 rounded-full bg-gradient-to-br from-blue/30 to-indigo/30 flex items-center justify-center mx-auto mb-3 backdrop-blur-md border border-white/10"
												whileHover={{ scale: 1.1 }}
												transition={{
													type: "spring",
													stiffness: 400,
													damping: 10,
												}}
											>
												<Settings className="w-8 h-8 text-white" />
											</motion.div>
											<h3 className="text-xl font-bold mb-1 gradient-text">
												Business Operations
											</h3>
											<p className="text-xs text-gray-300">
												Optimization Workflow
											</p>
										</motion.div>
									</motion.div>

									{workflowNodes.map((node, index) => {
										const angle =
											index *
												((2 * Math.PI) /
													workflowNodes.length) -
											Math.PI / 2;
										const x = Math.cos(angle);
										const y = Math.sin(angle);

										return (
											<motion.div
												key={node.id}
												className="absolute transform -translate-x-1/2 -translate-y-1/2"
												style={{
													left: `calc((50% - 56px / 2) * (1 + ${x}))`,
													top: `calc((50% - 56px / 2) * (1 + ${y}))`,
													zIndex: 5,
													width: `56px`, // Explicitly set width
													height: `56px`, // Explicitly set height for consistency
												}}
												initial={{
													opacity: 0,
													scale: 0.5,
												}}
												animate={
													isLoaded
														? {
																opacity: 1,
																scale: 1,
														  }
														: {}
												}
												transition={{
													delay: 0.5 + index * 0.1,
													duration: 0.5,
												}}
												whileHover={{
													scale: 1.1,
													zIndex: 10,
												}}
											>
												<div className="flex flex-col items-center justify-center">
													<motion.div
														className={`w-14 h-14 rounded-full bg-gradient-to-r ${node.color} flex items-center justify-center shadow-lg shadow-blue-600/20`}
														whileHover={{ y: -3 }}
														transition={{
															type: "spring",
															stiffness: 400,
															damping: 10,
														}}
													>
														<node.icon className="h-6 w-6 text-white" />
													</motion.div>
													<p className="mt-2 text-sm font-medium text-white text-center whitespace-nowrap">
														{node.label}
													</p>

													<motion.div
														className="mt-1 bg-green-500/20 px-2 py-0.5 rounded-full flex items-center justify-center gap-1"
														initial={{
															opacity: 0,
															y: 5,
														}}
														animate={
															isLoaded
																? {
																		opacity: 1,
																		y: 0,
																  }
																: {}
														}
														transition={{
															delay:
																1.5 +
																index * 0.1,
															duration: 0.5,
														}}
													>
														<CheckCircle className="h-2.5 w-2.5 text-green-500" />
														<span className="text-xs text-green-400">
															+{30 + index * 5}%
														</span>
													</motion.div>
												</div>
											</motion.div>
										);
									})}

									{connections.map((connection, index) => {
										const sourceNode = workflowNodes.find(
											(node) =>
												node.id === connection.from
										);
										const targetNode = workflowNodes.find(
											(node) => node.id === connection.to
										);

										const sourceIndex =
											workflowNodes.findIndex(
												(node) =>
													node.id === connection.from
											);
										const targetIndex =
											workflowNodes.findIndex(
												(node) =>
													node.id === connection.to
											);

										const sourceAngle =
											sourceIndex *
												((2 * Math.PI) /
													workflowNodes.length) -
											Math.PI / 2;
										const targetAngle =
											targetIndex *
												((2 * Math.PI) /
													workflowNodes.length) -
											Math.PI / 2;

										const radius = 160;
										const sourceX =
											Math.cos(sourceAngle) * radius;
										const sourceY =
											Math.sin(sourceAngle) * radius;
										const targetX =
											Math.cos(targetAngle) * radius;
										const targetY =
											Math.sin(targetAngle) * radius;

										const centerX = 200;
										const centerY = 200;

										const path = `M ${sourceX + centerX} ${
											sourceY + centerY
										} Q ${centerX} ${centerY} ${
											targetX + centerX
										} ${targetY + centerY}`;

										return (
											<svg
												key={`${connection.from}-${connection.to}`}
												className="absolute inset-0 w-full h-full pointer-events-none"
												style={{ zIndex: 4 }}
											>
												<defs>
													<linearGradient
														id={`gradient-${index}`}
														x1="0%"
														y1="0%"
														x2="100%"
														y2="0%"
													>
														<stop
															offset="0%"
															stopColor={
																index % 2 === 0
																	? "#3B82F6"
																	: "#6366F1"
															}
															stopOpacity="0.3"
														/>
														<stop
															offset="100%"
															stopColor={
																index % 2 === 0
																	? "#6366F1"
																	: "#3B82F6"
															}
															stopOpacity="0.3"
														/>
													</linearGradient>
												</defs>

												<path
													d={path}
													stroke={`url(#gradient-${index})`}
													strokeWidth="1.5"
													fill="none"
													strokeDasharray="4 4"
												/>

												<motion.circle
													cx="0"
													cy="0"
													r="3"
													fill={
														index % 2 === 0
															? "#3B82F6"
															: "#6366F1"
													}
													initial={{ opacity: 0 }}
													animate={
														isLoaded
															? {
																	opacity: [
																		0, 1, 0,
																	],
															  }
															: {}
													}
													transition={{
														delay: 1 + index * 0.3,
														duration: 3,
														repeat: Number.POSITIVE_INFINITY,
														repeatDelay: 2,
														times: [0, 0.5, 1],
													}}
												>
													<animateMotion
														path={path}
														dur="3s"
														begin={`${
															1 + index * 0.3
														}s`}
														repeatCount="indefinite"
														rotate="auto"
													/>
												</motion.circle>
											</svg>
										);
									})}
								</motion.div>
							</div>

							<motion.div
								className="absolute top-[10%] left-[10%] bg-gradient-to-br from-blue to-indigo p-3 rounded-xl shadow-lg shadow-blue/20"
								initial={{ opacity: 0, scale: 0 }}
								animate={
									isLoaded
										? {
												opacity: 1,
												scale: 1,
												y: [0, -15, 0],
												rotate: [0, 5, 0],
										  }
										: {}
								}
								transition={{
									duration: 5,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
									delay: 0.8,
									scale: { duration: 0.5 },
								}}
							>
								<Database className="h-6 w-6 text-white" />
							</motion.div>

							<motion.div
								className="absolute bottom-[15%] left-[20%] bg-gradient-to-br from-indigo to-purple-600 p-3 rounded-xl shadow-lg shadow-indigo/20"
								initial={{ opacity: 0, scale: 0 }}
								animate={
									isLoaded
										? {
												opacity: 1,
												scale: 1,
												y: [0, -20, 0],
												rotate: [0, -5, 0],
										  }
										: {}
								}
								transition={{
									duration: 6,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
									delay: 1.2,
									scale: { duration: 0.5 },
								}}
							>
								<Activity className="h-6 w-6 text-white" />
							</motion.div>

							<motion.div
								className="absolute top-[20%] right-[15%] bg-gradient-to-br from-blue-light to-blue p-3 rounded-xl shadow-lg shadow-blue-light/20"
								initial={{ opacity: 0, scale: 0 }}
								animate={
									isLoaded
										? {
												opacity: 1,
												scale: 1,
												y: [0, -12, 0],
												rotate: [0, 8, 0],
										  }
										: {}
								}
								transition={{
									duration: 4.5,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
									delay: 1,
									scale: { duration: 0.5 },
								}}
							>
								<BarChart2 className="h-6 w-6 text-white" />
							</motion.div>

							<motion.div
								className="absolute bottom-[20%] right-[10%] bg-gradient-to-br from-blue to-blue-light p-3 rounded-xl shadow-lg shadow-blue/20"
								initial={{ opacity: 0, scale: 0 }}
								animate={
									isLoaded
										? {
												opacity: 1,
												scale: 1,
												y: [0, -18, 0],
												rotate: [0, -8, 0],
										  }
										: {}
								}
								transition={{
									duration: 5.5,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
									delay: 1.4,
									scale: { duration: 0.5 },
								}}
							>
								<Zap className="h-6 w-6 text-white" />
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
