"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export type Pill = {
	label: string;
	href?: string;
};

const pillClasses =
	"px-4 py-2 rounded-full border border-blue/20 bg-dark-lighter text-gray-200 text-sm transition-colors";

/**
 * The capability pills, revealed one after another on scroll. Items with an
 * `href` render as links and pick up a hover state; the rest are plain labels.
 */
export default function PillGroup({
	items,
	className = "",
}: {
	items: (string | Pill)[];
	className?: string;
}) {
	const pills: Pill[] = items.map((item) =>
		typeof item === "string" ? { label: item } : item
	);

	return (
		<div className={`flex flex-wrap gap-3 ${className}`}>
			{pills.map((pill, index) => (
				<motion.div
					key={pill.label}
					initial={{ opacity: 0, y: 12, scale: 0.96 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true, amount: 0.6 }}
					transition={{
						duration: 0.4,
						delay: Math.min(index * 0.04, 0.4),
						ease: "easeOut",
					}}
				>
					{pill.href ? (
						<Link
							href={pill.href}
							className={`${pillClasses} block hover:border-blue-light hover:text-white`}
						>
							{pill.label}
						</Link>
					) : (
						<span className={`${pillClasses} block`}>
							{pill.label}
						</span>
					)}
				</motion.div>
			))}
		</div>
	);
}
