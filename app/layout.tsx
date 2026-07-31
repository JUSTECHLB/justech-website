import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RadialBackground from "@/components/radial-background";
import Script from "next/script";
import JsonLd from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: "JUSTECH | Software Engineering in Beirut",
		template: "%s | JUSTECH",
	},
	description: SITE_DESCRIPTION,
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		siteName: SITE_NAME,
		locale: "en_US",
		url: "/",
		title: "JUSTECH | Software Engineering in Beirut",
		description: SITE_DESCRIPTION,
	},
	twitter: {
		card: "summary_large_image",
		title: "JUSTECH | Software Engineering in Beirut",
		description: SITE_DESCRIPTION,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	icons: {
		icon: "/favicon.ico",
	},
	// Google Search Console verification
	verification: {
		google: "2S2GPbcMRUzlWyQNYIsfRbMoe3kVd5tbHAGghQNiRdA",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<JsonLd schema={organizationSchema} id="schema-organization" />
				<JsonLd schema={websiteSchema} id="schema-website" />

				{/* Google Analytics */}
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-HX43RFX1JP"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-HX43RFX1JP');
					`}
				</Script>
			</head>
			<body className={`${inter.className} dark`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<RadialBackground />
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}

import "./globals.css";
