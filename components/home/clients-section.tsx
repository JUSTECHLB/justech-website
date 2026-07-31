export default function ClientsSection() {
	const clients = [
		"Rut Essentials",
		"AGS Solutions",
		"Lebotics",
		"Ensemble Renard",
		"Clover Mind Solutions",
		"The Yas Design",
	];

	return (
		<section className="py-20 relative overflow-hidden">
			<div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[100px] -z-10"></div>

			<div className="container mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-5xl font-bold">
						<span className="gradient-text">Clients</span>
					</h2>
				</div>

				<div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-16">
					{clients.map((client) => (
						<span
							key={client}
							className="text-lg md:text-xl font-medium text-gray-300 tracking-wide"
						>
							{client}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
