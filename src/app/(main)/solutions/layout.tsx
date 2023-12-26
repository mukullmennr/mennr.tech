import Script from "next/script";
// import { Plus_Jakarta_Sans } from "next/font/google";

// const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface SolutionsLayoutProps {
	children: React.ReactNode;
}

export default function SolutionsLayout({ children }: SolutionsLayoutProps) {
	return (
		<>
			<Script src="//embed.typeform.com/next/embed.js"></Script>

			{children}
			<Script>window.tf.load()</Script>
		</>
	);
}
