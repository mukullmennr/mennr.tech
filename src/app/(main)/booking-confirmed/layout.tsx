export const metadata = {
	title: "Booking Confirm",
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
