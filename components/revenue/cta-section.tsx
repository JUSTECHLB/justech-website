"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CtaSection() {
	return (
		<section className="py-32 relative">
			<div className="absolute inset-0 bg-gradient-to-r from-blue/20 via-indigo/15 to-blue/20 rounded-3xl mx-4 md:mx-12 -z-10"></div>
			<div className="absolute inset-0 grid-pattern opacity-5 rounded-3xl mx-4 md:mx-12 -z-10"></div>

			<div className="absolute inset-0 rounded-3xl mx-4 md:mx-12 overflow-hidden z-0 opacity-30">
				{Array.from({ length: 20 }).map((_, i) => (
					<div
						key={i}
						className="absolute rounded-full bg-white/30"
						style={{
							width: `${Math.random() * 8 + 2}px`,
							height: `${Math.random() * 8 + 2}px`,
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							animation: `float ${
								Math.random() * 10 + 10
							}s linear infinite`,
							animationDelay: `${Math.random() * 5}s`,
						}}
					></div>
				))}
			</div>

			<div className="container mx-auto py-16 text-center relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
				>
					<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-tight">
						Ready to <span className="gradient-text">Scale</span>{" "}
						<br />
						Your Revenue?
					</h2>
					<p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
						Contact us today to discuss how our revenue scaling
						services can help your business achieve sustainable
						growth.
					</p>
					<Link href="/contact">
						<Button className="bg-gradient-to-r from-white to-gray-100 text-dark hover:from-gray-100 hover:to-white px-10 py-7 text-xl h-auto rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
							Schedule a Free Consultation
							<ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
						</Button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
