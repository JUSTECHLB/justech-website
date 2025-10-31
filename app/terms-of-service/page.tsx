import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function TermsOfServicePage() {
	return (
		<main className="min-h-screen bg-dark text-white pt-32 pb-20">
			<div className="container mx-auto">
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
						Terms of <span className="gradient-text">Service</span>
					</h1>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						Please read these terms and conditions carefully before
						using our website.
					</p>
				</div>

				<div className="gradient-border p-8 rounded-2xl mb-12">
					<div className="prose prose-lg prose-invert max-w-none">
						<h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">
							OVERVIEW
						</h2>
						<p className="text-gray-300">
							This website is operated by JUSTECH. Throughout the
							site, the terms "we", "us" and "our" refer to
							JUSTECH. JUSTECH offers this website, including all
							information, tools and services available from this
							site to you, the user, conditioned upon your
							acceptance of all terms, conditions, policies and
							notices stated here.
						</p>

						<p className="text-gray-300 mt-4">
							By visiting our site and/or purchasing something
							from us, you engage in our "Service" and agree to be
							bound by the following terms and conditions ("Terms
							of Service", "Terms"), including those additional
							terms and conditions and policies referenced herein
							and/or available by hyperlink. These Terms of
							Service apply to all users of the site, including
							without limitation users who are browsers, vendors,
							customers, merchants, and/or contributors of
							content.
						</p>

						<p className="text-gray-300 mt-4">
							Please read these Terms of Service carefully before
							accessing or using our website. By accessing or
							using any part of the site, you agree to be bound by
							these Terms of Service. If you do not agree to all
							the terms and conditions of this agreement, then you
							may not access the website or use any services. If
							these Terms of Service are considered an offer,
							acceptance is expressly limited to these Terms of
							Service.
						</p>

						<p className="text-gray-300 mt-4">
							Any new features or tools which are added to the
							current store shall also be subject to the Terms of
							Service. You can review the most current version of
							the Terms of Service at any time on this page. We
							reserve the right to update, change or replace any
							part of these Terms of Service by posting updates
							and/or changes to our website. It is your
							responsibility to check this page periodically for
							changes. Your continued use of or access to the
							website following the posting of any changes
							constitutes acceptance of those changes.
						</p>

						<h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">
							SECTION 1 - ONLINE STORE TERMS
						</h2>
						<p className="text-gray-300">
							By agreeing to these Terms of Service, you represent
							that you are at least the age of majority in your
							state or province of residence, or that you are the
							age of majority in your state or province of
							residence and you have given us your consent to
							allow any of your minor dependents to use this site.
						</p>

						<p className="text-gray-300 mt-4">
							You may not use our products for any illegal or
							unauthorized purpose nor may you, in the use of the
							Service, violate any laws in your jurisdiction
							(including but not limited to copyright laws).
						</p>

						<p className="text-gray-300 mt-4">
							You must not transmit any worms or viruses or any
							code of a destructive nature.
						</p>

						<p className="text-gray-300 mt-4">
							A breach or violation of any of the Terms will
							result in an immediate termination of your Services.
						</p>

						<h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">
							SECTION 2 - GENERAL CONDITIONS
						</h2>
						<p className="text-gray-300">
							We reserve the right to refuse service to anyone for
							any reason at any time.
						</p>

						<p className="text-gray-300 mt-4">
							You understand that your content (not including
							credit card information), may be transferred
							unencrypted and involve (a) transmissions over
							various networks; and (b) changes to conform and
							adapt to technical requirements of connecting
							networks or devices. Credit card information is
							always encrypted during transfer over networks.
						</p>

						<p className="text-gray-300 mt-4">
							You agree not to reproduce, duplicate, copy, sell,
							resell or exploit any portion of the Service, use of
							the Service, or access to the Service or any contact
							on the website through which the service is
							provided, without express written permission by us.
						</p>

						<p className="text-gray-300 mt-4">
							The headings used in this agreement are included for
							convenience only and will not limit or otherwise
							affect these Terms.
						</p>

						<h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">
							SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF
							INFORMATION
						</h2>
						<p className="text-gray-300">
							We are not responsible if information made available
							on this site is not accurate, complete or current.
							The material on this site is provided for general
							information only and should not be relied upon or
							used as the sole basis for making decisions without
							consulting primary, more accurate, more complete or
							more timely sources of information. Any reliance on
							the material on this site is at your own risk.
						</p>

						<p className="text-gray-300 mt-4">
							This site may contain certain historical
							information. Historical information, necessarily, is
							not current and is provided for your reference only.
							We reserve the right to modify the contents of this
							site at any time, but we have no obligation to
							update any information on our site. You agree that
							it is your responsibility to monitor changes to our
							site.
						</p>

						<h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">
							SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES
						</h2>
						<p className="text-gray-300">
							Prices for our products are subject to change
							without notice.
						</p>

						<p className="text-gray-300 mt-4">
							We reserve the right at any time to modify or
							discontinue the Service (or any part or content
							thereof) without notice at any time.
						</p>

						<p className="text-gray-300 mt-4">
							We shall not be liable to you or to any third-party
							for any modification, price change, suspension or
							discontinuance of the Service.
						</p>

						<h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">
							SECTION 5 - PRODUCTS OR SERVICES
						</h2>
						<p className="text-gray-300">
							Certain products or services may be available
							exclusively online through the website. These
							products or services may have limited quantities and
							are subject to return or exchange only according to
							our Return Policy.
						</p>

						<p className="text-gray-300 mt-4">
							We have made every effort to display as accurately
							as possible the colors and images of our products
							that appear at the store. We cannot guarantee that
							your computer monitor's display of any color will be
							accurate.
						</p>

						<p className="text-gray-300 mt-4">
							We reserve the right, but are not obligated, to
							limit the sales of our products or Services to any
							person, geographic region or jurisdiction. We may
							exercise this right on a case-by-case basis. We
							reserve the right to limit the quantities of any
							products or services that we offer. All descriptions
							of products or product pricing are subject to change
							at anytime without notice, at the sole discretion of
							us. We reserve the right to discontinue any product
							at any time. Any offer for any product or service
							made on this site is void where prohibited.
						</p>

						<p className="text-gray-300 mt-4">
							We do not warrant that the quality of any products,
							services, information, or other material purchased
							or obtained by you will meet your expectations, or
							that any errors in the Service will be corrected.
						</p>

						<h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">
							SECTION 6 - OPTIONAL TOOLS
						</h2>
						<p className="text-gray-300">
							We may provide you with access to third-party tools
							over which we neither monitor nor have any control
							nor input.
						</p>

						<p className="text-gray-300 mt-4">
							You acknowledge and agree that we provide access to
							such tools "as is" and "as available" without any
							warranties, representations or conditions of any
							kind and without any endorsement. We shall have no
							liability whatsoever arising from or relating to
							your use of optional third-party tools.
						</p>

						<p className="text-gray-300 mt-4">
							Any use by you of optional tools offered through the
							site is entirely at your own risk and discretion and
							you should ensure that you are familiar with and
							approve of the terms on which tools are provided by
							the relevant third-party provider(s).
						</p>

						<p className="text-gray-300 mt-4">
							We may also, in the future, offer new services
							and/or features through the website (including, the
							release of new tools and resources). Such new
							features and/or services shall also be subject to
							these Terms of Service.
						</p>

						<h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">
							CONTACT INFORMATION
						</h2>
						<p className="text-gray-300">
							Questions about the Terms of Service should be sent
							to us at info@justechlb.com.
						</p>
					</div>
				</div>

				<div className="text-center">
					<Link href="/">
						<Button className="bg-dark-lighter hover:bg-dark-light text-white border border-blue/20 rounded-full px-6">
							<ArrowLeft className="mr-2 h-4 w-4" />
							Back to Home
						</Button>
					</Link>
				</div>
			</div>
		</main>
	);
}
