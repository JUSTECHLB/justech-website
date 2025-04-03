"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechLogoProps {
	name: string;
	description: string;
	imageUrl: string;
	index?: number;
}

export default function TechLogo({
	name,
	description,
	imageUrl,
	index,
}: TechLogoProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="bg-dark p-6 rounded-xl text-center border border-blue/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2 group card-hover-gradient relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<AnimatePresence>
				{isHovered && (
					<motion.span
						className="absolute inset-0 z-0 block h-full w-full rounded-xl bg-gradient-to-br from-blue/10 to-indigo/20"
						layoutId={`techCardHover-${index}`}
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
							isHovered ? "opacity-95" : "opacity-85"
						)}
					></div>

					<div className="relative z-10 w-12 h-12 flex items-center justify-center">
						<Image
							src={imageUrl}
							alt={name}
							fill
							className="object-contain"
						/>
					</div>

					{isHovered && (
						<div className="absolute inset-0 bg-blue/20 rounded-full blur-sm"></div>
					)}
				</div>
				<h3 className="font-semibold mb-2 group-hover:text-white">
					{name}
				</h3>
				<p className="text-sm text-gray-400 group-hover:text-gray-200">
					{description}
				</p>
			</div>
		</div>
	);
}
