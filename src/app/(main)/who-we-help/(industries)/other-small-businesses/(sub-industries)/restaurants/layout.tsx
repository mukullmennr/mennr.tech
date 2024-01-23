export const metadata = {
    title: "Marketing for Restaurants",
    description:
        "Mennr Tech specializes in boosting the online presence of restaurants in USA. Reach more customers and grow your dining business with our marketing expertise.",
};

interface ClientLayoutProps {
    children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
    return children;
}
