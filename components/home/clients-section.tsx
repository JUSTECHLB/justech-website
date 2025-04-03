"use client";

export default function ClientsSection() {
	const clientLogos = [
		{
			image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974&auto=format&fit=crop",
			name: "Techwave",
		},
		{
			image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
			name: "Innovate AI",
		},
		{
			image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
			name: "DataSphere",
		},
		{
			image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop",
			name: "CloudNexus",
		},
		{
			image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
			name: "Quantum Labs",
		},
		{
			image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=2101&auto=format&fit=crop",
			name: "Fusion Tech",
		},
	];

	return (
		<section className="py-20 relative">
			<div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[100px] -z-10"></div>

			<div className="container mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Trusted by{" "}
						<span className="gradient-text">Leading Brands</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-2xl mx-auto">
						We've helped businesses of all sizes achieve their
						digital transformation goals.
					</p>
				</div>

				<div className="relative w-full py-10">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
						{clientLogos.map((client, index) => (
							<div
								key={index}
								className="flex flex-col items-center transform transition-all duration-500 hover:scale-105"
							>
								<div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-blue/20 hover:border-blue/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue/20 group relative mb-3 overflow-hidden">
									<div className="absolute inset-0 bg-gradient-to-br from-blue/10 to-indigo/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									<div
										className="absolute inset-0 bg-center bg-cover bg-no-repeat p-1 transition-transform duration-500 group-hover:scale-110"
										style={{
											backgroundImage: `url(${client.image})`,
										}}
										aria-label={client.name}
									></div>
									<div className="absolute inset-0 bg-dark opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
								</div>
								<p className="text-center text-sm font-medium text-gray-300 group-hover:text-blue-light transition-colors duration-300">
									{client.name}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
