export const metadata = {
	title: "CCPA Request Form Confirmation",
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
