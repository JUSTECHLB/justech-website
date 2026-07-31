/**
 * Single source of truth for anything that has to agree across metadata,
 * structured data, the sitemap, robots.txt, and llms.txt.
 *
 * TODO (needs confirmation from JUSTECH): SITE_URL is the canonical origin.
 * If the live site serves from www.justechlb.com instead, change it here and
 * make sure the other host 301-redirects to this one. Search engines treat
 * the two as different sites otherwise.
 */
export const SITE_URL = "https://justechlb.com";

export const SITE_NAME = "JUSTECH";

export const SITE_DESCRIPTION =
	"Software engineering for businesses in Lebanon and MENA. We scale revenue, automate operations, and modernize the technology underneath.";

export const CONTACT = {
	phone: "+961 78 890 304",
	phoneE164: "+96178890304",
	email: "contact@justechlb.com",
	city: "Beirut",
	country: "Lebanon",
	countryCode: "LB",
};

export const SOCIAL_PROFILES = [
	"https://www.facebook.com/justechlb",
	"https://www.instagram.com/justechlb",
	"https://www.linkedin.com/company/justechlb",
];

export const FOUNDING_YEAR = "2019";

/** Absolute URL for a site-relative path. */
export const absoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();
