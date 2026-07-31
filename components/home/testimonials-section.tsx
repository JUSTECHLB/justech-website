"use client";

const marqueeStyles = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .animate-marquee {
    animation: marquee 40s linear infinite;
    width: max-content;
  }
`;

type Testimonial = {
	name: string;
	position: string;
	quote: string;
};

const testimonials: Testimonial[] = [
	{
		name: "Graham Burne",
		position: "@AGS Solutions",
		quote: "JUSTECH provided amazing service to develop and deliver our new business website. They understood our needs very well and translated them into a world class website within a very short time.",
	},
	{
		name: "Abbass Diab",
		position: "@Lebotics",
		quote: "Lebotics recently engaged JUSTECH for web design and development services, and we couldn't be more impressed. Their team demonstrated a remarkable blend of creativity, technical expertise, and professionalism throughout the project. From concept to execution, JUSTECH delivered top-notch results, exceeding our expectations. We highly recommend their services to anyone seeking exceptional web solutions.",
	},
	{
		name: "Francesca Cox",
		position: "@Ensemble Renard",
		quote: "Ensemble Renard Musical Band extends our sincerest gratitude to JUSTECH for their outstanding web design and development services. Their meticulous attention to detail and unwavering commitment to quality resulted in a website that truly reflects our band's essence and vision. JUSTECH's expertise seamlessly brought our musical journey to life online, providing a platform that captivates our audience and enhances our brand presence.",
	},
	{
		name: "Halah Damouri",
		position: "@CloverMindSolutions",
		quote: "CloverMindSolutions had the pleasure of collaborating with JUSTECH for our web design and development needs. JUSTECH's attention to detail and innovative approach resulted in a website that perfectly encapsulates our brand identity. Their team's dedication to delivering top quality was evident at every stage of the project, and we couldn't be happier with the final outcome.",
	},
	{
		name: "Yasmina Khalaf",
		position: "@TheYasDesign",
		quote: "Working with this company has been an amazing experience! They are professional, creative, and incredibly detail-oriented. They truly understood my vision and brought it to life beautifully. The communication was seamless, and the final product exceeded my expectations. I highly recommend their services to anyone looking for a top-notch website!",
	},
];

function initials(name: string) {
	return name
		.split(" ")
		.map((part) => part[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
	return (
		<div className="flex-shrink-0 w-[350px] p-4">
			<div className="bg-dark-lighter p-6 rounded-xl h-full">
				<div className="flex items-center mb-4">
					<div className="w-10 h-10 rounded-full mr-3 flex items-center justify-center bg-gradient-to-br from-blue to-indigo text-white text-sm font-semibold">
						{initials(testimonial.name)}
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
				<p className="text-gray-300">{testimonial.quote}</p>
			</div>
		</div>
	);
}

export default function TestimonialsSection() {
	return (
		<section className="py-24 relative bg-dark overflow-hidden">
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

				<div className="max-w-3xl mx-auto mb-12 gradient-border rounded-2xl p-8 md:p-10 bg-dark-lighter">
					<h3 className="text-2xl md:text-3xl font-bold mb-4">
						Rut Essentials:{" "}
						<span className="gradient-text">
							five projects and counting
						</span>
						.
					</h3>
					<p className="text-lg text-gray-300">
						Five separate builds plus an ongoing maintenance and
						management retainer. The clearest signal we know how to
						give: they keep coming back.
					</p>
				</div>
			</div>

			<div className="w-full overflow-hidden">
				<div className="flex animate-marquee hover:[animation-play-state:paused]">
					{[...testimonials, ...testimonials].map(
						(testimonial, index) => (
							<TestimonialCard
								key={`${testimonial.name}-${index}`}
								testimonial={testimonial}
							/>
						)
					)}
				</div>
			</div>
		</section>
	);
}
