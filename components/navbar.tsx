"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [mobileMenuOpen]);

	return (
		<nav
			className={cn(
				"py-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				scrolled ? "bg-dark/80 backdrop-blur-md" : "bg-transparent"
			)}
		>
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

				<div className="hidden md:flex items-center gap-8">
					<Link
						href="/revenue-scaling"
						className="hover:text-blue-light transition-colors"
					>
						Revenue Scaling
					</Link>
					<Link
						href="/business-operation-optimization"
						className="hover:text-blue-light transition-colors"
					>
						Business Operation Optimization
					</Link>
					<Link
						href="/tech-transformation"
						className="hover:text-blue-light transition-colors"
					>
						Tech Transformation
					</Link>
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

			<div
				className={cn(
					"fixed inset-0 bg-dark z-40 pt-20 px-4 md:hidden transition-transform duration-300 overflow-y-auto",
					mobileMenuOpen ? "translate-x-0" : "translate-x-full"
				)}
			>
				<button
					onClick={() => setMobileMenuOpen(false)}
					className="absolute top-4 right-4 p-2 rounded-full bg-dark-lighter border border-blue/20 hover:border-blue-light transition-colors"
				>
					<X className="h-6 w-6" />
				</button>

				<div className="flex flex-col gap-4">
					<Link
						href="/revenue-scaling"
						className="py-3 border-b border-blue/10"
						onClick={() => setMobileMenuOpen(false)}
					>
						Revenue Scaling
					</Link>
					<Link
						href="/business-operation-optimization"
						className="py-3 border-b border-blue/10"
						onClick={() => setMobileMenuOpen(false)}
					>
						Business Operation Optimization
					</Link>
					<Link
						href="/tech-transformation"
						className="py-3 border-b border-blue/10"
						onClick={() => setMobileMenuOpen(false)}
					>
						Tech Transformation
					</Link>
					<Link
						href="/about"
						className="py-3 border-b border-blue/10"
						onClick={() => setMobileMenuOpen(false)}
					>
						About
					</Link>
					<Link
						href="/contact"
						className="mt-4"
						onClick={() => setMobileMenuOpen(false)}
					>
						<Button className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white w-full rounded-full">
							Contact Us
						</Button>
					</Link>
				</div>
			</div>
		</nav>
	);
}
