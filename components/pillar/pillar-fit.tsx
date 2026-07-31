import { Check } from "lucide-react";
import PillGroup, { type Pill } from "@/components/marketing/pill-group";
import Reveal from "@/components/marketing/reveal";

export type PillarService = Pill;

export type PillarFitProps = {
	problems: string[];
	services: PillarService[];
	metrics: string[];
	proof?: {
		client: string;
		body: string;
	};
};

export default function PillarFit({
	problems,
	services,
	metrics,
	proof,
}: PillarFitProps) {
	return (
		<section className="py-24 relative overflow-hidden">
			<div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] -z-10"></div>

			<div className="container mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
					<div>
						<Reveal>
							<h2 className="text-3xl md:text-4xl font-bold mb-8">
								Sound{" "}
								<span className="gradient-text">familiar</span>?
							</h2>
						</Reveal>
						<ul className="space-y-4">
							{problems.map((problem, index) => (
								<Reveal
									key={problem}
									delay={Math.min(index * 0.07, 0.35)}
								>
									<li className="group flex items-start gap-3 text-lg text-gray-300 transition-colors hover:text-white">
										<Check className="h-5 w-5 text-blue-light mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
										<span>{problem}</span>
									</li>
								</Reveal>
							))}
						</ul>
					</div>

					<div className="space-y-10">
						<div>
							<Reveal>
								<h3 className="text-sm font-semibold uppercase tracking-widest text-blue-light mb-5">
									What we do about it
								</h3>
							</Reveal>
							<PillGroup items={services} />
						</div>

						<Reveal>
							<h3 className="text-sm font-semibold uppercase tracking-widest text-blue-light mb-5">
								How we measure it
							</h3>
							<p className="text-lg text-gray-300">
								{metrics.join(". ")}.
							</p>
						</Reveal>

						{proof && (
							<Reveal delay={0.1}>
								<div className="gradient-border rounded-2xl p-6 bg-dark-lighter transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue/10">
									<h3 className="text-sm font-semibold uppercase tracking-widest text-blue-light mb-3">
										Proof
									</h3>
									<p className="text-lg text-gray-200">
										<span className="font-semibold text-white">
											{proof.client}
										</span>{" "}
										{proof.body}
									</p>
								</div>
							</Reveal>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
