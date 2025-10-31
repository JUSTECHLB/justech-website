import Image from "next/image";
import Link from "next/link";
import {
	CheckCircle,
	Search,
	BarChart,
	Globe,
	TrendingUp,
	Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function SEOPage() {
	return (
		<main className="min-h-screen bg-[#002333] text-white">
			<section className="container mx-auto py-20 text-center">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4ECDC4] mb-6">
					SEO Optimization
				</h1>
				<p className="text-xl mb-10 max-w-3xl mx-auto">
					Comprehensive SEO strategies to improve your visibility and
					drive organic traffic to your website.
				</p>
			</section>

			<section className="container mx-auto py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
					<div>
						<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-6">
							Boost Your Online Visibility
						</h2>
						<p className="text-lg leading-relaxed mb-4">
							At JUSTECH, we understand that having a beautiful
							website is only half the battle. For your business
							to succeed online, your target audience needs to
							find you. That's where our SEO optimization services
							come in.
						</p>
						<p className="text-lg leading-relaxed mb-4">
							We develop comprehensive SEO strategies tailored to
							your business goals, industry, and target audience.
							Our approach combines technical SEO, on-page
							optimization, content strategy, and off-page
							techniques to improve your search engine rankings
							and drive organic traffic to your website.
						</p>
						<p className="text-lg leading-relaxed">
							Our SEO experts stay up-to-date with the latest
							algorithm changes and industry trends to ensure that
							your website maintains and improves its position in
							search results over time.
						</p>
					</div>
					<div className="relative">
						<div className="bg-gray-300 rounded-3xl overflow-hidden relative">
							<Image
								src="https://justechlb.com/wp-content/uploads/2023/10/seo-optimization.jpg"
								alt="SEO Optimization"
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
					Our SEO Services
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<Search className="w-12 h-12 text-[#4ECDC4] mb-4" />
						<h3 className="text-xl font-semibold mb-4">
							Keyword Research & Analysis
						</h3>
						<p className="text-gray-300">
							We identify the most relevant and valuable keywords
							for your business to target, analyzing search
							volume, competition, and user intent.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<Globe className="w-12 h-12 text-[#4ECDC4] mb-4" />
						<h3 className="text-xl font-semibold mb-4">
							On-Page SEO
						</h3>
						<p className="text-gray-300">
							We optimize your website's content, meta tags,
							headings, images, and internal linking structure to
							improve relevance and user experience.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<TrendingUp className="w-12 h-12 text-[#4ECDC4] mb-4" />
						<h3 className="text-xl font-semibold mb-4">
							Technical SEO
						</h3>
						<p className="text-gray-300">
							We address technical issues that affect your
							website's performance, including site speed,
							mobile-friendliness, indexing, and crawlability.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<Users className="w-12 h-12 text-[#4ECDC4] mb-4" />
						<h3 className="text-xl font-semibold mb-4">
							Link Building
						</h3>
						<p className="text-gray-300">
							We develop strategies to acquire high-quality
							backlinks from reputable websites, improving your
							domain authority and search rankings.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<BarChart className="w-12 h-12 text-[#4ECDC4] mb-4" />
						<h3 className="text-xl font-semibold mb-4">
							SEO Audit & Analysis
						</h3>
						<p className="text-gray-300">
							We conduct comprehensive audits to identify issues
							and opportunities for improvement in your website's
							SEO performance.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<TrendingUp className="w-12 h-12 text-[#4ECDC4] mb-4" />
						<h3 className="text-xl font-semibold mb-4">
							Local SEO
						</h3>
						<p className="text-gray-300">
							We optimize your online presence for local searches,
							including Google My Business optimization and local
							citation building.
						</p>
					</div>
				</div>
			</section>

			<section className="container mx-auto py-16">
				<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-10 text-center">
					Our SEO Process
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="bg-[#003a4f] p-6 rounded-xl relative">
						<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[#002333] font-bold text-xl">
							1
						</div>
						<h3 className="text-xl font-semibold mb-2 mt-4">
							Discovery & Audit
						</h3>
						<p className="text-gray-300">
							We analyze your current SEO performance, identify
							issues, and understand your business goals and
							target audience.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl relative">
						<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[#002333] font-bold text-xl">
							2
						</div>
						<h3 className="text-xl font-semibold mb-2 mt-4">
							Strategy Development
						</h3>
						<p className="text-gray-300">
							We create a customized SEO strategy based on our
							findings, focusing on the most impactful
							improvements.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl relative">
						<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[#002333] font-bold text-xl">
							3
						</div>
						<h3 className="text-xl font-semibold mb-2 mt-4">
							Implementation
						</h3>
						<p className="text-gray-300">
							We execute the strategy, making on-page and
							technical optimizations, creating content, and
							building quality backlinks.
						</p>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl relative">
						<div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[#002333] font-bold text-xl">
							4
						</div>
						<h3 className="text-xl font-semibold mb-2 mt-4">
							Monitoring & Refinement
						</h3>
						<p className="text-gray-300">
							We track performance, analyze results, and
							continuously refine our approach to maximize your
							SEO success.
						</p>
					</div>
				</div>
			</section>

			<section className="container mx-auto py-16 bg-[#00314a] rounded-xl p-10">
				<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-10 text-center">
					SEO Success Stories
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4">
							E-commerce Website
						</h3>
						<p className="text-gray-300 mb-4">
							We helped an e-commerce client increase their
							organic traffic by 150% and improve their conversion
							rate by 35% through comprehensive SEO optimization.
						</p>
						<div className="mb-4">
							<h4 className="font-semibold mb-2">Results:</h4>
							<ul className="list-disc list-inside space-y-1 text-gray-300">
								<li>150% increase in organic traffic</li>
								<li>35% improvement in conversion rate</li>
								<li>
									First page rankings for 75+ target keywords
								</li>
								<li>
									200% increase in revenue from organic search
								</li>
							</ul>
						</div>
						<Link href="/portfolio/seo-case-study-1">
							<Button
								variant="link"
								className="text-[#4ECDC4] p-0 hover:text-[#3dbdb5]"
							>
								View Case Study
							</Button>
						</Link>
					</div>
					<div className="bg-[#003a4f] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4">
							Local Service Business
						</h3>
						<p className="text-gray-300 mb-4">
							Our local SEO strategy helped a service business
							dominate local search results, leading to a 120%
							increase in leads and a 45% increase in revenue.
						</p>
						<div className="mb-4">
							<h4 className="font-semibold mb-2">Results:</h4>
							<ul className="list-disc list-inside space-y-1 text-gray-300">
								<li>120% increase in qualified leads</li>
								<li>
									Top 3 rankings for all local service
									keywords
								</li>
								<li>45% increase in revenue</li>
								<li>
									300% increase in Google My Business
									visibility
								</li>
							</ul>
						</div>
						<Link href="/portfolio/seo-case-study-2">
							<Button
								variant="link"
								className="text-[#4ECDC4] p-0 hover:text-[#3dbdb5]"
							>
								View Case Study
							</Button>
						</Link>
					</div>
				</div>
			</section>

			<section className="container mx-auto py-16">
				<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-10 text-center">
					Benefits of SEO Optimization
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="flex items-start gap-4">
						<CheckCircle className="w-6 h-6 text-[#4ECDC4] mt-1" />
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Increased Organic Traffic
							</h3>
							<p className="text-gray-300">
								Higher search engine rankings lead to more
								visibility and increased organic traffic to your
								website.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<CheckCircle className="w-6 h-6 text-[#4ECDC4] mt-1" />
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Better Quality Leads
							</h3>
							<p className="text-gray-300">
								SEO attracts users who are actively searching
								for your products or services, resulting in
								higher-quality leads.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<CheckCircle className="w-6 h-6 text-[#4ECDC4] mt-1" />
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Cost-Effective Marketing
							</h3>
							<p className="text-gray-300">
								SEO provides a higher ROI compared to many other
								marketing channels, especially in the long term.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<CheckCircle className="w-6 h-6 text-[#4ECDC4] mt-1" />
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Enhanced User Experience
							</h3>
							<p className="text-gray-300">
								SEO improvements often lead to a better user
								experience, which can increase engagement and
								conversions.
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
								Effective SEO can help you outrank competitors
								and establish your business as an industry
								leader.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<CheckCircle className="w-6 h-6 text-[#4ECDC4] mt-1" />
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Long-Term Results
							</h3>
							<p className="text-gray-300">
								While SEO takes time to show results, the
								benefits are long-lasting and continue to
								compound over time.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="container mx-auto py-16 text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-[#4ECDC4] mb-6">
					Ready to Improve Your Search Rankings?
				</h2>
				<p className="text-xl mb-10 max-w-3xl mx-auto">
					Contact us today to discuss your SEO needs and get a free
					website audit.
				</p>
				<Link href="/contact">
					<Button className="bg-[#4ECDC4] hover:bg-[#3dbdb5] text-white px-6 py-6 text-lg h-auto">
						Get A Free SEO Audit
					</Button>
				</Link>
			</section>
		</main>
	);
}
