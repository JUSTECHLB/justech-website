"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/service-card";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ServicesSection() {
	const [activeIndex, setActiveIndex] = useState(null);
	const containerRef = useRef(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting);
			},
			{ threshold: 0.2 }
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current);
			}
		};
	}, []);

	const services = [
		{
			title: "Revenue Scaling",
			description:
				"Strategic approaches to increase your business revenue through digital transformation and market expansion.",
			icon: "trending-up",
			link: "/revenue-scaling",
		},
		{
			title: "Operational Optimization",
			description:
				"Streamline your business processes and organizational structure for maximum efficiency and productivity.",
			icon: "layers",
		},
		{
			title: "Workflow Automation",
			description:
				"Implement automated solutions that reduce manual tasks and increase operational efficiency.",
			icon: "zap",
		},
		{
			title: "Digital Transformation",
			description:
				"Comprehensive digital strategies to modernize your business and stay ahead of the competition.",
			icon: "code",
		},
		{
			title: "Custom Software Development",
			description:
				"Tailored software solutions designed to address your specific business challenges and goals.",
			icon: "database",
		},
		{
			title: "Cloud Infrastructure",
			description:
				"Scalable and secure cloud solutions to support your growing business needs and requirements.",
			icon: "cloud",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 10,
			},
		},
	};

	const titleVariants = {
		hidden: { y: -20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 10,
			},
		},
	};

	return (
		<section id="services" className="py-24 relative" ref={containerRef}>
			<div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[100px] -z-10"></div>

			<motion.div
				className="container mx-auto"
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				variants={containerVariants}
			>
				<motion.div
					className="text-center mb-16"
					variants={titleVariants}
				>
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Our{" "}
						<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
							Services
						</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-2xl mx-auto">
						We offer a comprehensive range of solutions to help your
						business scale revenue and optimize operations.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					variants={containerVariants}
				>
					{services.map((service, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover={{
								scale: 1.03,
								transition: { duration: 0.2 },
							}}
							onHoverStart={() => setActiveIndex(index)}
							onHoverEnd={() => setActiveIndex(null)}
						>
							{service.link ? (
								<Link href={service.link}>
									<ServiceCard
										title={service.title}
										description={service.description}
										icon={service.icon}
										isActive={activeIndex === index}
									/>
								</Link>
							) : (
								<ServiceCard
									title={service.title}
									description={service.description}
									icon={service.icon}
									isActive={activeIndex === index}
								/>
							)}
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className="text-center mt-12"
					variants={itemVariants}
					initial={{ opacity: 0, y: 20 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ delay: 0.8 }}
				>
					<Link href="/services">
						<Button className="bg-dark-lighter hover:bg-dark-light text-white border border-blue/20 rounded-full px-6 group transition-all duration-300 hover:shadow-lg hover:shadow-blue/10">
							View All Services
							<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
						</Button>
					</Link>
				</motion.div>
			</motion.div>
		</section>
	);
}
