// TODO (needs copy from JUSTECH): one specific line per partner describing what
// they actually do with us. Fill in `description` below. Cards render the name
// alone until real copy lands, rather than repeating a generic line three times.
const partners = [
	{ name: "Astroly", description: "" },
	{ name: "Devancy", description: "" },
	{ name: "CCLab", description: "" },
];

export default function PartnersSection() {
	return (
		<section className="py-24 relative overflow-hidden">
			<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[100px] -z-10"></div>

			<div className="container mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold">
						<span className="gradient-text">Partners</span>
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{partners.map((partner) => (
						<div
							key={partner.name}
							className="gradient-border p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue/10 hover:-translate-y-2 group card-hover-gradient"
						>
							<h3 className="text-2xl font-semibold group-hover:text-white">
								{partner.name}
							</h3>
							{partner.description && (
								<p className="text-gray-400 group-hover:text-gray-200 mt-3">
									{partner.description}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
