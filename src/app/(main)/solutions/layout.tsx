import Script from "next/script";

interface SolutionsLayoutProps {
	children: React.ReactNode;
}

export default function SolutionsLayout({ children }: SolutionsLayoutProps) {
	return (
		<>
			<Script
				id="typeform-script"
				src="//embed.typeform.com/next/embed.js"
			></Script>

			{children}
			<Script id="typeform-script-load">window.tf.load()</Script>
		</>
	);
}
