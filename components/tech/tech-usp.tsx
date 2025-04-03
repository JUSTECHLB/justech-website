"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	ArrowRight,
	CheckCircle,
	Fingerprint,
	Zap,
	Layers,
	BarChart2,
} from "lucide-react";
import Link from "next/link";

export default function TechUsp() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const usps = [
		{
			icon: <Fingerprint className="h-12 w-12 text-white" />,
			title: "Vendor-Agnostic Expertise",
			description:
				"We provide unbiased recommendations based on your specific needs, not vendor relationships.",
			benefits: [
				"Best-fit technology selection",
				"Objective solution architecture",
				"Flexible integration options",
				"Future-proof implementations",
			],
			gradient: "from-blue-600/20 to-blue-400/20",
			iconGradient: "from-blue-600 to-blue-400",
		},
		{
			icon: <Zap className="h-12 w-12 text-white" />,
			title: "Seamless Integration",
			description:
				"Our solutions integrate smoothly with your existing systems, minimizing disruption and maximizing value.",
			benefits: [
				"API-first approach",
				"Legacy system compatibility",
				"Microservices architecture",
				"Scalable infrastructure",
			],
			gradient: "from-indigo-600/20 to-indigo-400/20",
			iconGradient: "from-indigo-600 to-indigo-400",
		},
		{
			icon: <Layers className="h-12 w-12 text-white" />,
			title: "Accelerated Delivery",
			description:
				"Our proven methodologies and pre-built components accelerate your transformation journey.",
			benefits: [
				"Rapid prototyping",
				"Agile implementation",
				"DevOps automation",
				"Continuous delivery",
			],
			gradient: "from-blue-light/20 to-blue/20",
			iconGradient: "from-blue-light to-blue",
		},
		{
			icon: <BarChart2 className="h-12 w-12 text-white" />,
			title: "Measurable Outcomes",
			description:
				"We define clear KPIs and success metrics to ensure your transformation delivers tangible business value.",
			benefits: [
				"ROI-focused approach",
				"Real-time performance dashboards",
				"Business impact analysis",
				"Continuous optimization",
			],
			gradient: "from-indigo-light/20 to-indigo/20",
			iconGradient: "from-indigo-light to-indigo",
		},
	];

	return (
		<section className="py-20 bg-dark-lighter" ref={ref}>
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
				>
					<span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-gradient-to-r from-blue/20 to-indigo/20 text-blue border border-blue/20 mb-4">
						Why Choose Us
					</span>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Our Unique Approach to Tech Transformation
					</h2>
					<p className="text-gray-400 max-w-3xl mx-auto">
						We differentiate ourselves through our vendor-agnostic
						expertise, seamless integration capabilities,
						accelerated delivery methodologies, and focus on
						measurable business outcomes.
					</p>
				</motion.div>

				<div className="space-y-12 mb-16">
					{usps.map((usp, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className={`flex flex-col ${
								index % 2 === 0
									? "lg:flex-row"
									: "lg:flex-row-reverse"
							} gap-8 items-center`}
						>
							<div className="lg:w-1/3">
								<div
									className={`bg-gradient-to-br ${usp.gradient} rounded-2xl p-8 border border-gray-800 relative overflow-hidden`}
								>
									<div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full"></div>
									<div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full"></div>

									<div className="relative">
										<div
											className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${usp.iconGradient} flex items-center justify-center mb-6 shadow-lg`}
										>
											<div className="bg-dark/10 backdrop-blur-sm rounded-xl p-3">
												{usp.icon}
											</div>
										</div>
										<h3 className="text-2xl font-bold mb-3">
											{usp.title}
										</h3>
										<p className="text-gray-400">
											{usp.description}
										</p>
									</div>
								</div>
							</div>

							<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
								{usp.benefits.map((benefit, idx) => (
									<motion.div
										key={idx}
										initial={{
											opacity: 0,
											x: index % 2 === 0 ? 20 : -20,
										}}
										animate={
											inView ? { opacity: 1, x: 0 } : {}
										}
										transition={{
											duration: 0.4,
											delay: 0.2 + idx * 0.1,
										}}
										className="bg-dark/50 backdrop-blur-sm rounded-xl p-5 border border-gray-800 flex items-start gap-4"
									>
										<CheckCircle className="h-5 w-5 text-blue mt-0.5 flex-shrink-0" />
										<div>
											<p className="text-gray-300">
												{benefit}
											</p>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="relative overflow-hidden rounded-3xl"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-blue/20 to-indigo/20 -z-10"></div>
					<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue to-indigo"></div>

					<div className="p-10 relative z-10">
						<div className="max-w-3xl mx-auto text-center">
							<h3 className="text-2xl font-bold mb-4">
								Ready to Transform Your Technology?
							</h3>
							<p className="text-gray-300 mb-6">
								Schedule a consultation with our tech
								transformation experts to discuss your specific
								challenges and opportunities.
							</p>
							<Link
								href="/contact"
								className="inline-flex items-center py-6 px-8 rounded-full bg-gradient-to-r from-blue to-indigo text-white font-medium transition-all hover:shadow-lg hover:shadow-blue/20"
							>
								Book a Free Consultation
								<ArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</div>
					</div>

					<div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 rounded-full blur-3xl -z-5"></div>
					<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo/10 rounded-full blur-3xl -z-5"></div>
				</motion.div>
			</div>
		</section>
	);
}
