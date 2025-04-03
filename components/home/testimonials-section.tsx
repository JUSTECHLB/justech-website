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
			name: "Denise Flynn",
			position: "@denfly",
			avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
			quote: "Using <span class='text-blue-light'>JUSTECH</span>'s sleek UI. It's like a dark mode playground.",
		},
		{
			name: "Felix B.",
			position: "@felixb",
			avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
			quote: "Digging into <span class='text-blue-light'>JUSTECH</span>. Those shadows are giving me serious design envy.",
		},
		{
			name: "Fabrizio Fernandez",
			position: "@fab304",
			avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
			quote: "Playing around with <span class='text-blue-light'>JUSTECH</span> suddenly made me feeling inspired to launch that side project.",
		},
		{
			name: "Esme Rothschild",
			position: "@EsmeRothArt",
			avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1970&auto=format&fit=crop",
			quote: "<span class='text-blue-light'>JUSTECH</span> is slick. That globe graphic though. Making me feel like I'm building websites for a sci-fi movie.",
		},
		{
			name: "Kai Nakamura",
			position: "@KaiNakWaves",
			avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
			quote: "Just made my first website with <span class='text-blue-light'>JUSTECH</span>. Its flexibility is speaking my language. No drama, just seamless integration.",
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
