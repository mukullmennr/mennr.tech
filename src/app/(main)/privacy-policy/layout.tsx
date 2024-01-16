export const metadata = {
	title: "Privacy Policy | Mennr",
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
