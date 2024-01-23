export const metadata = {
    title: "Marketing for Diesel Shops",
    description:
        "Mennr offers expert marketing solutions for diesel shops, helping you to reach a wider online audience and thrive in the competitive automotive market.",
};

interface ClientLayoutProps {
    children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
    return children;
}
