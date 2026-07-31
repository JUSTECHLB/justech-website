"use client";

import Link from "next/link";
import services from "@/content/services.json";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/service-card";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ServicesSection() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const containerRef = useRef<HTMLElement | null>(null);
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
		<section id="services" className="py-24 relative overflow-hidden" ref={containerRef}>
			<div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[100px] -z-10"></div>

			<motion.div
				className="container mx-auto"
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				variants={containerVariants}
			>
				<motion.div
					className="text-center mb-16"
					variants={titleVariants as any}
				>
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Three problems,{" "}
						<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
							three answers
						</span>
						.
					</h2>
					<p className="text-xl text-gray-400 max-w-2xl mx-auto">
						Most clients arrive with one of them. Some end up with
						all three.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					variants={containerVariants}
				>
					{services.map((service, index) => (
						<motion.div
							key={index}
							className="h-full"
							variants={itemVariants as any}
							whileHover={{
								scale: 1.03,
								transition: { duration: 0.2 },
							}}
							onHoverStart={() => setActiveIndex(index)}
							onHoverEnd={() => setActiveIndex(null)}
						>
							{service.link ? (
								<Link href={service.link} className="block h-full">
									<ServiceCard
										title={service.title}
										quote={service.quote}
										description={service.description}
										measured={service.measured}
										icon={service.icon}
										isActive={activeIndex === index}
									/>
								</Link>
							) : (
								<ServiceCard
									title={service.title}
									quote={service.quote}
									description={service.description}
									measured={service.measured}
									icon={service.icon}
									isActive={activeIndex === index}
								/>
							)}
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className="text-center mt-12"
					variants={itemVariants as any}
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
