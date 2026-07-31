"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

type SpecListProps = {
	heading: string;
	items: string[];
	numbered?: boolean;
};

export default function SpecList({
	heading,
	items,
	numbered = false,
}: SpecListProps) {
	return (
		<div>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: 0.5 }}
				className="text-sm font-semibold uppercase tracking-widest text-blue-light mb-6"
			>
				{heading}
			</motion.h2>

			<ul className="divide-y divide-blue/10 border-t border-blue/10">
				{items.map((item, index) => (
					<motion.li
						key={item}
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{
							duration: 0.5,
							delay: Math.min(index * 0.06, 0.4),
						}}
						className="group flex items-start gap-4 py-4 text-lg text-gray-300 transition-colors hover:text-white"
					>
						{numbered ? (
							<span className="font-mono text-sm text-blue-light pt-1 shrink-0 w-6">
								{String(index + 1).padStart(2, "0")}
							</span>
						) : (
							<Check className="h-5 w-5 text-blue-light mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
						)}
						<span>{item}</span>
					</motion.li>
				))}
			</ul>
		</div>
	);
}
