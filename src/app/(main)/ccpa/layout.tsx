export const metadata = {
	title: "California Privacy Rights",
};

interface ClientLayoutProps {
	children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
	return (
		<>
			{children}
			<div className="footer-space"></div>
		</>
	);
}
