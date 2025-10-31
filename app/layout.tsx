import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RadialBackground from "@/components/radial-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "JUSTECH - Software Development Agency",
	description: "JUSTECH is a leading software development agency specializing in website design, development, and SEO optimization.",
	icons: {
		icon: "/favicon.ico",
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
