"use client";

import { motion } from "framer-motion";

/**
 * Fade-and-rise on scroll, matching the pillar pages: 20px offset, ~0.6s,
 * fires once. Stagger a group by passing an incrementing `delay`.
 *
 * Safe to use from a server component. Children are rendered on the server and
 * handed to this client wrapper as props.
 */
export default function Reveal({
	children,
	delay = 0,
	y = 20,
	className,
}: {
	children: React.ReactNode;
	delay?: number;
	y?: number;
	className?: string;
}) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.6, delay, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
}
