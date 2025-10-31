"use client";

import Image from "next/image";
import Link from "next/link";
import {
	Award,
	Users,
	Clock,
	Target,
	CheckCircle,
	ArrowRight,
	ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-dark text-white">
			<section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 md:pt-32">
				<div className="absolute inset-0 bg-dark z-0"></div>
				<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue/5 rounded-full blur-[150px] -z-10"></div>
				<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo/5 rounded-full blur-[150px] -z-10"></div>

				<div className="absolute inset-0 grid-pattern opacity-10 z-0"></div>

				<div className="absolute top-1/4 left-[10%] w-24 h-24 rounded-full border border-blue/10 opacity-30"></div>
				<div className="absolute bottom-1/3 right-[15%] w-40 h-40 rounded-full border border-indigo/10 opacity-20"></div>
				<div className="absolute top-1/3 right-[25%] w-16 h-16 rounded-full bg-gradient-to-r from-blue/10 to-indigo/10 opacity-30"></div>

				<div className="container mx-auto relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div className="order-2 lg:order-1">
							<div className="mb-4 inline-block">
								<span className="px-4 py-2 bg-blue/10 rounded-full text-blue-light text-sm font-medium">
									About Us
								</span>
							</div>
							<h1 className="text-6xl md:text-7xl xl:text-8xl font-bold mb-8 leading-tight tracking-tight">
								We are <br />
								<span className="gradient-text">JUSTECH</span>
							</h1>
							<p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
								A creative technology agency dedicated to
								transforming businesses through innovative
								digital solutions and strategic thinking.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link href="/contact">
									<Button className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white px-8 py-6 text-lg h-auto rounded-full">
										Get In Touch
										<ArrowRight className="ml-2 h-5 w-5" />
									</Button>
								</Link>
								<Link href="/services">
									<Button
										variant="outline"
										className="border-blue/20 hover:bg-dark-lighter text-white px-8 py-6 text-lg h-auto rounded-full"
									>
										Our Services
									</Button>
								</Link>
							</div>
						</div>

						<div className="order-1 lg:order-2 relative">
							<div className="absolute -inset-4 bg-gradient-to-r from-blue/10 to-indigo/10 rounded-full blur-xl -z-10"></div>
							<div className="relative rounded-3xl overflow-hidden border border-blue/10 h-[500px] transform rotate-2 hover:rotate-0 transition-transform duration-500">
								<Image
									src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
									alt="JUSTECH Team"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>

								<div className="absolute bottom-8 left-8 right-8 bg-dark-lighter/80 backdrop-blur-md border border-blue/20 rounded-xl p-6 shadow-lg">
									<div className="flex items-center justify-between">
										<div>
											<p className="text-sm text-gray-400 mb-1">
												Founded
											</p>
											<p className="text-xl font-bold gradient-text">
												2015
											</p>
										</div>
										<div>
											<p className="text-sm text-gray-400 mb-1">
												Projects
											</p>
											<p className="text-xl font-bold gradient-text">
												500+
											</p>
										</div>
										<div>
											<p className="text-sm text-gray-400 mb-1">
												Team
											</p>
											<p className="text-xl font-bold gradient-text">
												25+
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative py-32">
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
								The <span className="gradient-text">Story</span>{" "}
								<br />
								Behind Our <br />
								Success
							</h2>
							<div className="w-20 h-1 bg-gradient-to-r from-blue to-indigo mb-8"></div>
						</div>

						<div className="lg:col-span-7 space-y-8">
							<p className="text-xl leading-relaxed text-gray-300">
								JUSTECH was founded in 2015 with a vision to
								provide innovative digital solutions that help
								businesses grow and succeed online. What started
								as a small team of passionate developers has now
								grown into a full-service software development
								agency with a diverse team of experts.
							</p>

							<p className="text-xl leading-relaxed text-gray-300">
								Over the years, we have worked with clients
								across various industries, from startups to
								established enterprises, helping them transform
								their digital presence and achieve their
								business goals.
							</p>

							<p className="text-xl leading-relaxed text-gray-300">
								Our commitment to quality, innovation, and
								client satisfaction has made us a trusted
								partner for businesses seeking to enhance their
								digital footprint and stay ahead in today's
								competitive market.
							</p>

							<div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
								<div className="border-t-2 border-blue/20 pt-6">
									<h3 className="text-4xl font-bold gradient-text mb-2">
										8+
									</h3>
									<p className="text-gray-400">
										Years of Experience
									</p>
								</div>
								<div className="border-t-2 border-blue/20 pt-6">
									<h3 className="text-4xl font-bold gradient-text mb-2">
										150+
									</h3>
									<p className="text-gray-400">
										Happy Clients
									</p>
								</div>
								<div className="border-t-2 border-blue/20 pt-6">
									<h3 className="text-4xl font-bold gradient-text mb-2">
										500+
									</h3>
									<p className="text-gray-400">
										Projects Completed
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative py-32 bg-dark-lighter">
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
									We embrace new technologies and innovative
									approaches to solve complex problems.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative py-32">
				<div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo/5 rounded-full blur-[150px] -z-10"></div>

				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
						<div className="lg:col-span-5">
							<div className="mb-4">
								<span className="px-4 py-2 bg-blue/10 rounded-full text-blue-light text-sm font-medium">
									Our People
								</span>
							</div>
							<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-tight">
								Meet The{" "}
								<span className="gradient-text">Team</span>
							</h2>
							<p className="text-xl text-gray-400 mb-8 leading-relaxed">
								Our talented professionals are the heart of our
								company and the driving force behind our
								success.
							</p>
							<div className="w-20 h-1 bg-gradient-to-r from-blue to-indigo mb-8"></div>
							<Link href="/contact">
								<Button className="bg-dark-lighter hover:bg-dark-light text-white border border-blue/20 rounded-full px-8 py-6 text-lg h-auto">
									Join Our Team
									<ChevronRight className="ml-2 h-5 w-5" />
								</Button>
							</Link>
						</div>

						<div className="lg:col-span-7">
							<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
								{[
									{
										id: 1,
										image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
										name: "David Mitchell",
										position: "CEO & Founder",
									},
									{
										id: 2,
										image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
										name: "Sarah Johnson",
										position: "Creative Director",
									},
									{
										id: 3,
										image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
										name: "Michael Chen",
										position: "Lead Developer",
									},
									{
										id: 4,
										image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
										name: "Emily Rodriguez",
										position: "UX Designer",
									},
									{
										id: 5,
										image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
										name: "James Wilson",
										position: "Marketing Strategist",
									},
									{
										id: 6,
										image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
										name: "Olivia Taylor",
										position: "Project Manager",
									},
								].map((member, index) => (
									<div
										key={member.id}
										className={`bg-dark p-4 rounded-3xl transition-all duration-500 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2 group relative overflow-hidden ${
											index === 0
												? "md:col-span-2 md:row-span-2"
												: ""
										}`}
									>
										<div className="relative rounded-2xl overflow-hidden aspect-square">
											<Image
												src={member.image}
												alt={member.name}
												fill
												className="object-cover transition-transform duration-500 group-hover:scale-110"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
												<div className="p-4">
													<h3 className="text-lg font-bold text-white">
														{member.name}
													</h3>
													<p className="text-blue-light text-sm">
														{member.position}
													</p>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative py-32 bg-dark-lighter">
				<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[150px] -z-10"></div>

				<div className="container mx-auto">
					<div className="text-center mb-20">
						<div className="mb-4 inline-block">
							<span className="px-4 py-2 bg-blue/10 rounded-full text-blue-light text-sm font-medium">
								Our Advantages
							</span>
						</div>
						<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-tight">
							Why Choose{" "}
							<span className="gradient-text">JUSTECH</span>
						</h2>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							We offer a unique combination of expertise,
							experience, and client-focused service.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-dark p-10 rounded-3xl transition-all duration-500 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2 group relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-b from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="w-16 h-16 rounded-2xl bg-blue/10 flex items-center justify-center mb-8">
									<CheckCircle className="w-8 h-8 text-blue-light" />
								</div>
								<h3 className="text-2xl font-bold mb-4 group-hover:text-white">
									Expertise & Experience
								</h3>
								<p className="text-gray-400 group-hover:text-gray-300">
									Our team consists of highly skilled
									professionals with years of experience in
									software development and digital marketing.
								</p>
							</div>
						</div>

						<div className="bg-dark p-10 rounded-3xl transition-all duration-500 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2 group relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-b from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="w-16 h-16 rounded-2xl bg-blue/10 flex items-center justify-center mb-8">
									<CheckCircle className="w-8 h-8 text-blue-light" />
								</div>
								<h3 className="text-2xl font-bold mb-4 group-hover:text-white">
									Custom Solutions
								</h3>
								<p className="text-gray-400 group-hover:text-gray-300">
									We create tailored solutions that address
									your specific business needs and challenges.
								</p>
							</div>
						</div>

						<div className="bg-dark p-10 rounded-3xl transition-all duration-500 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2 group relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-b from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="w-16 h-16 rounded-2xl bg-blue/10 flex items-center justify-center mb-8">
									<CheckCircle className="w-8 h-8 text-blue-light" />
								</div>
								<h3 className="text-2xl font-bold mb-4 group-hover:text-white">
									Client-Centric Approach
								</h3>
								<p className="text-gray-400 group-hover:text-gray-300">
									We prioritize your satisfaction and work
									closely with you throughout the development
									process.
								</p>
							</div>
						</div>

						<div className="bg-dark p-10 rounded-3xl transition-all duration-500 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2 group relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-b from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="w-16 h-16 rounded-2xl bg-blue/10 flex items-center justify-center mb-8">
									<CheckCircle className="w-8 h-8 text-blue-light" />
								</div>
								<h3 className="text-2xl font-bold mb-4 group-hover:text-white">
									Cutting-Edge Technology
								</h3>
								<p className="text-gray-400 group-hover:text-gray-300">
									We stay updated with the latest technologies
									and industry trends to deliver modern and
									efficient solutions.
								</p>
							</div>
						</div>

						<div className="bg-dark p-10 rounded-3xl transition-all duration-500 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2 group relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-b from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="w-16 h-16 rounded-2xl bg-blue/10 flex items-center justify-center mb-8">
									<CheckCircle className="w-8 h-8 text-blue-light" />
								</div>
								<h3 className="text-2xl font-bold mb-4 group-hover:text-white">
									Transparent Communication
								</h3>
								<p className="text-gray-400 group-hover:text-gray-300">
									We maintain clear and open communication
									throughout the project, keeping you informed
									at every stage.
								</p>
							</div>
						</div>

						<div className="bg-dark p-10 rounded-3xl transition-all duration-500 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2 group relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-b from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="w-16 h-16 rounded-2xl bg-blue/10 flex items-center justify-center mb-8">
									<CheckCircle className="w-8 h-8 text-blue-light" />
								</div>
								<h3 className="text-2xl font-bold mb-4 group-hover:text-white">
									Ongoing Support
								</h3>
								<p className="text-gray-400 group-hover:text-gray-300">
									We provide continuous support and
									maintenance to ensure your digital solutions
									remain effective and up-to-date.
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
						Ready to{" "}
						<span className="gradient-text">Transform</span> <br />
						Your Digital Presence?
					</h2>
					<p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
						Contact us today to discuss your project and discover
						how JUSTECH can help you achieve your digital goals.
					</p>
					<Link href="/contact">
						<Button className="bg-white text-dark hover:bg-gray-100 px-10 py-7 text-xl h-auto rounded-full">
							Let's Work Together
							<ArrowRight className="ml-2 h-6 w-6" />
						</Button>
					</Link>
				</div>
			</section>
		</main>
	);
}
