import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import React from "react";
interface MainLayoutProps {
	children: React.ReactNode;
}
export default function mainLayout({ children }: MainLayoutProps) {
	return (
		<>
			<Nav />
			{children}

			<Footer />
		</>
	);
}
