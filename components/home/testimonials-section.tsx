"use client";

import Image from "next/image";

const marqueeStyles = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  
  @keyframes marquee-reverse {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
  }
  
  .animate-marquee {
    animation: marquee 25s linear infinite;
    min-width: 100%;
  }
  
  .animate-marquee-reverse {
    animation: marquee-reverse 25s linear infinite;
    min-width: 100%;
  }
`;

export default function TestimonialsSection() {
	const testimonials = [
		{
			name: "Yasmina Khalaf",
			position: "@TheYasDesign",
			avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
			quote: "Working with this company has been an amazing experience! They are professional, creative, and incredibly detail-oriented. They truly understood my vision and brought it to life beautifully. The communication was seamless, and the final product exceeded my expectations. I highly recommend their services to anyone looking for a top-notch website!",
		},
		{
			name: "Halah Damouri",
			position: "@CloverMindSolutions",
			avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
			quote: "CloverMindSolutions had the pleasure of collaborating with JUSTECH for our web design and development needs, and the experience was nothing short of exceptional. JUSTECH's attention to detail and innovative approach resulted in a website that perfectly encapsulates our brand identity. Their team's dedication to delivering top quality was evident at every stage of the project, and we couldn't be happier with the final outcome. Without a doubt, JUSTECH has set a new standard for excellence in the realm of web design and development services.",
		},
		{
			name: "Abbass Diab",
			position: "@Lebotics",
			avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
			quote: "Lebotics recently engaged JUSTECH for web design and development services, and we couldn't be more impressed. Their team demonstrated a remarkable blend of creativity, technical expertise, and professionalism throughout the project. From concept to execution, JUSTECH delivered top-notch results, exceeding our expectations. We highly recommend their services to anyone seeking exceptional web solutions.",
		},
		{
			name: "Francesca Cox",
			position: "@Ensemble Renard",
			avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1970&auto=format&fit=crop",
			quote: "Ensemble Renard Musical Band extends our sincerest gratitude to JUSTECH for their outstanding web design and development services. Their meticulous attention to detail and unwavering commitment to quality resulted in a website that truly reflects our band's essence and vision. JUSTECH's expertise seamlessly brought our musical journey to life online, providing a platform that captivates our audience and enhances our brand presence. Without a doubt, JUSTECH has proven themselves as masters of their craft, delivering nothing short of excellence in every aspect of our collaboration.",
		},
		{
			name: "Graham Burne",
			position: "@AGS Solutions",
			avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
			quote: "<span class=text-blue-light>JUSTECH</span> provided amazing service to develop and deliver our new business website. They understood our needs very well and translated them into a world class website within a very short time.",
		},
	];

	const testimonials2 = [
		{
			name: "Olivia Blackwood",
			position: "@olivia1992",
			avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
			quote: "<span class='text-blue-light'>JUSTECH</span> is not messing around with its library game.",
		},
		{
			name: "Thomas Wright",
			position: "@tomwright",
			avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
			quote: "The workflow automation tools <span class='text-blue-light'>JUSTECH</span> implemented have increased our production efficiency by 35%. Highly recommended!",
		},
		{
			name: "Jennifer Lee",
			position: "@jenlee",
			avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
			quote: "The SEO optimization services provided by <span class='text-blue-light'>JUSTECH</span> have significantly improved our search rankings and online visibility.",
		},
		{
			name: "Robert Taylor",
			position: "@robtaylor",
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
			quote: "Their custom software solution has automated our reporting process, saving us countless hours each month.",
		},
		{
			name: "Amanda Clark",
			position: "@amandac",
			avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
			quote: "Working with <span class='text-blue-light'>JUSTECH</span> was a pleasure from start to finish. They delivered our learning platform on time and within budget.",
		},
	];

	return (
		<section className="py-24 relative bg-dark">
			<style jsx global>
				{marqueeStyles}
			</style>
			<div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[100px] -z-10"></div>

			<div className="container mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						What Our{" "}
						<span className="gradient-text">Clients Say</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-2xl mx-auto">
						Don't just take our word for it. Here's what our clients
						have to say about working with us.
					</p>
				</div>

				<div className="space-y-8">
					<div className="w-full overflow-hidden">
						<div className="flex animate-marquee hover:[animation-play-state:paused]">
							{testimonials.map((testimonial, index) => (
								<div
									key={index}
									className="flex-shrink-0 w-[350px] p-4"
								>
									<div className="bg-dark-lighter p-6 rounded-xl h-full">
										<div className="flex items-center mb-4">
											<div className="w-10 h-10 rounded-full overflow-hidden mr-3">
												<Image
													src={testimonial.avatar}
													alt={testimonial.name}
													width={40}
													height={40}
													className="object-cover w-full h-full"
												/>
											</div>
											<div>
												<p className="font-medium text-white">
													{testimonial.name}
												</p>
												<p className="text-sm text-gray-400">
													{testimonial.position}
												</p>
											</div>
										</div>
										<p
											className="text-gray-300"
											dangerouslySetInnerHTML={{
												__html: testimonial.quote,
											}}
										></p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="w-full overflow-hidden">
						<div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
							{testimonials2.map((testimonial, index) => (
								<div
									key={index}
									className="flex-shrink-0 w-[350px] p-4"
								>
									<div className="bg-dark-lighter p-6 rounded-xl h-full">
										<div className="flex items-center mb-4">
											<div className="w-10 h-10 rounded-full overflow-hidden mr-3">
												<Image
													src={testimonial.avatar}
													alt={testimonial.name}
													width={40}
													height={40}
													className="object-cover w-full h-full"
												/>
											</div>
											<div>
												<p className="font-medium text-white">
													{testimonial.name}
												</p>
												<p className="text-sm text-gray-400">
													{testimonial.position}
												</p>
											</div>
										</div>
										<p
											className="text-gray-300"
											dangerouslySetInnerHTML={{
												__html: testimonial.quote,
											}}
										></p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
