"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, Users, Clock, Target, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { discoveryLinkProps } from "@/lib/links";

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-dark text-white">
			<section className="relative min-h-[80vh] flex items-center overflow-hidden pt-24 md:pt-32">
				<div className="absolute inset-0 bg-dark z-0"></div>
				<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue/5 rounded-full blur-[150px] -z-10"></div>
				<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo/5 rounded-full blur-[150px] -z-10"></div>

				<div className="absolute inset-0 grid-pattern opacity-10 z-0"></div>

				<div className="absolute top-1/4 left-[10%] w-24 h-24 rounded-full border border-blue/10 opacity-30"></div>
				<div className="absolute bottom-1/3 right-[15%] w-40 h-40 rounded-full border border-indigo/10 opacity-20"></div>

				<div className="container mx-auto relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div className="order-2 lg:order-1">
							<div className="mb-4 inline-block">
								<span className="px-4 py-2 bg-blue/10 rounded-full text-blue-light text-sm font-medium">
									About
								</span>
							</div>
							<h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-8 leading-tight tracking-tight">
								Software engineers <br />
								in <span className="gradient-text">Beirut</span>
								.
							</h1>
							<p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
								Building for businesses across Lebanon and MENA
								since 2019. We scale revenue, automate
								operations, and modernize the technology
								underneath.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link {...discoveryLinkProps} className="inline-block w-full sm:w-auto">
									<Button className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white w-full sm:w-auto whitespace-normal px-6 sm:px-8 py-6 text-base sm:text-lg h-auto rounded-full">
										Book a discovery call
										<ArrowRight className="ml-2 h-5 w-5" />
									</Button>
								</Link>
								<Link href="/portfolio">
									<Button
										variant="outline"
										className="border-blue/20 hover:bg-dark-lighter text-white w-full sm:w-auto whitespace-normal px-6 sm:px-8 py-6 text-base sm:text-lg h-auto rounded-full"
									>
										See the work
									</Button>
								</Link>
							</div>
						</div>

						<div className="order-1 lg:order-2 relative">
							<div className="absolute -inset-4 bg-gradient-to-r from-blue/10 to-indigo/10 rounded-full blur-xl -z-10"></div>
							<div className="relative rounded-3xl border border-blue/20 bg-dark-lighter/60 backdrop-blur-sm p-10 md:p-14">
								<p className="text-sm uppercase tracking-widest text-blue-light mb-4">
									Since
								</p>
								<p className="text-7xl md:text-8xl font-bold gradient-text mb-8">
									2019
								</p>
								<div className="w-20 h-1 bg-gradient-to-r from-blue to-indigo mb-8"></div>
								<p className="text-lg text-gray-300">
									Seven years building software in Beirut, for
									clients in Lebanon, the Gulf, and beyond.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative py-32 overflow-hidden">
				<div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo/5 rounded-full blur-[150px] -z-10"></div>

				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
						<div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
							<div className="mb-4">
								<span className="px-4 py-2 bg-blue/10 rounded-full text-blue-light text-sm font-medium">
									Our Journey
								</span>
							</div>
							<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-tight">
								Since{" "}
								<span className="gradient-text">2019</span>.
							</h2>
							<div className="w-20 h-1 bg-gradient-to-r from-blue to-indigo mb-8"></div>
						</div>

						{/*
						  TODO (needs input from JUSTECH): confirm and expand the founding
						  story below with the real detail: who started it, what the first
						  project was, what nearly ended it. This is the strongest paragraph
						  available on the site and it deserves the specifics only you have.
						*/}
						<div className="lg:col-span-7 space-y-8">
							<p className="text-xl leading-relaxed text-gray-300">
								JUSTECH started in Beirut in 2019. Within months
								the country went into the protests, then the
								banking collapse, then the port explosion, then
								COVID. Payment rails stopped working. Clients
								disappeared. A lot of software companies in
								Lebanon closed in that window.
							</p>

							<p className="text-xl leading-relaxed text-gray-300">
								We are still here, seven years later, still
								shipping. Anyone who ran a business in Lebanon
								through those years knows what that took, and it
								is a better description of how we work than any
								list of values: we plan for the thing going
								wrong, we keep systems running on infrastructure
								we do not control, and we finish what we start.
							</p>

							<p className="text-xl leading-relaxed text-gray-300">
								The clearest evidence is Rut Essentials: five
								separate projects plus an ongoing maintenance
								and management retainer. Clients who have
								options keep coming back.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="relative py-32 overflow-hidden">
				<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo/5 rounded-full blur-[150px] -z-10"></div>

				<div className="container mx-auto">
					<div className="mb-16">
						<div className="mb-4 inline-block">
							<span className="px-4 py-2 bg-blue/10 rounded-full text-blue-light text-sm font-medium">
								Our People
							</span>
						</div>
						<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
							Who you'll actually{" "}
							<span className="gradient-text">be working with</span>
						</h2>
					</div>

					{/*
					  TODO (needs input from JUSTECH): add the rest of the team here as
					  real people with real photos. The layout below switches from the
					  single-founder feature to a grid once there is more than one entry.
					  Do not add anyone who does not exist: invented staff was the most
					  damaging thing on the old version of this page.
					*/}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
						<div className="lg:col-span-4">
							<div className="relative max-w-[320px] mx-auto lg:mx-0">
								<div className="absolute -inset-3 bg-gradient-to-r from-blue/20 to-indigo/20 rounded-3xl blur-xl -z-10"></div>
								<Image
									src="/images/Omar.jpg"
									alt="Omar Chouman, founder of JUSTECH"
									width={500}
									height={500}
									className="w-full h-auto rounded-3xl border border-blue/20 object-cover"
									priority={false}
								/>
							</div>
						</div>

						<div className="lg:col-span-8">
							<h3 className="text-3xl md:text-4xl font-bold mb-2">
								Omar Chouman
							</h3>
							<p className="text-lg text-blue-light mb-8">
								Founder &amp; CEO, Technical Lead
							</p>
							<div className="w-20 h-1 bg-gradient-to-r from-blue to-indigo mb-8"></div>

							<div className="space-y-6 max-w-2xl">
								<p className="text-xl leading-relaxed text-gray-300">
									Omar founded JUSTECH in Beirut in 2019 and
									still writes code. He leads the technical
									side of every engagement, which means the
									person who scopes your project is the person
									accountable for delivering it.
								</p>
								<p className="text-xl leading-relaxed text-gray-300">
									He runs the discovery calls himself. When you
									book one, that is who you are talking to, not
									a salesperson who will hand you over
									afterwards.
								</p>
							</div>

							<Link
								{...discoveryLinkProps}
								className="inline-flex items-center gap-2 mt-8 text-blue-light hover:text-white transition-colors"
							>
								Book a call with Omar
								<ArrowRight className="h-4 w-4" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="relative py-32 bg-dark-lighter overflow-hidden">
				<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[150px] -z-10"></div>

				<div className="container mx-auto">
					<div className="text-center mb-20">
						<div className="mb-4 inline-block">
							<span className="px-4 py-2 bg-blue/10 rounded-full text-blue-light text-sm font-medium">
								Our Principles
							</span>
						</div>
						<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-tight">
							Core <span className="gradient-text">Values</span>
						</h2>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							These principles guide everything we do and define
							who we are as a company.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="bg-dark p-10 rounded-3xl transition-all duration-500 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2 group relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-b from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="w-20 h-20 rounded-2xl bg-blue/10 flex items-center justify-center mb-8">
									<Award className="w-10 h-10 text-blue-light" />
								</div>
								<h3 className="text-2xl font-bold mb-4 group-hover:text-white">
									Excellence
								</h3>
								<p className="text-gray-400 group-hover:text-gray-300">
									We strive for excellence in everything we
									do, from code quality to client
									communication.
								</p>
							</div>
						</div>

						<div className="bg-dark p-10 rounded-3xl transition-all duration-500 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2 group relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-b from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="w-20 h-20 rounded-2xl bg-blue/10 flex items-center justify-center mb-8">
									<Users className="w-10 h-10 text-blue-light" />
								</div>
								<h3 className="text-2xl font-bold mb-4 group-hover:text-white">
									Collaboration
								</h3>
								<p className="text-gray-400 group-hover:text-gray-300">
									We believe in the power of teamwork and
									collaborative problem-solving.
								</p>
							</div>
						</div>

						<div className="bg-dark p-10 rounded-3xl transition-all duration-500 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2 group relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-b from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="w-20 h-20 rounded-2xl bg-blue/10 flex items-center justify-center mb-8">
									<Clock className="w-10 h-10 text-blue-light" />
								</div>
								<h3 className="text-2xl font-bold mb-4 group-hover:text-white">
									Timeliness
								</h3>
								<p className="text-gray-400 group-hover:text-gray-300">
									We respect deadlines and deliver projects on
									time without compromising quality.
								</p>
							</div>
						</div>

						<div className="bg-dark p-10 rounded-3xl transition-all duration-500 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2 group relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-b from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="w-20 h-20 rounded-2xl bg-blue/10 flex items-center justify-center mb-8">
									<Target className="w-10 h-10 text-blue-light" />
								</div>
								<h3 className="text-2xl font-bold mb-4 group-hover:text-white">
									Innovation
								</h3>
								<p className="text-gray-400 group-hover:text-gray-300">
									We embrace new technologies and new
									approaches to solve hard problems.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-32 relative">
				<div className="absolute inset-0 bg-gradient-to-r from-blue/20 to-indigo/20 rounded-3xl mx-4 md:mx-12 -z-10"></div>
				<div className="absolute inset-0 grid-pattern opacity-5 rounded-3xl mx-4 md:mx-12 -z-10"></div>

				<div className="container mx-auto py-16 text-center">
					<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-tight">
						Work with{" "}
						<span className="gradient-text">people who stayed</span>
						.
					</h2>
					<p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
						Start with a discovery call. No charge, no obligation,
						and an honest answer, including if the answer is that
						you don't need us yet.
					</p>
					<Link {...discoveryLinkProps} className="inline-block w-full sm:w-auto">
						<Button className="bg-white text-dark hover:bg-gray-100 w-full sm:w-auto whitespace-normal px-6 sm:px-10 py-6 sm:py-7 text-base sm:text-xl h-auto rounded-full">
							Book a discovery call
							<ArrowRight className="ml-2 h-6 w-6" />
						</Button>
					</Link>
				</div>
			</section>
		</main>
	);
}
