import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/service-card";

export default function ServicesPage() {
	return (
		<main className="min-h-screen bg-[#002333] text-white">
			<section className="container mx-auto py-20 text-center">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4ECDC4] mb-6">
					Our Services
				</h1>
				<p className="text-xl mb-10 max-w-3xl mx-auto">
					We offer a comprehensive range of digital solutions to help
					your business thrive online.
				</p>
			</section>

			<section className="container mx-auto py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<ServiceCard
						title="Web Design"
						description="Custom, responsive web designs that captivate your audience and reflect your brand identity."
						icon="palette"
					/>
					<ServiceCard
						title="Web Development"
						description="Robust, scalable web applications built with cutting-edge technologies for optimal performance."
						icon="code"
					/>
					<ServiceCard
						title="SEO Optimization"
						description="Comprehensive SEO strategies to improve your visibility and drive organic traffic to your website."
						icon="search"
					/>
					<ServiceCard
						title="E-commerce Solutions"
						description="Complete e-commerce platforms with secure payment gateways and inventory management."
						icon="shopping-cart"
					/>
					<ServiceCard
						title="Mobile App Development"
						description="Native and cross-platform mobile applications for iOS and Android devices."
						icon="smartphone"
					/>
					<ServiceCard
						title="Digital Marketing"
						description="Strategic digital marketing campaigns to boost your online presence and reach your target audience."
						icon="trending-up"
					/>
					<ServiceCard
						title="UI/UX Design"
						description="User-centered design solutions that enhance user experience and increase engagement."
						icon="layers"
					/>
					<ServiceCard
						title="Database Management"
						description="Efficient database solutions for secure data storage, retrieval, and management."
						icon="database"
					/>
					<ServiceCard
						title="Analytics & Reporting"
						description="Comprehensive analytics and reporting to track performance and make data-driven decisions."
						icon="bar-chart"
					/>
				</div>
			</section>

			<section className="container mx-auto py-16 bg-[#00314a] rounded-xl p-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
					<div>
						<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-6">
							Web Development
						</h2>
						<p className="text-lg leading-relaxed mb-4">
							Our web development services focus on creating
							robust, scalable, and high-performing websites and
							web applications tailored to your specific business
							needs.
						</p>
						<p className="text-lg leading-relaxed mb-6">
							We use the latest technologies and frameworks to
							ensure your website is not only visually appealing
							but also functionally superior, providing an
							exceptional user experience.
						</p>
						<ul className="space-y-2 mb-6">
							<li className="flex items-center">
								<ChevronRight className="text-[#4ECDC4] mr-2" />
								Responsive Website Development
							</li>
							<li className="flex items-center">
								<ChevronRight className="text-[#4ECDC4] mr-2" />
								Custom Web Application Development
							</li>
							<li className="flex items-center">
								<ChevronRight className="text-[#4ECDC4] mr-2" />
								E-commerce Website Development
							</li>
							<li className="flex items-center">
								<ChevronRight className="text-[#4ECDC4] mr-2" />
								Content Management Systems
							</li>
							<li className="flex items-center">
								<ChevronRight className="text-[#4ECDC4] mr-2" />
								API Development and Integration
							</li>
						</ul>
						<Link href="/services/web-development">
							<Button className="bg-[#4ECDC4] hover:bg-[#3dbdb5] text-white">
								Learn More
							</Button>
						</Link>
					</div>
					<div className="relative">
						<div className="bg-gray-300 rounded-3xl overflow-hidden relative">
							<Image
								src="https://justechlb.com/wp-content/uploads/2023/10/web-development.jpg"
								alt="Web Development"
								width={600}
								height={600}
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="container mx-auto py-16">
				<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-10 text-center">
					Our Development Process
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="bg-[#003a4f] p-6 rounded-xl relative">
						<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[#002333] font-bold text-xl">
							1
						</div>
						<h3 className="text-xl font-semibold mb-2 mt-4">
							Discovery
						</h3>
						<p className="text-gray-300">
							We start by understanding your business, goals, and
							requirements to create a tailored solution.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl relative">
						<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[#002333] font-bold text-xl">
							2
						</div>
						<h3 className="text-xl font-semibold mb-2 mt-4">
							Planning
						</h3>
						<p className="text-gray-300">
							We create a detailed project plan, including
							timelines, milestones, and deliverables.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl relative">
						<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[#002333] font-bold text-xl">
							3
						</div>
						<h3 className="text-xl font-semibold mb-2 mt-4">
							Development
						</h3>
						<p className="text-gray-300">
							Our team of experts develops your solution using the
							latest technologies and best practices.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl relative">
						<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[#002333] font-bold text-xl">
							4
						</div>
						<h3 className="text-xl font-semibold mb-2 mt-4">
							Delivery & Support
						</h3>
						<p className="text-gray-300">
							We deliver your solution and provide ongoing support
							to ensure its success.
						</p>
					</div>
				</div>
			</section>

			<section className="container mx-auto py-16 bg-[#00314a] rounded-xl p-10">
				<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-10 text-center">
					What Our Clients Say
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<p className="text-gray-300 mb-6 italic">
							"JUSTECH transformed our online presence completely.
							Their team delivered a website that exceeded our
							expectations in both design and functionality. The
							SEO optimization has significantly improved our
							search rankings."
						</p>
						<div>
							<p className="font-semibold">John Smith</p>
							<p className="text-sm text-gray-400">
								CEO, Tech Innovations
							</p>
						</div>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<p className="text-gray-300 mb-6 italic">
							"Working with JUSTECH was a game-changer for our
							business. Their e-commerce solution has streamlined
							our online sales process and improved customer
							experience. The team was professional, responsive,
							and delivered on time."
						</p>
						<div>
							<p className="font-semibold">Sarah Johnson</p>
							<p className="text-sm text-gray-400">
								Marketing Director, Global Solutions
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="container mx-auto py-16 text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-6">
					Ready to Start Your Project?
				</h2>
				<p className="text-xl mb-10 max-w-3xl mx-auto">
					Contact us today to discuss your project requirements and
					get a free consultation.
				</p>
				<Link href="/contact">
					<Button className="bg-[#4ECDC4] hover:bg-[#3dbdb5] text-white px-6 py-6 text-lg h-auto">
						Get A Free Consultation
					</Button>
				</Link>
			</section>
		</main>
	);
}
