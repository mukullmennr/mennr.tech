import React from "react";

interface SubLayoutProps {
	children: React.ReactNode;
}

export default function layout({ children }: SubLayoutProps) {
	return <>{children}</>;
}
