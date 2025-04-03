import Image from "next/image";
import Link from "next/link";
import {
	CheckCircle,
	Code,
	Database,
	Server,
	Globe,
	Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function WebDevelopmentPage() {
	return (
		<main className="min-h-screen bg-[#002333] text-white">
			<section className="container mx-auto py-20 text-center">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4ECDC4] mb-6">
					Web Development
				</h1>
				<p className="text-xl mb-10 max-w-3xl mx-auto">
					Robust, scalable web applications built with cutting-edge
					technologies for optimal performance.
				</p>
			</section>

			<section className="container mx-auto py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
					<div>
						<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-6">
							Custom Web Development Solutions
						</h2>
						<p className="text-lg leading-relaxed mb-4">
							At JUSTECH, we specialize in developing custom web
							applications that are tailored to your specific
							business needs. Our team of experienced developers
							uses the latest technologies and best practices to
							create robust, scalable, and high-performing
							websites.
						</p>
						<p className="text-lg leading-relaxed mb-4">
							Whether you need a simple informational website, a
							complex e-commerce platform, or a custom web
							application, we have the expertise to bring your
							vision to life.
						</p>
						<p className="text-lg leading-relaxed">
							Our development process is transparent and
							collaborative, ensuring that you are involved at
							every stage and that the final product meets your
							expectations and business objectives.
						</p>
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

			<section className="container mx-auto py-16 bg-[#00314a] rounded-xl p-10">
				<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-10 text-center">
					Technologies We Use
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<Code className="w-12 h-12 text-[#4ECDC4] mb-4" />
						<h3 className="text-xl font-semibold mb-4">
							Frontend Development
						</h3>
						<ul className="space-y-2 text-gray-300">
							<li>React.js</li>
							<li>Vue.js</li>
							<li>Angular</li>
							<li>Next.js</li>
							<li>HTML5/CSS3</li>
							<li>JavaScript/TypeScript</li>
						</ul>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<Server className="w-12 h-12 text-[#4ECDC4] mb-4" />
						<h3 className="text-xl font-semibold mb-4">
							Backend Development
						</h3>
						<ul className="space-y-2 text-gray-300">
							<li>Node.js</li>
							<li>PHP/Laravel</li>
							<li>Python/Django</li>
							<li>Ruby on Rails</li>
							<li>ASP.NET</li>
							<li>Java Spring</li>
						</ul>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<Database className="w-12 h-12 text-[#4ECDC4] mb-4" />
						<h3 className="text-xl font-semibold mb-4">
							Database Technologies
						</h3>
						<ul className="space-y-2 text-gray-300">
							<li>MySQL</li>
							<li>PostgreSQL</li>
							<li>MongoDB</li>
							<li>Firebase</li>
							<li>Redis</li>
							<li>SQL Server</li>
						</ul>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<Globe className="w-12 h-12 text-[#4ECDC4] mb-4" />
						<h3 className="text-xl font-semibold mb-4">
							CMS Platforms
						</h3>
						<ul className="space-y-2 text-gray-300">
							<li>WordPress</li>
							<li>Drupal</li>
							<li>Joomla</li>
							<li>Shopify</li>
							<li>Magento</li>
							<li>WooCommerce</li>
						</ul>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<Shield className="w-12 h-12 text-[#4ECDC4] mb-4" />
						<h3 className="text-xl font-semibold mb-4">
							DevOps & Deployment
						</h3>
						<ul className="space-y-2 text-gray-300">
							<li>AWS</li>
							<li>Google Cloud</li>
							<li>Microsoft Azure</li>
							<li>Docker</li>
							<li>Kubernetes</li>
							<li>CI/CD Pipelines</li>
						</ul>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<Code className="w-12 h-12 text-[#4ECDC4] mb-4" />
						<h3 className="text-xl font-semibold mb-4">
							API Development
						</h3>
						<ul className="space-y-2 text-gray-300">
							<li>RESTful APIs</li>
							<li>GraphQL</li>
							<li>WebSockets</li>
							<li>Third-party API Integration</li>
							<li>Payment Gateway Integration</li>
							<li>OAuth Authentication</li>
						</ul>
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
							Requirements Analysis
						</h3>
						<p className="text-gray-300">
							We work with you to understand your business needs,
							target audience, and project goals to define clear
							requirements.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl relative">
						<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[#002333] font-bold text-xl">
							2
						</div>
						<h3 className="text-xl font-semibold mb-2 mt-4">
							Planning & Architecture
						</h3>
						<p className="text-gray-300">
							We create a detailed project plan and design the
							system architecture to ensure scalability and
							performance.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl relative">
						<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[#002333] font-bold text-xl">
							3
						</div>
						<h3 className="text-xl font-semibold mb-2 mt-4">
							Development & Testing
						</h3>
						<p className="text-gray-300">
							Our developers write clean, efficient code while our
							QA team conducts thorough testing to ensure quality.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl relative">
						<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[#002333] font-bold text-xl">
							4
						</div>
						<h3 className="text-xl font-semibold mb-2 mt-4">
							Deployment & Support
						</h3>
						<p className="text-gray-300">
							We deploy your application and provide ongoing
							maintenance and support to ensure optimal
							performance.
						</p>
					</div>
				</div>
			</section>

			<section className="container mx-auto py-16 bg-[#00314a] rounded-xl p-10">
				<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-10 text-center">
					Web Development Portfolio
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[1, 2, 3].map((item) => (
						<div
							key={item}
							className="bg-[#003a4f] rounded-xl overflow-hidden group"
						>
							<div className="relative h-64">
								<Image
									src={`https://justechlb.com/wp-content/uploads/2023/10/web-dev-${item}.jpg`}
									alt={`Web Development Project ${item}`}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">
									Development Project {item}
								</h3>
								<p className="text-gray-300 mb-4">
									Web Application, API Integration
								</p>
								<Link href={`/portfolio/web-dev-${item}`}>
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
					Benefits of Custom Web Development
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="flex items-start gap-4">
						<CheckCircle className="w-6 h-6 text-[#4ECDC4] mt-1" />
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Tailored to Your Needs
							</h3>
							<p className="text-gray-300">
								Custom web applications are built specifically
								for your business, addressing your unique
								challenges and requirements.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<CheckCircle className="w-6 h-6 text-[#4ECDC4] mt-1" />
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Scalability
							</h3>
							<p className="text-gray-300">
								Custom solutions can grow with your business,
								allowing for easy expansion and adaptation to
								changing needs.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<CheckCircle className="w-6 h-6 text-[#4ECDC4] mt-1" />
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Integration Capabilities
							</h3>
							<p className="text-gray-300">
								Custom applications can be integrated with your
								existing systems and third-party services for
								seamless operations.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<CheckCircle className="w-6 h-6 text-[#4ECDC4] mt-1" />
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Enhanced Security
							</h3>
							<p className="text-gray-300">
								Custom development allows for implementing
								robust security measures tailored to your
								specific needs.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<CheckCircle className="w-6 h-6 text-[#4ECDC4] mt-1" />
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Competitive Advantage
							</h3>
							<p className="text-gray-300">
								A unique web application can set you apart from
								competitors who use generic, off-the-shelf
								solutions.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<CheckCircle className="w-6 h-6 text-[#4ECDC4] mt-1" />
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Long-term Cost Efficiency
							</h3>
							<p className="text-gray-300">
								While initial investment may be higher, custom
								solutions often prove more cost-effective in the
								long run.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="container mx-auto py-16 text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-6">
					Ready to Build Your Custom Web Application?
				</h2>
				<p className="text-xl mb-10 max-w-3xl mx-auto">
					Contact us today to discuss your web development project and
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
