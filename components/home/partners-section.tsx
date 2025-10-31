import Image from "next/image";

export default function PartnersSection() {
	const partners = [
		{
			name: "Astroly",
			image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
		},
		{
			name: "Devancy",
			image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
		},
		{
			name: "CCLab",
			image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
		},
	];

	return (
		<section className="py-24 relative">
			<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[100px] -z-10"></div>

			<div className="container mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Our <span className="gradient-text">Partners</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-2xl mx-auto">
						We collaborate with industry leaders to deliver
						comprehensive solutions for our clients.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{partners.map((partner, index) => (
						<div
							key={index}
							className="gradient-border p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2 group card-hover-gradient"
						>
							<div className="w-full h-48 mx-auto mb-6 relative rounded-xl overflow-hidden">
								<Image
									src={partner.image}
									alt={partner.name}
									fill
									className="object-cover"
								/>
							</div>
							<h3 className="text-2xl font-semibold mb-3 group-hover:text-white">
								{partner.name}
							</h3>
							<p className="text-gray-400 group-hover:text-gray-200">
								Strategic partner providing specialized
								expertise and complementary services.
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
