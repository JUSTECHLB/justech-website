"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Users,
	Calculator,
	Package,
	BarChart3,
	Factory,
	Megaphone,
	ClipboardList,
	ShoppingCart,
	ChevronDown,
	Check,
	X,
} from "lucide-react";
import type { JSX } from "react";

type OperationalArea = {
	id: string;
	name: string;
	icon: JSX.Element;
	color: string;
	services: Service[];
};

type Service = {
	id: string;
	name: string;
	description: string;
	pros: string[];
	cons: string[];
	costRange: string;
};

export default function OperationalAreas() {
	const [expandedArea, setExpandedArea] = useState<string | null>(null);

	const operationalAreas: OperationalArea[] = [
		{
			id: "crm",
			name: "CRM",
			icon: <Users className="w-8 h-8" />,
			color: "from-blue-600 to-blue-400",
			services: [
				{
					id: "crm-implementation",
					name: "CRM Implementation",
					description:
						"End-to-end setup and deployment of customer relationship management systems",
					pros: [
						"Centralized customer data",
						"Improved lead tracking",
						"Enhanced customer service",
						"Automated workflows",
					],
					cons: [
						"Initial learning curve",
						"Data migration challenges",
						"Requires staff training",
					],
					costRange: "$5,000 - $25,000",
				},
				{
					id: "crm-integration",
					name: "CRM Integration",
					description:
						"Seamless connection of your CRM with existing business systems",
					pros: [
						"Unified data ecosystem",
						"Reduced manual data entry",
						"Real-time information flow",
						"Enhanced reporting",
					],
					cons: [
						"Technical complexity",
						"Potential downtime during setup",
						"May require API development",
					],
					costRange: "$3,000 - $15,000",
				},
				{
					id: "crm-optimization",
					name: "CRM Optimization",
					description:
						"Fine-tuning your existing CRM for maximum efficiency and ROI",
					pros: [
						"Improved user adoption",
						"Streamlined processes",
						"Better data quality",
						"Enhanced reporting",
					],
					cons: [
						"Requires process analysis",
						"May need customization",
						"Temporary workflow disruption",
					],
					costRange: "$2,500 - $10,000",
				},
			],
		},
		{
			id: "accounting",
			name: "Accounting",
			icon: <Calculator className="w-8 h-8" />,
			color: "from-indigo-600 to-indigo-400",
			services: [
				{
					id: "financial-systems",
					name: "Financial Systems Integration",
					description:
						"Connecting and optimizing your financial software ecosystem",
					pros: [
						"Automated reconciliation",
						"Reduced manual errors",
						"Real-time financial visibility",
						"Streamlined reporting",
					],
					cons: [
						"Complex implementation",
						"Potential data security concerns",
						"Requires accounting expertise",
					],
					costRange: "$7,500 - $30,000",
				},
				{
					id: "expense-management",
					name: "Expense Management Automation",
					description:
						"Digitizing and streamlining expense tracking and approval processes",
					pros: [
						"Faster reimbursements",
						"Better policy compliance",
						"Reduced processing costs",
						"Enhanced audit trails",
					],
					cons: [
						"User adoption challenges",
						"Mobile app limitations",
						"Integration complexity",
					],
					costRange: "$3,000 - $12,000",
				},
				{
					id: "financial-reporting",
					name: "Financial Reporting Optimization",
					description:
						"Creating efficient, accurate financial reporting systems and dashboards",
					pros: [
						"Real-time financial insights",
						"Customizable dashboards",
						"Automated report generation",
						"Compliance support",
					],
					cons: [
						"Data quality dependencies",
						"Initial setup complexity",
						"Ongoing maintenance needs",
					],
					costRange: "$4,000 - $18,000",
				},
			],
		},
		{
			id: "inventory",
			name: "Inventory",
			icon: <Package className="w-8 h-8" />,
			color: "from-purple-600 to-purple-400",
			services: [
				{
					id: "inventory-management",
					name: "Inventory Management Systems",
					description:
						"Implementation of advanced inventory tracking and optimization solutions",
					pros: [
						"Reduced stockouts",
						"Lower carrying costs",
						"Automated reordering",
						"Enhanced forecasting",
					],
					cons: [
						"Hardware requirements",
						"Integration complexity",
						"Staff training needs",
					],
					costRange: "$8,000 - $35,000",
				},
				{
					id: "warehouse-optimization",
					name: "Warehouse Optimization",
					description:
						"Redesigning warehouse layouts and processes for maximum efficiency",
					pros: [
						"Increased picking speed",
						"Reduced labor costs",
						"Improved space utilization",
						"Enhanced accuracy",
					],
					cons: [
						"Operational disruption during implementation",
						"Physical infrastructure changes",
						"Process retraining",
					],
					costRange: "$10,000 - $50,000",
				},
				{
					id: "supply-chain-visibility",
					name: "Supply Chain Visibility",
					description:
						"End-to-end tracking and management of your entire supply chain",
					pros: [
						"Real-time tracking",
						"Proactive issue resolution",
						"Vendor performance metrics",
						"Improved planning",
					],
					cons: [
						"Vendor cooperation required",
						"Complex data integration",
						"Ongoing maintenance",
					],
					costRange: "$15,000 - $60,000",
				},
			],
		},
		{
			id: "sales",
			name: "Sales",
			icon: <BarChart3 className="w-8 h-8" />,
			color: "from-cyan-600 to-cyan-400",
			services: [
				{
					id: "sales-automation",
					name: "Sales Process Automation",
					description:
						"Streamlining and automating your sales workflows for maximum efficiency",
					pros: [
						"Reduced administrative work",
						"Consistent follow-up",
						"Improved conversion rates",
						"Better forecasting",
					],
					cons: [
						"Requires process standardization",
						"Potential resistance from sales team",
						"Customization needs",
					],
					costRange: "$5,000 - $20,000",
				},
				{
					id: "sales-analytics",
					name: "Sales Analytics & Reporting",
					description:
						"Advanced data analysis to uncover sales insights and opportunities",
					pros: [
						"Data-driven decision making",
						"Performance visibility",
						"Trend identification",
						"Targeted coaching",
					],
					cons: [
						"Data quality dependencies",
						"Analytical skill requirements",
						"Ongoing refinement needs",
					],
					costRange: "$4,000 - $15,000",
				},
				{
					id: "sales-enablement",
					name: "Sales Enablement Platform",
					description:
						"Equipping your sales team with the tools and content they need to succeed",
					pros: [
						"Improved content utilization",
						"Faster onboarding",
						"Better buyer engagement",
						"Increased win rates",
					],
					cons: [
						"Content management overhead",
						"Integration complexity",
						"Adoption challenges",
					],
					costRange: "$6,000 - $25,000",
				},
			],
		},
		{
			id: "production",
			name: "Production",
			icon: <Factory className="w-8 h-8" />,
			color: "from-green-600 to-green-400",
			services: [
				{
					id: "production-scheduling",
					name: "Production Scheduling Optimization",
					description:
						"Advanced algorithms to maximize production efficiency and throughput",
					pros: [
						"Reduced downtime",
						"Improved resource utilization",
						"Better deadline adherence",
						"Capacity optimization",
					],
					cons: [
						"Complex implementation",
						"Process standardization required",
						"Data quality dependencies",
					],
					costRange: "$12,000 - $45,000",
				},
				{
					id: "quality-control",
					name: "Quality Control Systems",
					description:
						"Digital quality assurance processes to reduce defects and waste",
					pros: [
						"Reduced defect rates",
						"Consistent quality",
						"Automated inspections",
						"Traceability",
					],
					cons: [
						"Sensor/hardware costs",
						"Integration complexity",
						"Calibration requirements",
					],
					costRange: "$8,000 - $30,000",
				},
				{
					id: "predictive-maintenance",
					name: "Predictive Maintenance",
					description:
						"AI-powered systems to predict and prevent equipment failures",
					pros: [
						"Reduced unplanned downtime",
						"Extended equipment life",
						"Optimized maintenance costs",
						"Improved safety",
					],
					cons: [
						"Sensor installation costs",
						"Data history requirements",
						"Model training period",
					],
					costRange: "$15,000 - $60,000",
				},
			],
		},
		{
			id: "marketing",
			name: "Marketing",
			icon: <Megaphone className="w-8 h-8" />,
			color: "from-red-600 to-red-400",
			services: [
				{
					id: "marketing-automation",
					name: "Marketing Automation",
					description:
						"End-to-end automation of marketing campaigns and customer journeys",
					pros: [
						"Consistent messaging",
						"Improved lead nurturing",
						"Better segmentation",
						"Performance tracking",
					],
					cons: [
						"Content creation demands",
						"Complex setup",
						"Ongoing optimization required",
					],
					costRange: "$6,000 - $25,000",
				},
				{
					id: "analytics-platform",
					name: "Marketing Analytics Platform",
					description:
						"Comprehensive tracking and analysis of all marketing activities",
					pros: [
						"ROI visibility",
						"Channel performance insights",
						"Customer journey tracking",
						"Data-driven decisions",
					],
					cons: [
						"Tracking implementation complexity",
						"Data privacy considerations",
						"Analysis skill requirements",
					],
					costRange: "$5,000 - $20,000",
				},
				{
					id: "content-management",
					name: "Content Management System",
					description:
						"Streamlined creation, approval, and distribution of marketing content",
					pros: [
						"Improved collaboration",
						"Consistent branding",
						"Faster time-to-market",
						"Better asset utilization",
					],
					cons: [
						"User adoption challenges",
						"Migration complexity",
						"Training requirements",
					],
					costRange: "$4,000 - $18,000",
				},
			],
		},
		{
			id: "project-management",
			name: "Project Management",
			icon: <ClipboardList className="w-8 h-8" />,
			color: "from-amber-600 to-amber-400",
			services: [
				{
					id: "pm-implementation",
					name: "PM Software Implementation",
					description:
						"Setup and configuration of enterprise project management platforms",
					pros: [
						"Improved visibility",
						"Better resource allocation",
						"Enhanced collaboration",
						"Standardized processes",
					],
					cons: [
						"Learning curve",
						"Process adaptation required",
						"Integration complexity",
					],
					costRange: "$7,000 - $30,000",
				},
				{
					id: "agile-transformation",
					name: "Agile Transformation",
					description:
						"Converting traditional project management to agile methodologies",
					pros: [
						"Faster delivery",
						"Increased adaptability",
						"Better stakeholder engagement",
						"Improved quality",
					],
					cons: [
						"Cultural resistance",
						"Organizational restructuring",
						"Training investment",
					],
					costRange: "$10,000 - $50,000",
				},
				{
					id: "portfolio-management",
					name: "Portfolio Management",
					description:
						"Strategic alignment and optimization of your project portfolio",
					pros: [
						"Better strategic alignment",
						"Improved resource allocation",
						"Enhanced ROI",
						"Risk management",
					],
					cons: [
						"Executive buy-in required",
						"Complex implementation",
						"Process standardization needs",
					],
					costRange: "$12,000 - $60,000",
				},
			],
		},
		{
			id: "ecommerce",
			name: "E-commerce",
			icon: <ShoppingCart className="w-8 h-8" />,
			color: "from-pink-600 to-pink-400",
			services: [
				{
					id: "ecommerce-platform",
					name: "E-commerce Platform Optimization",
					description:
						"Performance tuning and enhancement of your online store",
					pros: [
						"Improved conversion rates",
						"Faster page loads",
						"Better user experience",
						"Mobile optimization",
					],
					cons: [
						"Platform limitations",
						"Potential downtime",
						"Ongoing maintenance",
					],
					costRange: "$5,000 - $25,000",
				},
				{
					id: "payment-processing",
					name: "Payment Processing Integration",
					description:
						"Streamlined, secure payment systems for your e-commerce business",
					pros: [
						"Reduced cart abandonment",
						"Multiple payment options",
						"Enhanced security",
						"International capabilities",
					],
					cons: [
						"Transaction fees",
						"Security compliance requirements",
						"Integration complexity",
					],
					costRange: "$3,000 - $15,000",
				},
				{
					id: "order-management",
					name: "Order Management System",
					description:
						"End-to-end tracking and processing of customer orders",
					pros: [
						"Automated fulfillment",
						"Inventory synchronization",
						"Customer communications",
						"Returns management",
					],
					cons: [
						"Integration requirements",
						"Process standardization",
						"Training needs",
					],
					costRange: "$6,000 - $30,000",
				},
			],
		},
	];

	const toggleArea = (id: string) => {
		setExpandedArea(expandedArea === id ? null : id);
	};

	return (
		<section className="py-20 bg-gradient-to-b from-dark to-dark-lighter">
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Operational{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-indigo">
							Excellence
						</span>{" "}
						Areas
					</h2>
					<p className="text-gray-300 max-w-3xl mx-auto">
						Explore our specialized optimization services across key
						business operational areas. Click on any area to
						discover how we can transform your business operations.
					</p>
				</motion.div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
					{operationalAreas.map((area, index) => (
						<motion.div
							key={area.id}
							className="flex flex-col"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
						>
							<button
								onClick={() => toggleArea(area.id)}
								className={`relative bg-dark-lighter rounded-xl border border-white/5 p-4 md:p-6 h-full transition-all duration-300 hover:shadow-lg overflow-hidden group ${
									expandedArea === area.id
										? "ring-2 ring-blue/50"
										: ""
								}`}
							>
								<div className="flex flex-col items-center text-center">
									<div
										className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-4 text-white`}
									>
										{area.icon}
									</div>
									<h3 className="text-lg md:text-xl font-bold mb-2">
										{area.name}
									</h3>
									<div
										className={`mt-2 transition-transform duration-300 ${
											expandedArea === area.id
												? "rotate-180"
												: ""
										}`}
									>
										<ChevronDown className="w-5 h-5 text-gray-400" />
									</div>
								</div>

								<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</button>
						</motion.div>
					))}
				</div>

				<AnimatePresence>
					{expandedArea && (
						<motion.div
							key={`details-${expandedArea}`}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.4 }}
							className="mt-12 mb-8"
						>
							<div className="relative">
								<motion.div
									className="text-center mb-10"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3 }}
								>
									<h3 className="text-2xl md:text-3xl font-bold mb-3">
										{
											operationalAreas.find(
												(area) =>
													area.id === expandedArea
											)?.name
										}{" "}
										<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-indigo">
											Optimization Services
										</span>
									</h3>
									<p className="text-gray-300 max-w-2xl mx-auto">
										Explore our specialized services
										designed to transform your{" "}
										{operationalAreas
											.find(
												(area) =>
													area.id === expandedArea
											)
											?.name.toLowerCase()}
										operations and drive measurable business
										results.
									</p>
								</motion.div>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
									{operationalAreas
										.find(
											(area) => area.id === expandedArea
										)
										?.services.map((service, index) => (
											<motion.div
												key={service.id}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{
													duration: 0.4,
													delay: index * 0.1,
												}}
												className="group"
											>
												<div className="h-full bg-gradient-to-b from-dark-lighter to-dark border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue/5 hover:border-blue/20">
													<div
														className={`h-2 bg-gradient-to-r ${
															operationalAreas.find(
																(area) =>
																	area.id ===
																	expandedArea
															)?.color
														}`}
													></div>

													<div className="p-6">
														<h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
															{service.name}
														</h4>
														<p className="text-gray-300 mb-6 text-sm">
															{
																service.description
															}
														</p>

														<div className="mb-6 bg-dark/40 rounded-lg p-3 border border-white/5">
															<div className="flex items-center justify-between">
																<span className="text-sm text-gray-400">
																	Investment
																	Range:
																</span>
																<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue to-indigo">
																	{
																		service.costRange
																	}
																</span>
															</div>
														</div>

														<div className="space-y-4">
															<div>
																<h5 className="font-semibold text-green-400 mb-2 flex items-center text-sm">
																	<Check className="w-4 h-4 mr-2" />{" "}
																	Key Benefits
																</h5>
																<ul className="space-y-1">
																	{service.pros
																		.slice(
																			0,
																			3
																		)
																		.map(
																			(
																				pro,
																				i
																			) => (
																				<li
																					key={
																						i
																					}
																					className="flex items-start text-sm"
																				>
																					<span className="text-green-400 mr-2 mt-0.5 text-xs">
																						•
																					</span>
																					<span className="text-gray-300">
																						{
																							pro
																						}
																					</span>
																				</li>
																			)
																		)}
																</ul>
															</div>

															<div>
																<h5 className="font-semibold text-amber-400 mb-2 flex items-center text-sm">
																	<X className="w-4 h-4 mr-2" />{" "}
																	Considerations
																</h5>
																<ul className="space-y-1">
																	{service.cons
																		.slice(
																			0,
																			2
																		)
																		.map(
																			(
																				con,
																				i
																			) => (
																				<li
																					key={
																						i
																					}
																					className="flex items-start text-sm"
																				>
																					<span className="text-amber-400 mr-2 mt-0.5 text-xs">
																						•
																					</span>
																					<span className="text-gray-300">
																						{
																							con
																						}
																					</span>
																				</li>
																			)
																		)}
																</ul>
															</div>
														</div>

														<div className="mt-6 pt-4 border-t border-white/5">
															<a
																href="/contact"
																className="block w-full py-2.5 px-4 bg-gradient-to-r from-blue/20 to-indigo/20 hover:from-blue/30 hover:to-indigo/30 rounded-lg text-center text-white font-medium transition-all duration-300"
															>
																Request
																Consultation
															</a>
														</div>
													</div>
												</div>
											</motion.div>
										))}
								</div>

								<div className="absolute top-1/2 left-0 w-40 h-40 bg-blue/5 rounded-full filter blur-3xl opacity-30 -z-10"></div>
								<div className="absolute bottom-0 right-10 w-60 h-60 bg-indigo/5 rounded-full filter blur-3xl opacity-30 -z-10"></div>

								<div className="mt-10 text-center">
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.3,
											delay: 0.5,
										}}
									>
										<a
											href={`/services#${expandedArea}`}
											className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue/10 to-indigo/10 hover:from-blue/20 hover:to-indigo/20 rounded-lg text-white font-medium transition-all duration-300 group"
										>
											View All{" "}
											{
												operationalAreas.find(
													(area) =>
														area.id === expandedArea
												)?.name
											}{" "}
											Services
											<svg
												className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M14 5l7 7m0 0l-7 7m7-7H3"
												/>
											</svg>
										</a>
									</motion.div>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
