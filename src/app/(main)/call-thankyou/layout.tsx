export const metadata = {
    title: "Call: Call Form Submission",
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
