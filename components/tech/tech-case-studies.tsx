"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TechCaseStudies() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const caseStudies = [
		{
			title: "Healthcare Provider Digital Transformation",
			description:
				"Modernized legacy systems and implemented cloud infrastructure for a regional healthcare provider, resulting in improved patient care and operational efficiency.",
			image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
			results: [
				"45% reduction in IT operational costs",
				"68% faster patient data retrieval",
				"99.99% system uptime",
				"3.2x ROI within 18 months",
			],
			industry: "Healthcare",
			services: [
				"Cloud Migration",
				"Legacy Modernization",
				"Data Analytics",
			],
		},
		{
			title: "Manufacturing Firm IoT Implementation",
			description:
				"Designed and deployed an IoT solution for a manufacturing company to monitor equipment performance, predict maintenance needs, and optimize production processes.",
			image: "https://images.unsplash.com/photo-1717386255773-a456c611dc4e?q=80&w=2070&auto=format&fit=crop",
			results: [
				"32% reduction in equipment downtime",
				"28% increase in production efficiency",
				"52% decrease in maintenance costs",
				"Real-time visibility across 12 facilities",
			],
			industry: "Manufacturing",
			services: [
				"IoT Solutions",
				"AI & Machine Learning",
				"Data Analytics",
			],
		},
		{
			title: "Financial Services Cybersecurity Enhancement",
			description:
				"Implemented comprehensive cybersecurity solutions for a financial services firm, protecting sensitive data and ensuring regulatory compliance.",
			image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
			results: [
				"Zero security breaches post-implementation",
				"95% reduction in vulnerability exposure",
				"100% compliance with industry regulations",
				"4.5x ROI through breach prevention",
			],
			industry: "Financial Services",
			services: [
				"Cybersecurity",
				"Compliance Management",
				"Risk Assessment",
			],
		},
	];

	const testimonials = [
		{
			quote: "The tech transformation delivered by JusTech exceeded our expectations. Their team's expertise and methodical approach ensured a smooth transition with minimal disruption to our operations.",
			author: "Sarah Johnson",
			position: "CTO, Healthcare Solutions Inc.",
			rating: 5,
		},
		{
			quote: "Working with JusTech on our digital transformation initiative was a game-changer. Their vendor-agnostic approach ensured we got the best solutions for our specific needs.",
			author: "Michael Chen",
			position: "VP of Technology, Global Manufacturing",
			rating: 5,
		},
		{
			quote: "JusTech's tech transformation services helped us modernize our legacy systems while maintaining business continuity. The ROI has been impressive, and our team is now more productive than ever.",
			author: "David Rodriguez",
			position: "CIO, Financial Services Group",
			rating: 4,
		},
	];

	return (
		<section id="case-studies" className="py-20 bg-dark" ref={ref}>
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
				>
					<span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-gradient-to-r from-blue/20 to-indigo/20 text-blue border border-blue/20 mb-4">
						Success Stories
					</span>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Transformative Results for Our Clients
					</h2>
					<p className="text-gray-400 max-w-3xl mx-auto">
						Explore how our tech transformation services have helped
						organizations across industries achieve their strategic
						objectives and drive measurable business outcomes.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
					{caseStudies.map((study, index) => (
						<motion.div
							key={index}
							className="bg-dark-lighter rounded-xl overflow-hidden border border-gray-800 group hover:border-blue/30 transition-all"
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.1 * index }}
						>
							<div className="relative h-48">
								<Image
									src={study.image}
									alt={study.title}
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
								<div className="absolute top-4 left-4">
									<span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-dark/80 backdrop-blur-sm text-white border border-gray-700">
										{study.industry}
									</span>
								</div>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-3">
									{study.title}
								</h3>
								<p className="text-gray-400 mb-4">
									{study.description}
								</p>
								<div className="mb-4">
									<h4 className="text-sm font-medium text-gray-300 mb-2">
										Key Results:
									</h4>
									<ul className="space-y-1">
										{study.results.map((result, idx) => (
											<li
												key={idx}
												className="flex items-start text-sm"
											>
												<span className="text-blue mr-2">
													•
												</span>
												<span className="text-gray-300">
													{result}
												</span>
											</li>
										))}
									</ul>
								</div>
								<div className="flex flex-wrap gap-2 mb-4">
									{study.services.map((service, idx) => (
										<span
											key={idx}
											className="text-xs py-1 px-2 bg-blue/10 text-blue rounded"
										>
											{service}
										</span>
									))}
								</div>
								<Link
									href="/contact"
									className="inline-flex items-center text-sm font-medium text-blue hover:text-indigo transition-colors"
								>
									Read Full Case Study
									<ArrowUpRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					className="bg-dark-lighter rounded-xl p-8 border border-gray-800 mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<h3 className="text-2xl font-semibold mb-6 text-center">
						Client Testimonials
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className="bg-dark rounded-lg p-6 border border-gray-700"
							>
								<div className="flex mb-3">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className={`h-4 w-4 ${
												i < testimonial.rating
													? "text-yellow-500 fill-yellow-500"
													: "text-gray-600"
											}`}
										/>
									))}
								</div>
								<p className="text-gray-300 italic mb-4">
									"{testimonial.quote}"
								</p>
								<div>
									<p className="font-medium">
										{testimonial.author}
									</p>
									<p className="text-sm text-gray-400">
										{testimonial.position}
									</p>
								</div>
							</div>
						))}
					</div>
				</motion.div>

				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					<h3 className="text-2xl font-semibold mb-4">
						Ready to Achieve Similar Results?
					</h3>
					<p className="text-gray-400 mb-6 max-w-2xl mx-auto">
						Our tech transformation experts are ready to help you
						modernize your technology ecosystem and drive measurable
						business outcomes.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center py-3 px-6 rounded-lg bg-gradient-to-r from-blue to-indigo text-white font-medium transition-all hover:shadow-lg hover:shadow-blue/20"
					>
						Start Your Transformation Journey
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
