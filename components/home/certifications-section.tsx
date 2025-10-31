"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, CheckCircle, Info, Shield } from "lucide-react";

export default function CertificationsSection() {
	const [activeTab, setActiveTab] = useState(0);

	const certifications = [
		{
			title: "AWS Certified",
			description:
				"Amazon Web Services certified solutions architect and developer with expertise in cloud infrastructure, serverless computing, and DevOps practices.",
			image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
			icon: <Shield className="h-5 w-5" />,
			details: [
				"Solutions Architect Professional",
				"DevOps Engineer Professional",
				"Advanced Networking Specialty",
				"Security Specialty",
			],
			color: "from-[#FF9900] to-[#FFB266]",
		},
		{
			title: "HubSpot Certified",
			description:
				"Certified in HubSpot CRM, marketing, sales, and service hub with expertise in inbound marketing and customer relationship management.",
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
			icon: <CheckCircle className="h-5 w-5" />,
			details: [
				"Marketing Software Certification",
				"CMS Implementation Certification",
				"Sales Software Certification",
				"Service Hub Software Certification",
			],
			color: "from-[#FF7A59] to-[#FF957F]",
		},
		{
			title: "SEO Certified",
			description:
				"Certified in advanced search engine optimization techniques and strategies for improving organic search visibility and driving qualified traffic.",
			image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2074&auto=format&fit=crop",
			icon: <Info className="h-5 w-5" />,
			details: [
				"Technical SEO Certification",
				"On-Page Optimization",
				"Off-Page SEO Strategies",
				"Local SEO Certification",
			],
			color: "from-[#4285F4] to-[#6EA5F7]",
		},
	];

	return (
		<section className="py-32 relative bg-gradient-to-b from-dark-lighter to-dark overflow-hidden">
			<div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue/5 rounded-full blur-[150px] -z-10"></div>
			<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo/5 rounded-full blur-[120px] -z-10"></div>

			<div className="absolute top-20 right-20 w-32 h-32 border border-blue/10 rounded-full"></div>
			<div className="absolute bottom-40 left-20 w-20 h-20 border border-indigo/10 rounded-full"></div>

			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-20"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 inline-block relative">
						Professional{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue to-indigo">
							Certifications
						</span>
						<div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue to-indigo"></div>
					</h2>
					<p className="text-xl text-gray-400 max-w-2xl mx-auto">
						Our team maintains the highest standards of expertise
						through continuous learning and professional
						certifications.
					</p>
				</motion.div>

				<div className="flex flex-col lg:flex-row gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="w-full lg:w-1/3"
					>
						<div className="space-y-4">
							{certifications.map((cert, index) => (
								<div
									key={index}
									onClick={() => setActiveTab(index)}
									className={`
                    relative p-6 rounded-xl cursor-pointer transition-all duration-300
                    ${
						activeTab === index
							? "bg-dark-lighter border-l-4 border-blue shadow-lg shadow-blue/5"
							: "bg-dark hover:bg-dark-lighter border-l-4 border-transparent"
					}
                  `}
								>
									<div className="flex items-center gap-4">
										<div
											className={`
                      p-3 rounded-lg 
                      ${
							activeTab === index
								? `bg-gradient-to-br ${cert.color} text-white`
								: "bg-dark-light text-gray-400"
						}
                    `}
										>
											{cert.icon}
										</div>
										<div>
											<h3
												className={`text-xl font-semibold ${
													activeTab === index
														? "text-white"
														: "text-gray-300"
												}`}
											>
												{cert.title}
											</h3>
											<p className="text-sm text-gray-400 mt-1 line-clamp-1">
												{cert.description
													.split(" ")
													.slice(0, 6)
													.join(" ")}
												...
											</p>
										</div>
									</div>

									{activeTab === index && (
										<motion.div
											layoutId="activeIndicator"
											className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue"
										/>
									)}
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="w-full lg:w-2/3"
					>
						<div className="relative h-[400px] rounded-2xl overflow-hidden">
							<div className="absolute inset-0">
								<Image
									src={certifications[activeTab].image}
									alt={certifications[activeTab].title}
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/60"></div>
							</div>

							<div className="relative z-10 h-full p-8 flex flex-col justify-center">
								<div className="flex items-center gap-3 mb-4">
									<Award
										className={`h-8 w-8 text-gradient-${activeTab}`}
									/>
									<h3 className="text-3xl font-bold text-white">
										{certifications[activeTab].title}
									</h3>
								</div>

								<p className="text-gray-300 mb-8 max-w-xl">
									{certifications[activeTab].description}
								</p>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{certifications[activeTab].details.map(
										(detail, i) => (
											<motion.div
												key={i}
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{
													duration: 0.3,
													delay: i * 0.1,
												}}
												className="flex items-center gap-2"
											>
												<div
													className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${certifications[activeTab].color}`}
												></div>
												<span className="text-gray-300">
													{detail}
												</span>
											</motion.div>
										)
									)}
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
