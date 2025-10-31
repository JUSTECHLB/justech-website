"use client";

import { type FC, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
	items: {
		title: string;
		description: string;
		imageUrl?: string;
		index?: number;
	}[];
	wrapperClasses?: string;
	itemClasses?: string;
}

const CardHoverEffect: FC<Props> = ({ items, itemClasses, wrapperClasses }) => {
	const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

	return (
		<div
			className={cn(
				"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8",
				itemClasses
			)}
		>
			{items.map(({ description, title, imageUrl, index }, idx) => (
				<div
					key={idx}
					className={cn(
						"relative bg-dark p-6 rounded-xl text-center border border-blue/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2",
						itemClasses
					)}
					onMouseEnter={() => setHoveredIdx(idx)}
					onMouseLeave={() => setHoveredIdx(null)}
				>
					<AnimatePresence>
						{hoveredIdx === idx && (
							<motion.span
								className={cn(
									"absolute inset-0 z-0 block h-full w-full rounded-xl bg-gradient-to-br from-blue/10 to-indigo/20",
									wrapperClasses
								)}
								layoutId="techCardHover"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.2 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.1 },
								}}
							/>
						)}
					</AnimatePresence>

					<div className="relative z-10">
						<div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 relative overflow-hidden">
							<div
								className={cn(
									"absolute inset-0 bg-white/90 rounded-full transition-opacity duration-300",
									hoveredIdx === idx
										? "opacity-95"
										: "opacity-85"
								)}
							></div>

							{imageUrl && (
								<div className="relative z-10 w-12 h-12 flex items-center justify-center">
									<Image
										src={imageUrl}
										alt={title}
										fill
										className="object-contain"
									/>
								</div>
							)}

							{hoveredIdx === idx && (
								<div className="absolute inset-0 bg-blue/20 rounded-full blur-sm"></div>
							)}
						</div>
						<h3 className="font-semibold mb-2 group-hover:text-white">
							{title}
						</h3>
						<p className="text-sm text-gray-400 group-hover:text-gray-200">
							{description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default CardHoverEffect;
