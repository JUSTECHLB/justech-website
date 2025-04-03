"use client";

import { motion } from "framer-motion";
import { Fingerprint, Lightbulb, Users, BarChart4 } from "lucide-react";

export default function UniqueSellingPoints() {
	const uspItems = [
		{
			icon: <Fingerprint className="w-8 h-8" />,
			title: "Proprietary Optimization Framework",
			description:
				"Our exclusive OPEX framework combines industry best practices with innovative approaches, delivering results that generic solutions can't match.",
			color: "from-blue-600 to-blue-400",
			delay: 0.1,
		},
		{
			icon: <Lightbulb className="w-8 h-8" />,
			title: "AI-Powered Process Intelligence",
			description:
				"Advanced AI algorithms analyze your operations to identify hidden inefficiencies and opportunities that human analysis might miss.",
			color: "from-indigo-600 to-indigo-400",
			delay: 0.2,
		},
		{
			icon: <Users className="w-8 h-8" />,
			title: "Cross-Functional Expertise",
			description:
				"Our team combines operational, technical, and industry-specific knowledge to deliver holistic optimization solutions.",
			color: "from-purple-600 to-purple-400",
			delay: 0.3,
		},
		{
			icon: <BarChart4 className="w-8 h-8" />,
			title: "Guaranteed ROI",
			description:
				"We're so confident in our approach that we guarantee a minimum 2x return on your investment within the first year.",
			color: "from-cyan-600 to-cyan-400",
			delay: 0.4,
		},
	];

	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Why Choose{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-indigo">
							Our Approach
						</span>
					</h2>
					<p className="text-gray-300 max-w-3xl mx-auto">
						Our unique approach to business operation optimization
						sets us apart from traditional consulting services.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{uspItems.map((item, index) => (
						<motion.div
							key={index}
							className="relative overflow-hidden group"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: item.delay }}
						>
							<div className="bg-dark-lighter rounded-2xl border border-white/5 h-full p-6 transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-lg">
								<div
									className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 text-white`}
								>
									{item.icon}
								</div>

								<h3 className="text-xl font-bold mb-3">
									{item.title}
								</h3>
								<p className="text-gray-400">
									{item.description}
								</p>

								<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					className="mt-16 bg-gradient-to-r from-blue/10 to-indigo/10 rounded-2xl p-8 border border-white/5"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="mb-6 md:mb-0 md:mr-8">
							<h3 className="text-2xl font-bold mb-2">
								Ready to transform your operations?
							</h3>
							<p className="text-gray-300">
								Schedule a free consultation to discover your
								optimization potential.
							</p>
						</div>
						<a
							href="/contact"
							className="px-6 py-3 bg-gradient-to-r from-blue to-indigo rounded-lg font-medium hover:shadow-lg transition-all duration-300 whitespace-nowrap"
						>
							Get Started
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
