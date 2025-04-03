"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	Server,
	Cloud,
	Database,
	Code,
	BarChart,
	Shield,
	Smartphone,
	Cpu,
	Layers,
	Network,
	Bot,
	LineChart,
} from "lucide-react";

export default function TechCapabilities() {
	const [activeTab, setActiveTab] = useState("cloud");

	const capabilities = [
		{
			id: "cloud",
			title: "Cloud Transformation",
			icon: (
				<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300 rounded-xl text-white">
					<Cloud className="h-6 w-6" />
				</div>
			),
			description:
				"Migrate and optimize your infrastructure for the cloud to improve scalability, reduce costs, and enhance security.",
			features: [
				{
					title: "Cloud Migration",
					description:
						"Seamlessly transition your applications and data to AWS, Azure, or Google Cloud with minimal disruption.",
					icon: (
						<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-400 rounded-md text-white">
							<Server className="h-5 w-5" />
						</div>
					),
				},
				{
					title: "Cloud-Native Development",
					description:
						"Build applications specifically designed to leverage cloud capabilities using microservices and containers.",
					icon: (
						<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400 rounded-md text-white">
							<Code className="h-5 w-5" />
						</div>
					),
				},
				{
					title: "Multi-Cloud Strategy",
					description:
						"Develop and implement strategies that leverage multiple cloud providers for optimal performance and redundancy.",
					icon: (
						<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-500 rounded-md text-white">
							<Layers className="h-5 w-5" />
						</div>
					),
				},
				{
					title: "Cost Optimization",
					description:
						"Identify and implement cost-saving measures while maintaining or improving performance and reliability.",
					icon: (
						<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-400 rounded-md text-white">
							<BarChart className="h-5 w-5" />
						</div>
					),
				},
			],
		},
		{
			id: "data",
			title: "Data Modernization",
			icon: (
				<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-300 rounded-xl text-white">
					<Database className="h-6 w-6" />
				</div>
			),
			description:
				"Transform your data infrastructure to enable real-time analytics, AI-driven insights, and secure data governance.",
			features: [
				{
					title: "Data Warehouse Modernization",
					description:
						"Upgrade legacy data warehouses to modern, cloud-based solutions for improved performance and scalability.",
					icon: (
						<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-400 rounded-md text-white">
							<Database className="h-5 w-5" />
						</div>
					),
				},
				{
					title: "Real-time Analytics",
					description:
						"Implement streaming data solutions that provide immediate insights for faster decision-making.",
					icon: (
						<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-600 to-indigo-400 rounded-md text-white">
							<LineChart className="h-5 w-5" />
						</div>
					),
				},
				{
					title: "Data Governance",
					description:
						"Establish robust data governance frameworks to ensure data quality, security, and compliance.",
					icon: (
						<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-400 rounded-md text-white">
							<Shield className="h-5 w-5" />
						</div>
					),
				},
				{
					title: "AI/ML Integration",
					description:
						"Incorporate artificial intelligence and machine learning capabilities into your data ecosystem.",
					icon: (
						<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-400 rounded-md text-white">
							<Bot className="h-5 w-5" />
						</div>
					),
				},
			],
		},
		{
			id: "app",
			title: "Application Modernization",
			icon: (
				<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl text-white">
					<Smartphone className="h-6 w-6" />
				</div>
			),
			description:
				"Revitalize legacy applications with modern architectures, improved user experiences, and enhanced functionality.",
			features: [
				{
					title: "Legacy Application Refactoring",
					description:
						"Transform monolithic applications into modern, modular architectures for improved maintainability.",
					icon: (
						<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-cyan-500 rounded-md text-white">
							<Code className="h-5 w-5" />
						</div>
					),
				},
				{
					title: "API Development",
					description:
						"Create robust APIs that enable seamless integration between systems and support new business models.",
					icon: (
						<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-400 rounded-md text-white">
							<Network className="h-5 w-5" />
						</div>
					),
				},
				{
					title: "UX/UI Modernization",
					description:
						"Enhance user interfaces with modern design principles and improved user experiences.",
					icon: (
						<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500 rounded-md text-white">
							<Layers className="h-5 w-5" />
						</div>
					),
				},
				{
					title: "DevOps Implementation",
					description:
						"Adopt DevOps practices for faster, more reliable application delivery and deployment.",
					icon: (
						<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-400 to-blue-600 rounded-md text-white">
							<Cpu className="h-5 w-5" />
						</div>
					),
				},
			],
		},
	];

	return (
		<section className="py-20 bg-gradient-to-b from-dark to-dark-lighter relative overflow-hidden">
			<div className="absolute top-20 right-20 w-72 h-72 bg-blue/5 rounded-full blur-[100px] -z-10"></div>
			<div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo/5 rounded-full blur-[100px] -z-10"></div>
			<div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02] -z-10"></div>

			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
				>
					<motion.span
						className="inline-block py-1.5 px-4 rounded-full text-sm font-medium bg-gradient-to-r from-blue/20 to-indigo/20 text-blue-light border border-blue/20 mb-5 shadow-sm shadow-blue/10"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						Our Capabilities
					</motion.span>
					<motion.h2
						className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						Comprehensive{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-light to-indigo">
							Tech Transformation
						</span>
					</motion.h2>
					<motion.p
						className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Our technology transformation services span across
						cloud, data, and application modernization, enabling
						your business to leverage cutting-edge technologies for
						competitive advantage.
					</motion.p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					{capabilities.map((capability, idx) => (
						<motion.div
							key={capability.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							className="group"
						>
							<div className="bg-dark-light/80 backdrop-blur-sm rounded-2xl border border-gray-800/80 p-8 h-full transition-all duration-300 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5 relative overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-blue/5 to-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

								<div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center mb-6 group-hover:shadow-md group-hover:shadow-blue/20 transition-all duration-300">
									{capability.icon}
								</div>

								<h3 className="text-2xl font-bold mb-4 group-hover:text-blue-light transition-colors duration-300">
									{capability.title}
								</h3>
								<p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
									{capability.description}
								</p>

								<div className="space-y-4">
									{capability.features.map(
										(feature, index) => (
											<motion.div
												key={index}
												initial={{ opacity: 0 }}
												whileInView={{ opacity: 1 }}
												viewport={{ once: true }}
												transition={{
													duration: 0.3,
													delay: 0.3 + index * 0.1,
												}}
												className="flex items-start gap-3 group/feature"
											>
												<div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover/feature:scale-110">
													{feature.icon}
												</div>
												<div>
													<h4 className="font-medium text-white group-hover/feature:text-blue-light transition-colors duration-300">
														{feature.title}
													</h4>
													<p className="text-sm text-gray-400 group-hover/feature:text-gray-300 transition-colors duration-300">
														{feature.description}
													</p>
												</div>
											</motion.div>
										)
									)}
								</div>

								<div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5"></div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="bg-gradient-to-r from-blue/10 to-indigo/10 rounded-2xl p-8 border border-blue/20 relative overflow-hidden"
				>
					<div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 rounded-full blur-3xl -z-10"></div>
					<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo/10 rounded-full blur-3xl -z-10"></div>

					<h3 className="text-2xl font-bold mb-6 text-center">
						Key Transformation Benefits
					</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="bg-dark/50 backdrop-blur-sm rounded-xl p-5 border border-white/10">
							<div className="flex items-center gap-3 mb-3">
								<div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
									<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-400 text-white">
										<Server className="h-5 w-5" />
									</div>
								</div>
								<h4 className="font-semibold">
									Infrastructure
								</h4>
							</div>
							<p className="text-sm text-gray-400">
								Reduced costs by up to 30% with improved
								scalability and reliability
							</p>
						</div>

						<div className="bg-dark/50 backdrop-blur-sm rounded-xl p-5 border border-white/10">
							<div className="flex items-center gap-3 mb-3">
								<div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
									<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-400 text-white">
										<Database className="h-5 w-5" />
									</div>
								</div>
								<h4 className="font-semibold">Data Systems</h4>
							</div>
							<p className="text-sm text-gray-400">
								Enhanced analytics capabilities with real-time
								insights and AI integration
							</p>
						</div>

						<div className="bg-dark/50 backdrop-blur-sm rounded-xl p-5 border border-white/10">
							<div className="flex items-center gap-3 mb-3">
								<div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
									<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-cyan-500 text-white">
										<Code className="h-5 w-5" />
									</div>
								</div>
								<h4 className="font-semibold">Applications</h4>
							</div>
							<p className="text-sm text-gray-400">
								Modernized interfaces and architectures for
								better user experiences
							</p>
						</div>

						<div className="bg-dark/50 backdrop-blur-sm rounded-xl p-5 border border-white/10">
							<div className="flex items-center gap-3 mb-3">
								<div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
									<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-400 text-white">
										<BarChart className="h-5 w-5" />
									</div>
								</div>
								<h4 className="font-semibold">
									Business Impact
								</h4>
							</div>
							<p className="text-sm text-gray-400">
								Average 320% ROI with faster time-to-market and
								improved competitiveness
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
