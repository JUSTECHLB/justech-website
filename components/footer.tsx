import Link from "next/link";
import {
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Mail,
	Phone,
	MapPin,
	ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
	return (
		<footer className="bg-dark-light text-white pt-24 pb-8">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
					<div>
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Ready to{" "}
							<span className="gradient-text">Elevate</span> Your
							Digital Presence?
						</h2>
						<p className="text-gray-400 text-lg mb-8 max-w-lg">
							Let's discuss how we can help your business grow
							with our digital solutions.
						</p>
						<Link href="/contact">
							<Button className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white rounded-full px-6">
								Get In Touch
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h3 className="text-lg font-semibold mb-6 gradient-text">
								Contact Us
							</h3>
							<ul className="space-y-4">
								<li className="flex items-start">
									<MapPin
										size={20}
										className="mr-3 text-blue-light mt-1"
									/>
									<span className="text-gray-300">
										123 Tech Street, Digital City
										<br />
										Lebanon, 12345
									</span>
								</li>
								<li className="flex items-center">
									<Phone
										size={20}
										className="mr-3 text-blue-light"
									/>
									<span className="text-gray-300">
										+961 1 234 567
									</span>
								</li>
								<li className="flex items-center">
									<Mail
										size={20}
										className="mr-3 text-blue-light"
									/>
									<span className="text-gray-300">
										info@justechlb.com
									</span>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-lg font-semibold mb-6 gradient-text">
								Follow Us
							</h3>
							<div className="flex space-x-4 mb-8">
								<Link
									href="https://facebook.com"
									className="w-10 h-10 rounded-full bg-dark-lighter border border-blue/20 flex items-center justify-center hover:border-blue-light transition-colors"
								>
									<Facebook
										size={18}
										className="text-blue-light"
									/>
								</Link>
								<Link
									href="https://twitter.com"
									className="w-10 h-10 rounded-full bg-dark-lighter border border-blue/20 flex items-center justify-center hover:border-blue-light transition-colors"
								>
									<Twitter
										size={18}
										className="text-blue-light"
									/>
								</Link>
								<Link
									href="https://instagram.com"
									className="w-10 h-10 rounded-full bg-dark-lighter border border-blue/20 flex items-center justify-center hover:border-blue-light transition-colors"
								>
									<Instagram
										size={18}
										className="text-blue-light"
									/>
								</Link>
								<Link
									href="https://linkedin.com"
									className="w-10 h-10 rounded-full bg-dark-lighter border border-blue/20 flex items-center justify-center hover:border-blue-light transition-colors"
								>
									<Linkedin
										size={18}
										className="text-blue-light"
									/>
								</Link>
							</div>

							<h3 className="text-lg font-semibold mb-4 gradient-text">
								Newsletter
							</h3>
							<p className="text-gray-400 text-sm mb-4">
								Subscribe to our newsletter for updates
							</p>
							<div className="flex">
								<input
									type="email"
									placeholder="Your email"
									className="bg-dark border border-blue/20 rounded-l-full px-4 py-2 w-full focus:outline-none focus:border-blue-light"
								/>
								<Button className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white rounded-r-full">
									<ArrowRight className="h-4 w-4" />
								</Button>
							</div>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-blue/10">
					<div>
						<Link href="/" className="flex items-center mb-4">
							<div className="relative w-10 h-10 mr-2">
								<div className="absolute inset-0 bg-gradient-to-r from-blue-light to-indigo rounded-full opacity-70 blur-sm"></div>
								<div className="relative w-full h-full flex items-center justify-center bg-dark-light rounded-full border border-blue/20">
									<span className="text-xl font-bold gradient-text">
										J
									</span>
								</div>
							</div>
							<span className="text-xl font-bold">JUSTECH</span>
						</Link>
						<p className="text-gray-400 text-sm">
							JUSTECH is a leading software development agency
							specializing in website design, development, and SEO
							optimization.
						</p>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Services</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/revenue-scaling"
									className="text-gray-400 hover:text-blue-light transition-colors"
								>
									Revenue Scaling
								</Link>
							</li>
							<li>
								<Link
									href="/business-operation-optimization"
									className="text-gray-400 hover:text-blue-light transition-colors"
								>
									Business Operation Optimization
								</Link>
							</li>
							<li>
								<Link
									href="/tech-transformation"
									className="text-gray-400 hover:text-blue-light transition-colors"
								>
									Tech Transformation
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Company</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/about"
									className="text-gray-400 hover:text-blue-light transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-gray-400 hover:text-blue-light transition-colors"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									href="/privacy-policy"
									className="text-gray-400 hover:text-blue-light transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/terms-of-service"
									className="text-gray-400 hover:text-blue-light transition-colors"
								>
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-blue/10 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400 text-sm mb-4 md:mb-0">
							© {new Date().getFullYear()} JUSTECH. All rights
							reserved.
						</p>
						<p className="text-gray-400 text-sm">
							Designed with{" "}
							<span className="text-blue-light">♥</span> by
							JUSTECH Team
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
