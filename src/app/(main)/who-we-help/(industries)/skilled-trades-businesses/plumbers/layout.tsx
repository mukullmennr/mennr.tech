export const metadata = {
    title: "Marketing for Plumbers",
    description:
        "Mennr Tech specializes in digital marketing for plumbers in USA. Connect with more clients and boost your plumbing business's online presence.",
};

interface ClientLayoutProps {
    children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
    return children;
}
