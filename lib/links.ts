/**
 * The discovery call is the free front door: a short, no-charge conversation to
 * understand the problem and work out what the right next step is. It is not the
 * technical consultation, which is a paid service (see /consultation).
 *
 * Every primary CTA on the site reads from this constant, so changing the
 * booking provider is a one-line edit. Because it is an absolute URL, the
 * helper below adds target="_blank" automatically.
 */
export const DISCOVERY_CALL_URL: string =
	"https://calendly.com/omar-chouman0/justech-discovery-call-with-omar-chouman";

export const DISCOVERY_CALL_LABEL = "Book a discovery call";

const isExternal = /^https?:\/\//.test(DISCOVERY_CALL_URL);

/**
 * Spread onto a next/link (or an anchor) so an external booking URL opens in a
 * new tab and an internal fallback does not.
 */
export const discoveryLinkProps: {
	href: string;
	target?: "_blank";
	rel?: string;
} = isExternal
	? {
			href: DISCOVERY_CALL_URL,
			target: "_blank",
			rel: "noopener noreferrer",
	  }
	: { href: DISCOVERY_CALL_URL };
