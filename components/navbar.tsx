"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	console.log("CURRENT PATH:", pathname);

	const navItems = [
		{ label: "Revenue Scaling", href: "/revenue-scaling" },
		{
			label: "Business Operation Optimization",
			href: "/business-operation-optimization",
		},
		{ label: "Tech Transformation", href: "/tech-transformation" },
		{ label: "Portfolio", href: "/portfolio" },
		{ label: "Blog", href: "/blog" },
	];

	// FIX: handles exact + nested routes + trailing slash
	const isActive = (href: string) =>
		pathname === href ||
		pathname === href + "/" ||
		pathname.startsWith(href + "/");

	useEffect(() => {
		document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [mobileMenuOpen]);

	return (
		<>
			<nav className="py-3 sticky top-0 left-0 right-0 z-50 bg-dark">
				<div className="container mx-auto flex items-center justify-between">
					<Link href="/" className="flex items-center">
						<div className="relative w-10 h-10 mr-2">
							<img
								src="jt.webp"
								alt="JUSTECH Logo"
								className="w-full h-full object-contain"
							/>
						</div>
						<span className="text-xl font-bold">JUSTECH</span>
					</Link>

					{/* DESKTOP */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"transition-colors text-white hover:text-blue-light",
									isActive(item.href) && "!text-blue-light"
								)}
							>
								{item.label}
							</Link>
						))}
					</div>

					<Link href="/contact" className="hidden md:block">
						<Button className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white rounded-full px-6">
							Contact Us
						</Button>
					</Link>

					<button
						className="md:hidden text-white"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>
			</nav>

			{/* BACKDROP */}
			{mobileMenuOpen && (
				<div
					className="fixed inset-0 bg-dark/95 backdrop-blur-sm z-[60] md:hidden"
					onClick={() => setMobileMenuOpen(false)}
				/>
			)}

			{/* MOBILE MENU */}
			<div
				className={cn(
					"fixed inset-0 bg-dark z-[60] px-6 pt-6 pb-6 md:hidden transition-transform duration-300 overflow-y-auto flex flex-col",
					mobileMenuOpen ? "translate-x-0" : "translate-x-full"
				)}
			>
				<div className="flex justify-between items-center mb-8">
					<Link
						href="/"
						className="flex items-center"
						onClick={() => setMobileMenuOpen(false)}
					>
						<div className="relative w-8 h-8 mr-2">
							<img
								src="jt.webp"
								alt="JUSTECH Logo"
								className="w-full h-full object-contain"
							/>
						</div>
						<span className="text-lg font-bold">JUSTECH</span>
					</Link>

					<button
						onClick={() => setMobileMenuOpen(false)}
						className="p-2 rounded-full bg-dark-lighter border border-blue/20 hover:border-blue-light"
					>
						<X className="h-6 w-6" />
					</button>
				</div>

				<div className="flex flex-col gap-2 flex-1">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"py-3 border-b border-blue/10 text-white hover:text-blue-light transition-colors",
								isActive(item.href) && "!text-blue-light"
							)}
							onClick={() => setMobileMenuOpen(false)}
						>
							{item.label}
						</Link>
					))}

					<Link
						href="/about"
						className={cn(
							"py-3 border-b border-blue/10 text-white hover:text-blue-light transition-colors",
							isActive("/about") && "!text-blue-light"
						)}
						onClick={() => setMobileMenuOpen(false)}
					>
						About
					</Link>

					<Link
						href="/contact"
						className="mt-4 block"
						onClick={() => setMobileMenuOpen(false)}
					>
						<Button className="bg-gradient-to-r from-blue to-indigo text-white w-full rounded-full">
							Contact Us
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
}