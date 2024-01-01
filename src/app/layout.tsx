import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/main.scss";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

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
			<body className={plusJakartaSans.className}>{children}</body>
			<GoogleTagManager gtmId="G-HCZ7C019E7" />
		</html>
	);
}
