"use client";

import { motion } from "framer-motion";

/**
 * The concentric-ring motif from the revenue scaling hero, extracted so the
 * newer pages share it. Rings use the spin-slow / reverse-spin keyframes
 * already in globals.css rather than injecting their own.
 */
export default function OrbitGraphic({
	icon,
	title,
	subtitle,
}: {
	/** A rendered element, not a component reference: server components cannot
	 *  hand a function across the client boundary. */
	icon: React.ReactNode;
	title: string;
	subtitle: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.2 }}
			className="relative"
			aria-hidden="true"
		>
			<div className="relative w-full max-w-[420px] h-[420px] mx-auto">
				<div className="absolute inset-0 rounded-full border-[1.5px] border-blue/30 animate-spin-slow">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue rounded-full glow-sm"></div>
					<div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-indigo rounded-full glow-sm"></div>
					<div className="absolute bottom-[12%] right-[10%] w-2 h-2 bg-blue-light rounded-full glow-sm"></div>
				</div>

				<div className="absolute inset-[38px] rounded-full border-[1.5px] border-blue/20 animate-reverse-spin">
					<div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-light rounded-full glow-sm"></div>
					<div className="absolute bottom-[18%] left-[6%] w-2 h-2 bg-blue rounded-full glow-sm"></div>
				</div>

				<div className="absolute inset-[76px] rounded-full border-[1.5px] border-blue/10">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-indigo rounded-full glow-sm"></div>
					<div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-light rounded-full glow-sm"></div>
				</div>

				<div className="absolute inset-[110px] rounded-full bg-gradient-to-br from-blue/10 to-indigo/10 flex items-center justify-center overflow-hidden backdrop-blur-sm border border-white/5">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,139,230,0.2)_0%,rgba(12,12,15,0)_70%)]"></div>

					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.8 }}
						className="relative z-10 text-center px-6"
					>
						<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue/20 to-indigo/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-md border border-white/10">
							{icon}
						</div>
						{/* Decorative, so not a real heading: keeps the page's
						    heading outline clean. */}
						<p className="text-xl font-bold mb-1 gradient-text">
							{title}
						</p>
						<p className="text-sm text-gray-300">{subtitle}</p>
					</motion.div>
				</div>

				<div className="absolute top-[8%] right-[8%] w-14 h-14 rounded-full bg-gradient-to-br from-blue/15 to-indigo/15 backdrop-blur-sm border border-white/10 animate-float"></div>
				<div
					className="absolute bottom-[10%] left-[6%] w-10 h-10 rounded-full bg-gradient-to-br from-indigo/15 to-blue/15 backdrop-blur-sm border border-white/10 animate-float"
					style={{ animationDelay: "1.5s" }}
				></div>
			</div>
		</motion.div>
	);
}
