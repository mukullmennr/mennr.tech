import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/main.scss";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Local digital marketing for small businesses | mennr.tech",
	description: "The official website for Mennr.tech",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<head>
				<Script src="//embed.typeform.com/next/embed.js"></Script>
			</head>
			<body className={plusJakartaSans.className}>{children}</body>
		</html>
	);
}
