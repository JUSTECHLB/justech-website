const buildWith = [
	"Next.js",
	"React",
	"Angular",
	"Node.js",
	"Python (FastAPI, Django)",
	"Go",
	".NET",
	"Laravel",
	"PostgreSQL",
	"MongoDB",
	"Redis",
	"Docker",
	"AWS",
	"PyTorch",
];

const platforms = ["Odoo", "Shopify", "WordPress"];

export default function TechnologiesSection() {
	return (
		<section className="py-24 relative bg-dark-lighter overflow-hidden">
			<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[100px] -z-10"></div>

			<div className="container mx-auto">
				<div className="text-center mb-16 max-w-3xl mx-auto">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						We're not tied to a{" "}
						<span className="gradient-text">stack</span>
					</h2>
					<p className="text-xl text-gray-400">
						We pick the language and architecture that fit the
						problem, the client's team, and the ten-year cost, not
						the one we happen to know.
					</p>
				</div>

				<div className="max-w-4xl mx-auto space-y-10">
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-widest text-blue-light mb-5">
							What we build with
						</h3>
						<div className="flex flex-wrap gap-3">
							{buildWith.map((item) => (
								<span
									key={item}
									className="px-4 py-2 rounded-full border border-blue/20 bg-dark text-gray-200 text-sm md:text-base hover:border-blue-light transition-colors"
								>
									{item}
								</span>
							))}
						</div>
					</div>

					<div>
						<h3 className="text-sm font-semibold uppercase tracking-widest text-blue-light mb-5">
							Platforms we implement
						</h3>
						<div className="flex flex-wrap gap-3">
							{platforms.map((item) => (
								<span
									key={item}
									className="px-4 py-2 rounded-full border border-blue/20 bg-dark text-gray-200 text-sm md:text-base hover:border-blue-light transition-colors"
								>
									{item}
								</span>
							))}
						</div>
					</div>

					{/*
					  TODO (needs input from JUSTECH): one sentence of proof under the stack,
					  naming a project and why that language was chosen. For example:
					  "We built X in Go because throughput mattered, and Y in Laravel because
					  the client's team had to maintain it."
					  One sentence like that is worth more than every logo it replaced.
					*/}

					<p className="pt-8 border-t border-blue/10 text-gray-400">
						<span className="font-semibold text-white">
							Certifications held:
						</span>{" "}
						AWS Solutions Architect &middot; AWS Cloud Practitioner
						&middot; HubSpot &middot; SEO
					</p>
				</div>
			</div>
		</section>
	);
}
