"use client";

import Link from "next/link";
import {
	ArrowUpRight,
	TrendingUp,
	BarChart,
	PieChart,
	Target,
	Users,
	Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const animationStyles = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }
  @keyframes scanVertical {
    0%, 100% { transform: translateY(-100%) translateX(-50%); }
    50% { transform: translateY(100%) translateX(-50%); }
  }
  @keyframes scanHorizontal {
    0%, 100% { transform: translateX(-100%) translateY(-50%); }
    50% { transform: translateX(100%) translateY(-50%); }
  }
  @keyframes pulse {
    0% { opacity: 0.1; }
    100% { opacity: 0.3; }
  }
`;

export default function RevenueHero() {
	return (
		<section className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-32">
			<style dangerouslySetInnerHTML={{ __html: animationStyles }} />
			<div className="absolute inset-0 bg-dark z-0"></div>

			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,139,230,0.12)_0%,rgba(12,12,15,0)_60%)] z-0"></div>

			<div className="absolute inset-0 grid-pattern opacity-5 z-0"></div>

			<div className="container mx-auto relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="order-2 lg:orader-1 space-y-8"
					>
						<h1 className="text-6xl md:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
							<span className="block text-white/80 font-light">
								Elevate Your
							</span>
							<motion.span
								initial={{ backgroundPosition: "0% 50%" }}
								animate={{ backgroundPosition: "100% 50%" }}
								transition={{
									duration: 5,
									repeat: Number.POSITIVE_INFINITY,
									repeatType: "reverse",
								}}
								className="gradient-text bg-gradient-to-r from-blue-light via-blue to-indigo bg-clip-text text-transparent bg-size-200"
							>
								Revenue
							</motion.span>
						</h1>

						<p className="text-xl text-gray-300 max-w-xl leading-relaxed">
							Our precision-engineered revenue scaling system
							delivers measurable growth through strategic
							optimization and market expansion.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<Link href="/contact">
								<Button className="bg-gradient-to-r from-blue to-blue-dark text-white px-8 py-6 text-lg h-auto rounded-full group transition-all duration-300 shadow-lg shadow-blue/20 hover:shadow-blue/30 hover:scale-105">
									<span>Scale Your Business</span>
									<ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
								</Button>
							</Link>
							<Link href="/contact">
								<Button
									variant="outline"
									className="border-blue/20 hover:bg-dark-lighter text-white px-8 py-6 text-lg h-auto rounded-full backdrop-blur-sm hover:border-blue/40 transition-all duration-300"
								>
									Schedule Consultation
								</Button>
							</Link>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.6 }}
							className="bg-gradient-to-r from-dark-lighter/90 to-dark/90 backdrop-blur-md border border-blue/20 rounded-xl p-5 shadow-lg mt-8"
						>
							<div className="grid grid-cols-3 divide-x divide-blue/10">
								<div className="px-4 flex flex-col items-center text-center">
									<TrendingUp className="h-6 w-6 text-blue-light mb-2" />
									<p className="text-sm text-gray-400 font-medium">
										Average Growth
									</p>
									<p className="text-xl font-bold gradient-text">
										85%
									</p>
								</div>
								<div className="px-4 flex flex-col items-center text-center">
									<Clock className="h-6 w-6 text-blue-light mb-2" />
									<p className="text-sm text-gray-400 font-medium">
										Implementation
									</p>
									<p className="text-xl font-bold gradient-text">
										30 days
									</p>
								</div>
								<div className="px-4 flex flex-col items-center text-center">
									<BarChart className="h-6 w-6 text-blue-light mb-2" />
									<p className="text-sm text-gray-400 font-medium">
										Client ROI
									</p>
									<p className="text-xl font-bold gradient-text">
										3.5x
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.2 }}
						className="order-1 lg:order-2 relative"
					>
						<div className="relative w-full max-w-[500px] h-[500px] mx-auto">
							<div
								className="absolute inset-0 rounded-full border-[1.5px] border-blue/30"
								style={{
									animation: "spin 20s linear infinite",
								}}
							>
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue rounded-full shadow-glow-sm"></div>
								<div className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-indigo rounded-full shadow-glow-sm"></div>
								<div className="absolute top-1/2 left-[10%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-light rounded-full shadow-glow-sm"></div>
							</div>

							<div
								className="absolute inset-[40px] rounded-full border-[1.5px] border-blue/20"
								style={{
									animation:
										"spin 25s linear infinite reverse",
								}}
							>
								<div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-blue-light rounded-full shadow-glow-sm"></div>
								<div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-2 h-2 bg-blue rounded-full shadow-glow-sm"></div>
							</div>

							<div className="absolute inset-[80px] rounded-full border-[1.5px] border-blue/10">
								<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo rounded-full shadow-glow-sm"></div>
								<div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-blue-light rounded-full shadow-glow-sm"></div>
							</div>

							<div className="absolute inset-[120px] rounded-full bg-gradient-to-br from-blue/10 to-indigo/10 flex items-center justify-center overflow-hidden backdrop-blur-sm border border-white/5">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,139,230,0.2)_0%,rgba(12,12,15,0)_70%)]"></div>

								<motion.div
									initial={{ scale: 0.9, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ delay: 0.5, duration: 0.8 }}
									className="relative z-10 text-center p-8"
								>
									<div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue/20 to-indigo/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-md border border-white/10">
										<TrendingUp className="w-10 h-10 text-blue-light" />
									</div>
									<h3 className="text-2xl font-bold mb-2 gradient-text">
										Revenue Scaling
									</h3>
									<p className="text-sm text-gray-300">
										Precision-engineered growth
									</p>
								</motion.div>
							</div>

							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.8, duration: 0.8 }}
								className="absolute top-[10%] right-[10%] w-16 h-16 rounded-full bg-gradient-to-br from-blue/15 to-indigo/15 flex items-center justify-center backdrop-blur-sm border border-white/10"
								style={{
									animation: "float 6s ease-in-out infinite",
								}}
							>
								<BarChart className="w-8 h-8 text-blue-light" />
							</motion.div>

							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1, duration: 0.8 }}
								className="absolute bottom-[15%] left-[10%] w-16 h-16 rounded-full bg-gradient-to-br from-blue/15 to-indigo/15 flex items-center justify-center backdrop-blur-sm border border-white/10"
								style={{
									animation:
										"float 7s ease-in-out infinite 1s",
								}}
							>
								<PieChart className="w-8 h-8 text-blue-light" />
							</motion.div>

							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1.2, duration: 0.8 }}
								className="absolute top-[40%] left-[5%] w-16 h-16 rounded-full bg-gradient-to-br from-blue/15 to-indigo/15 flex items-center justify-center backdrop-blur-sm border border-white/10"
								style={{
									animation:
										"float 8s ease-in-out infinite 2s",
								}}
							>
								<Target className="w-8 h-8 text-blue-light" />
							</motion.div>

							<div className="absolute inset-[120px] rounded-full overflow-hidden">
								<div
									className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-blue-light/0 via-blue-light/70 to-blue-light/0"
									style={{
										animation:
											"scanVertical 4s ease-in-out infinite",
									}}
								></div>
								<div
									className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-blue-light/0 via-blue-light/70 to-blue-light/0"
									style={{
										animation:
											"scanHorizontal 4s ease-in-out infinite",
									}}
								></div>
							</div>

							<div
								className="absolute inset-[100px] rounded-full blur-[80px] bg-blue/15"
								style={{
									animation:
										"pulse 3s ease-in-out infinite alternate",
								}}
							></div>
						</div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.4, duration: 0.6 }}
							className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-dark-lighter/90 to-dark/90 backdrop-blur-md border border-blue/20 rounded-full py-3 px-6 shadow-lg"
						>
							<div className="flex items-center gap-6">
								<div className="flex items-center gap-2">
									<TrendingUp className="h-5 w-5 text-blue-light" />
									<div>
										<p className="text-xs text-gray-400">
											Q4 Growth
										</p>
										<p className="text-sm font-bold gradient-text">
											+145%
										</p>
									</div>
								</div>
								<div className="h-10 w-px bg-blue/20"></div>
								<div className="flex items-center gap-2">
									<Users className="h-5 w-5 text-blue-light" />
									<div>
										<p className="text-xs text-gray-400">
											Client Success
										</p>
										<p className="text-sm font-bold gradient-text">
											98%
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
