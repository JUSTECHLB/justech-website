"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { discoveryLinkProps } from "@/lib/links";

export default function BusinessCTA() {
	return (
		<section className="py-20 bg-dark-lighter">
			<div className="container mx-auto px-4">
				<div className="relative rounded-3xl overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-blue/20 to-indigo/10"></div>

					<div className="relative z-10 py-16 px-8 md:px-16">
						<motion.div
							className="max-w-3xl mx-auto text-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<h2 className="text-3xl md:text-4xl font-bold mb-6">
								Find out where the{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-indigo">
									hours are going
								</span>
								.
							</h2>

							<p className="text-lg text-gray-300 mb-8">
								Walk us through the process that eats your week on
								a short call. No charge, and we'll tell you
								whether it's worth automating.
							</p>

							<div className="flex justify-center">
								<Link {...discoveryLinkProps}>
									<Button className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white rounded-full px-8 py-6 h-auto w-full sm:w-auto">
										Book a discovery call
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</Link>
							</div>
						</motion.div>
					</div>

					<div className="absolute top-0 left-0 w-32 h-32 bg-blue/10 rounded-full blur-3xl"></div>
					<div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo/10 rounded-full blur-3xl"></div>
				</div>
			</div>
		</section>
	);
}
