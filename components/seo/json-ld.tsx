/**
 * Renders a JSON-LD block. Kept in one place so every schema on the site is
 * serialized the same way, with `<` escaped so a stray character in the data
 * can never close the script tag early.
 */
export default function JsonLd({
	schema,
	id,
}: {
	schema: Record<string, unknown> | Record<string, unknown>[];
	id?: string;
}) {
	return (
		<script
			id={id}
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
