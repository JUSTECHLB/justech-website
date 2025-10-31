import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function WebDesignPage() {
	return (
		<main className="min-h-screen bg-[#002333] text-white">
			<section className="container mx-auto py-20 text-center">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4ECDC4] mb-6">
					Web Design
				</h1>
				<p className="text-xl mb-10 max-w-3xl mx-auto">
					Custom, responsive web designs that captivate your audience
					and reflect your brand identity.
				</p>
			</section>

			<section className="container mx-auto py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
					<div>
						<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-6">
							Stunning Web Design Solutions
						</h2>
						<p className="text-lg leading-relaxed mb-4">
							At JUSTECH, we believe that great web design is the
							perfect blend of aesthetics and functionality. Our
							team of skilled designers creates visually appealing
							websites that not only look great but also deliver
							an exceptional user experience.
						</p>
						<p className="text-lg leading-relaxed mb-4">
							We focus on creating responsive designs that work
							seamlessly across all devices, ensuring your website
							looks and performs perfectly whether viewed on a
							desktop, tablet, or smartphone.
						</p>
						<p className="text-lg leading-relaxed">
							Our design process is collaborative, and we work
							closely with you to understand your brand, goals,
							and target audience to create a website that truly
							represents your business and connects with your
							customers.
						</p>
					</div>
					<div className="relative">
						<div className="bg-gray-300 rounded-3xl overflow-hidden relative">
							<Image
								src="https://justechlb.com/wp-content/uploads/2023/10/web-design.jpg"
								alt="Web Design"
								width={600}
								height={600}
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="container mx-auto py-16 bg-[#00314a] rounded-xl p-10">
				<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-10 text-center">
					Our Web Design Features
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4">
							Responsive Design
						</h3>
						<p className="text-gray-300">
							Our websites adapt seamlessly to all screen sizes,
							ensuring an optimal viewing experience across all
							devices.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4">
							User-Centered Design
						</h3>
						<p className="text-gray-300">
							We create intuitive interfaces that enhance user
							experience and make navigation effortless.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4">
							Brand Consistency
						</h3>
						<p className="text-gray-300">
							We ensure your website reflects your brand identity
							through consistent use of colors, typography, and
							imagery.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4">
							SEO-Friendly Structure
						</h3>
						<p className="text-gray-300">
							Our designs are built with search engine
							optimization in mind to improve your visibility
							online.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4">
							Fast Loading Times
						</h3>
						<p className="text-gray-300">
							We optimize images and code to ensure your website
							loads quickly, reducing bounce rates.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4">
							Accessibility
						</h3>
						<p className="text-gray-300">
							We follow accessibility best practices to ensure
							your website is usable by people of all abilities.
						</p>
					</div>
				</div>
			</section>

			<section className="container mx-auto py-16">
				<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-10 text-center">
					Our Design Process
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
							We learn about your business, goals, target
							audience, and competitors to inform our design
							strategy.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl relative">
						<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[#002333] font-bold text-xl">
							2
						</div>
						<h3 className="text-xl font-semibold mb-2 mt-4">
							Wireframing
						</h3>
						<p className="text-gray-300">
							We create wireframes to establish the layout and
							structure of your website before adding visual
							elements.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl relative">
						<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[#002333] font-bold text-xl">
							3
						</div>
						<h3 className="text-xl font-semibold mb-2 mt-4">
							Design
						</h3>
						<p className="text-gray-300">
							We develop the visual design, incorporating your
							brand elements and creating a cohesive look and
							feel.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl relative">
						<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[#002333] font-bold text-xl">
							4
						</div>
						<h3 className="text-xl font-semibold mb-2 mt-4">
							Refinement
						</h3>
						<p className="text-gray-300">
							We gather your feedback and make revisions to ensure
							the design meets your expectations.
						</p>
					</div>
				</div>
			</section>

			<section className="container mx-auto py-16 bg-[#00314a] rounded-xl p-10">
				<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-10 text-center">
					Web Design Portfolio
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[1, 2, 3].map((item) => (
						<div
							key={item}
							className="bg-[#003a4f] rounded-xl overflow-hidden group"
						>
							<div className="relative h-64">
								<Image
									src={`https://justechlb.com/wp-content/uploads/2023/10/web-design-${item}.jpg`}
									alt={`Web Design Project ${item}`}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">
									Design Project {item}
								</h3>
								<p className="text-gray-300 mb-4">
									UI/UX Design, Branding
								</p>
								<Link href={`/portfolio/web-design-${item}`}>
									<Button
										variant="link"
										className="text-[#4ECDC4] p-0 hover:text-[#3dbdb5]"
									>
										View Project
									</Button>
								</Link>
							</div>
						</div>
					))}
				</div>
				<div className="text-center mt-10">
					<Link href="/portfolio">
						<Button className="bg-[#4ECDC4] hover:bg-[#3dbdb5] text-white">
							View More Projects
						</Button>
					</Link>
				</div>
			</section>

			<section className="container mx-auto py-16">
				<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-10 text-center">
					Benefits of Professional Web Design
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="flex items-start gap-4">
						<CheckCircle className="w-6 h-6 text-[#4ECDC4] mt-1" />
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Enhanced Brand Credibility
							</h3>
							<p className="text-gray-300">
								A professionally designed website builds trust
								and credibility with your audience, making them
								more likely to engage with your business.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<CheckCircle className="w-6 h-6 text-[#4ECDC4] mt-1" />
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Improved User Experience
							</h3>
							<p className="text-gray-300">
								Intuitive navigation and thoughtful design
								elements enhance user experience, leading to
								longer visit durations and higher conversion
								rates.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<CheckCircle className="w-6 h-6 text-[#4ECDC4] mt-1" />
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Mobile Optimization
							</h3>
							<p className="text-gray-300">
								With more users accessing websites on mobile
								devices, responsive design ensures your site
								performs well across all platforms.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<CheckCircle className="w-6 h-6 text-[#4ECDC4] mt-1" />
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Better Search Engine Rankings
							</h3>
							<p className="text-gray-300">
								Well-designed websites with clean code and
								optimized structure tend to rank higher in
								search engine results.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="container mx-auto py-16 text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-6">
					Ready to Transform Your Website?
				</h2>
				<p className="text-xl mb-10 max-w-3xl mx-auto">
					Contact us today to discuss your web design project and get
					a free consultation.
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
