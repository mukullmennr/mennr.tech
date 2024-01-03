import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/main.scss";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Script from "next/script";
config.autoAddCss = false;

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Mennr: Marketing for Small Businesses",
	description: "The official website for Mennr.tech",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<head>
				<Script
					id="gtag-script"
					async
					src="https://www.googletagmanager.com/gtag/js?id=AW-11406722063"
				/>
				<Script id="gtag-code">{` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11406722063'); `}</Script>
			</head>

			<body className={plusJakartaSans.className}>{children}</body>
		</html>
	);
}
