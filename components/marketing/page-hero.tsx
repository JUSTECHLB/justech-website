"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrbitGraphic from "@/components/marketing/orbit-graphic";
import { DISCOVERY_CALL_LABEL, discoveryLinkProps } from "@/lib/links";

type PageHeroProps = {
	eyebrow: string;
	title: React.ReactNode;
	lede: string;
	ctaLabel?: string;
	/** Defaults to the discovery call booking link. */
	ctaHref?: string;
	/** Adds the orbital motif from the pillar heroes alongside the copy. */
	orbit?: {
		icon: React.ReactNode;
		title: string;
		subtitle: string;
	};
};

// Same entrance rhythm as the pillar heroes: each element trails the last.
const rise = {
	initial: { opacity: 0, y: 22 },
	animate: { opacity: 1, y: 0 },
};

export default function PageHero({
	eyebrow,
	title,
	lede,
	ctaLabel = DISCOVERY_CALL_LABEL,
	ctaHref,
	orbit,
}: PageHeroProps) {
	const linkProps = ctaHref ? { href: ctaHref } : discoveryLinkProps;

	return (
		<section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
			<div className="absolute inset-0 bg-dark -z-20"></div>
			<div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue/10 rounded-full blur-[140px] -z-10"></div>
			<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[120px] -z-10"></div>
			<div className="absolute inset-0 grid-pattern opacity-10 -z-10"></div>

			<div className="container mx-auto relative z-10">
				<div
					className={
						orbit
							? "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
							: ""
					}
				>
					<div className={orbit ? "" : "max-w-4xl"}>
						<motion.span
							{...rise}
							transition={{ duration: 0.6 }}
							className="inline-block px-4 py-2 bg-blue/10 rounded-full text-blue-light text-sm font-medium mb-6"
						>
							{eyebrow}
						</motion.span>

						<motion.h1
							{...rise}
							transition={{ duration: 0.7, delay: 0.05 }}
							className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight"
						>
							{title}
						</motion.h1>

						<motion.p
							{...rise}
							transition={{ duration: 0.7, delay: 0.12 }}
							className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10"
						>
							{lede}
						</motion.p>

						<motion.div
							{...rise}
							transition={{ duration: 0.7, delay: 0.2 }}
						>
							<Link {...linkProps} className="inline-block w-full sm:w-auto">
								<Button className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white w-full sm:w-auto whitespace-normal px-6 sm:px-8 py-6 text-base sm:text-lg h-auto rounded-full group transition-all duration-300 hover:shadow-lg hover:shadow-blue/20">
									{ctaLabel}
									<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
								</Button>
							</Link>
						</motion.div>
					</div>

					{orbit && (
						<div className="hidden lg:block">
							<OrbitGraphic
								icon={orbit.icon}
								title={orbit.title}
								subtitle={orbit.subtitle}
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
