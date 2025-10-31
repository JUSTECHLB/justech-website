"use client";

import type React from "react";

import { useState, useRef } from "react";
import {
	Palette,
	Code,
	Search,
	ShoppingCart,
	Smartphone,
	TrendingUp,
	Layers,
	Database,
	BarChart,
	Globe,
	Shield,
	Cloud,
	Zap,
} from "lucide-react";

interface ServiceCardProps {
	title: string;
	description: string;
	icon: string;
}

export default function ServiceCard({
	title,
	description,
	icon,
}: ServiceCardProps) {
	const [isHovering, setIsHovering] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const cardRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;

		const rect = cardRef.current.getBoundingClientRect();
		setMousePosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
	};

	const getIcon = () => {
		switch (icon) {
			case "palette":
				return <Palette className="w-10 h-10 text-blue-light" />;
			case "code":
				return <Code className="w-10 h-10 text-blue-light" />;
			case "search":
				return <Search className="w-10 h-10 text-blue-light" />;
			case "shopping-cart":
				return <ShoppingCart className="w-10 h-10 text-blue-light" />;
			case "smartphone":
				return <Smartphone className="w-10 h-10 text-blue-light" />;
			case "trending-up":
				return <TrendingUp className="w-10 h-10 text-blue-light" />;
			case "layers":
				return <Layers className="w-10 h-10 text-blue-light" />;
			case "database":
				return <Database className="w-10 h-10 text-blue-light" />;
			case "bar-chart":
				return <BarChart className="w-10 h-10 text-blue-light" />;
			case "globe":
				return <Globe className="w-10 h-10 text-blue-light" />;
			case "shield":
				return <Shield className="w-10 h-10 text-blue-light" />;
			case "cloud":
				return <Cloud className="w-10 h-10 text-blue-light" />;
			case "zap":
				return <Zap className="w-10 h-10 text-blue-light" />;
			default:
				return <Code className="w-10 h-10 text-blue-light" />;
		}
	};

	return (
		<div
			ref={cardRef}
			className="gradient-border p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2 group card-hover-gradient relative overflow-hidden"
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			onMouseMove={handleMouseMove}
		>
			{isHovering && (
				<div
					className="absolute pointer-events-none inset-0 opacity-70 transition-opacity duration-300"
					style={{
						background: `radial-gradient(circle 120px at ${mousePosition.x}px ${mousePosition.y}px, rgba(77, 171, 247, 0.15), transparent 70%)`,
					}}
				/>
			)}

			<div className="w-16 h-16 rounded-2xl bg-dark-lighter border border-blue/20 flex items-center justify-center mb-6 group-hover:border-blue-light transition-colors relative z-10">
				{getIcon()}
			</div>
			<h3 className="text-xl font-semibold mb-3 group-hover:text-white relative z-10">
				{title}
			</h3>
			<p className="text-gray-400 group-hover:text-gray-200 relative z-10">
				{description}
			</p>
		</div>
	);
}
