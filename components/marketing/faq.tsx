import JsonLd from "@/components/seo/json-ld";
import Reveal from "@/components/marketing/reveal";
import { faqSchema } from "@/lib/schema";

export type FaqItem = {
	question: string;
	answer: string;
};

/**
 * Stays a server component so the FAQPage markup is unambiguously in the
 * server-rendered HTML. Motion comes from the Reveal wrapper, which takes
 * server-rendered children.
 *
 * Answers are plain visible text rather than collapsed behind an accordion.
 * Search engines accept hidden-until-expanded FAQ content, but the models that
 * read pages for answers do better with it on the page.
 */
export default function Faq({
	heading = "Common questions",
	items,
}: {
	heading?: string;
	items: FaqItem[];
}) {
	const words = heading.split(" ");

	return (
		<section className="py-20 relative">
			<JsonLd schema={faqSchema(items)} id="schema-faq" />

			<div className="container mx-auto">
				<Reveal>
					<h2 className="text-3xl md:text-4xl font-bold mb-12">
						{words.slice(0, -1).join(" ")}{" "}
						<span className="gradient-text">{words.slice(-1)}</span>
					</h2>
				</Reveal>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
					{items.map((item, index) => (
						<Reveal
							key={item.question}
							delay={Math.min(index * 0.07, 0.35)}
						>
							<h3 className="text-lg font-semibold mb-3 text-white">
								{item.question}
							</h3>
							<p className="text-gray-400 leading-relaxed">
								{item.answer}
							</p>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
