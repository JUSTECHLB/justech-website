import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RadialBackground from "@/components/radial-background";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "JUSTECH - Software Development Agency",
	description: "JUSTECH is a leading software development agency specializing in website design, development, and SEO optimization.",
	icons: {
		icon: "/favicon.ico",
	},
	// Google Search Console verification
	verification: {
		google: "2S2GPbcMRUzlWyQNYIsfRbMoe3kVd5tbHAGghQNiRdA",
	},
};

export const images = {
	remotePatterns: [
		{
			protocol: "https",
			hostname: "justechlb.com",
			pathname: "/wp-content/uploads/**",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
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
						gtag('config', 'G-YOUR_GA_ID_HERE');
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
