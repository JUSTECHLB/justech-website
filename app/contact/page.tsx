"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		service: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSelectChange = (value: string) => {
		setFormData((prev) => ({ ...prev, service: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			setFormData({
				name: "",
				email: "",
				phone: "",
				service: "",
				message: "",
			});
		}, 1500);
	};

	return (
		<main className="min-h-screen bg-dark text-white">
			<section className="relative pt-32 pb-20 overflow-hidden">
				<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue/10 rounded-full blur-[120px] -z-10"></div>
				<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo/10 rounded-full blur-[100px] -z-10"></div>

				<div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>

				<div className="container mx-auto relative z-10">
					<div className="text-center max-w-3xl mx-auto">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
							Get In <span className="gradient-text">Touch</span>
						</h1>
						<p className="text-xl text-gray-400 mb-10">
							Have a project in mind? Let's discuss how we can
							help you achieve your digital goals.
						</p>
					</div>
				</div>
			</section>

			<section className="relative py-16">
				<div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[100px] -z-10"></div>

				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div className="gradient-border p-8 rounded-2xl glow">
							<h2 className="text-2xl font-bold mb-6 gradient-text">
								Send Us a Message
							</h2>

							{isSubmitted ? (
								<div className="bg-dark-lighter border border-blue/20 p-8 rounded-xl text-center">
									<div className="w-16 h-16 mx-auto bg-blue/10 rounded-full flex items-center justify-center mb-6">
										<CheckCircle className="h-8 w-8 text-blue-light" />
									</div>
									<h3 className="text-xl font-semibold mb-4">
										Thank You!
									</h3>
									<p className="text-gray-400 mb-6">
										Your message has been sent successfully.
										We'll get back to you shortly.
									</p>
									<Button
										className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white rounded-full px-6"
										onClick={() => setIsSubmitted(false)}
									>
										Send Another Message
									</Button>
								</div>
							) : (
								<form
									onSubmit={handleSubmit}
									className="space-y-6"
								>
									<div className="space-y-2">
										<Label
											htmlFor="name"
											className="text-gray-300"
										>
											Full Name
										</Label>
										<Input
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											placeholder="John Doe"
											required
											className="bg-dark-lighter border-blue/20 focus:border-blue-light transition-colors"
										/>
									</div>

									<div className="space-y-2">
										<Label
											htmlFor="email"
											className="text-gray-300"
										>
											Email Address
										</Label>
										<Input
											id="email"
											name="email"
											type="email"
											value={formData.email}
											onChange={handleChange}
											placeholder="john@example.com"
											required
											className="bg-dark-lighter border-blue/20 focus:border-blue-light transition-colors"
										/>
									</div>

									<div className="space-y-2">
										<Label
											htmlFor="phone"
											className="text-gray-300"
										>
											Phone Number
										</Label>
										<Input
											id="phone"
											name="phone"
											value={formData.phone}
											onChange={handleChange}
											placeholder="+961 1 234 567"
											className="bg-dark-lighter border-blue/20 focus:border-blue-light transition-colors"
										/>
									</div>

									<div className="space-y-2">
										<Label
											htmlFor="service"
											className="text-gray-300"
										>
											Service Interested In
										</Label>
										<Select
											value={formData.service}
											onValueChange={handleSelectChange}
										>
											<SelectTrigger className="bg-dark-lighter border-blue/20 focus:border-blue-light transition-colors">
												<SelectValue placeholder="Select a service" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="web-design">
													Web Design
												</SelectItem>
												<SelectItem value="web-development">
													Web Development
												</SelectItem>
												<SelectItem value="seo">
													SEO Optimization
												</SelectItem>
												<SelectItem value="e-commerce">
													E-commerce Solutions
												</SelectItem>
												<SelectItem value="mobile-apps">
													Mobile App Development
												</SelectItem>
												<SelectItem value="digital-marketing">
													Digital Marketing
												</SelectItem>
											</SelectContent>
										</Select>
									</div>

									<div className="space-y-2">
										<Label
											htmlFor="message"
											className="text-gray-300"
										>
											Message
										</Label>
										<Textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											placeholder="Tell us about your project..."
											rows={5}
											required
											className="bg-dark-lighter border-blue/20 focus:border-blue-light transition-colors"
										/>
									</div>

									<Button
										type="submit"
										className="w-full bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white rounded-full py-6 h-auto"
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											<span className="flex items-center">
												<span className="animate-spin mr-2">
													<svg
														className="h-5 w-5"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
													>
														<circle
															className="opacity-25"
															cx="12"
															cy="12"
															r="10"
															stroke="currentColor"
															strokeWidth="4"
														></circle>
														<path
															className="opacity-75"
															fill="currentColor"
															d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
														></path>
													</svg>
												</span>
												Sending...
											</span>
										) : (
											<span className="flex items-center">
												Send Message
												<Send className="ml-2 h-5 w-5" />
											</span>
										)}
									</Button>
								</form>
							)}
						</div>

						<div className="space-y-8">
							<div className="gradient-border p-8 rounded-2xl mb-8">
								<h2 className="text-2xl font-bold mb-6 gradient-text">
									Contact Information
								</h2>

								<div className="space-y-8">
									<div className="flex items-start gap-4 group">
										<div className="w-12 h-12 rounded-xl bg-dark-lighter border border-blue/20 flex items-center justify-center flex-shrink-0 group-hover:border-blue-light transition-colors">
											<MapPin className="h-6 w-6 text-blue-light" />
										</div>
										<div>
											<h3 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">
												Our Location
											</h3>
											<p className="text-gray-400 group-hover:text-gray-300 transition-colors">
												123 Tech Street, Digital City
											</p>
											<p className="text-gray-400 group-hover:text-gray-300 transition-colors">
												Lebanon, 12345
											</p>
										</div>
									</div>

									<div className="flex items-start gap-4 group">
										<div className="w-12 h-12 rounded-xl bg-dark-lighter border border-blue/20 flex items-center justify-center flex-shrink-0 group-hover:border-blue-light transition-colors">
											<Phone className="h-6 w-6 text-blue-light" />
										</div>
										<div>
											<h3 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">
												Phone Number
											</h3>
											<p className="text-gray-400 group-hover:text-gray-300 transition-colors">
												+961 1 234 567
											</p>
											<p className="text-gray-400 group-hover:text-gray-300 transition-colors">
												+961 1 234 568
											</p>
										</div>
									</div>

									<div className="flex items-start gap-4 group">
										<div className="w-12 h-12 rounded-xl bg-dark-lighter border border-blue/20 flex items-center justify-center flex-shrink-0 group-hover:border-blue-light transition-colors">
											<Mail className="h-6 w-6 text-blue-light" />
										</div>
										<div>
											<h3 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">
												Email Address
											</h3>
											<p className="text-gray-400 group-hover:text-gray-300 transition-colors">
												info@justechlb.com
											</p>
											<p className="text-gray-400 group-hover:text-gray-300 transition-colors">
												support@justechlb.com
											</p>
										</div>
									</div>

									<div className="flex items-start gap-4 group">
										<div className="w-12 h-12 rounded-xl bg-dark-lighter border border-blue/20 flex items-center justify-center flex-shrink-0 group-hover:border-blue-light transition-colors">
											<Clock className="h-6 w-6 text-blue-light" />
										</div>
										<div>
											<h3 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">
												Working Hours
											</h3>
											<p className="text-gray-400 group-hover:text-gray-300 transition-colors">
												Monday - Friday: 9:00 AM - 6:00
												PM
											</p>
											<p className="text-gray-400 group-hover:text-gray-300 transition-colors">
												Saturday: 10:00 AM - 2:00 PM
											</p>
											<p className="text-gray-400 group-hover:text-gray-300 transition-colors">
												Sunday: Closed
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="gradient-border rounded-2xl overflow-hidden h-[300px] relative">
								<Image
									src="https://images.unsplash.com/photo-1569959220744-ff553533f492?q=80&w=2069&auto=format&fit=crop"
									alt="Map location"
									fill
									className="object-cover opacity-30 z-0"
								/>
								<div className="absolute inset-0 bg-dark-lighter/50 flex items-center justify-center z-10">
									<div className="text-center p-6 relative z-20">
										<h3 className="text-xl font-semibold mb-2">
											Interactive Map
										</h3>
										<p className="text-gray-400 mb-4">
											Find us easily with our interactive
											map
										</p>
										<Button className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white rounded-full">
											View on Google Maps
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative py-16">
				<div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[100px] -z-10"></div>

				<div className="container mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Our <span className="gradient-text">Process</span>
						</h2>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							Here's what happens when you reach out to us for
							your project
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className="gradient-border p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue/10 group card-hover-gradient relative">
							<div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-blue-light to-blue flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue/20 z-10 pt-1">
								1
							</div>
							<div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-indigo/30 animate-pulse"></div>
							<div className="pt-4">
								<div className="w-14 h-14 rounded-full bg-dark-lighter border border-blue/20 flex items-center justify-center mb-6 group-hover:border-blue-light transition-colors">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-7 w-7 text-blue-light"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-semibold mb-3 group-hover:text-white">
									Initial Consultation
								</h3>
								<p className="text-gray-400 group-hover:text-gray-200">
									We'll discuss your project requirements,
									goals, timeline, and budget to understand
									your needs fully.
								</p>
							</div>
						</div>

						<div className="gradient-border p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue/10 group card-hover-gradient relative">
							<div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-indigo to-blue-light flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-indigo/20 z-10 pt-1">
								2
							</div>
							<div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-blue/30 animate-pulse"></div>
							<div className="pt-4">
								<div className="w-14 h-14 rounded-full bg-dark-lighter border border-indigo/20 flex items-center justify-center mb-6 group-hover:border-indigo transition-colors">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-7 w-7 text-indigo"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-semibold mb-3 group-hover:text-white">
									Proposal & Planning
								</h3>
								<p className="text-gray-400 group-hover:text-gray-200">
									We'll create a detailed proposal with
									timeline, deliverables, and pricing based on
									your requirements.
								</p>
							</div>
						</div>

						<div className="gradient-border p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue/10 group card-hover-gradient relative">
							<div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#4ECDC4] to-[#2BAA9F] flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-[#4ECDC4]/20 z-10 pt-1">
								3
							</div>
							<div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[#4ECDC4]/30 animate-pulse"></div>
							<div className="pt-4">
								<div className="w-14 h-14 rounded-full bg-dark-lighter border border-[#4ECDC4]/20 flex items-center justify-center mb-6 group-hover:border-[#4ECDC4] transition-colors">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-7 w-7 text-[#4ECDC4]"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-semibold mb-3 group-hover:text-white">
									Design & Development
								</h3>
								<p className="text-gray-400 group-hover:text-gray-200">
									Our team gets to work, creating your
									solution with regular updates and
									opportunities for feedback.
								</p>
							</div>
						</div>

						<div className="gradient-border p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue/10 group card-hover-gradient relative">
							<div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#E63946] flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-[#FF6B6B]/20 z-10 pt-1">
								4
							</div>
							<div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[#FF6B6B]/30 animate-pulse"></div>
							<div className="pt-4">
								<div className="w-14 h-14 rounded-full bg-dark-lighter border border-[#FF6B6B]/20 flex items-center justify-center mb-6 group-hover:border-[#FF6B6B] transition-colors">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-7 w-7 text-[#FF6B6B]"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-semibold mb-3 group-hover:text-white">
									Launch & Support
								</h3>
								<p className="text-gray-400 group-hover:text-gray-200">
									After final approval, we launch your project
									and provide ongoing support to ensure
									continued success.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
