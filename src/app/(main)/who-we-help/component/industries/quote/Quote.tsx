import React from "react";

interface QuoteProps {
	content: string;
}

export default function Quote({ content }: QuoteProps) {
	return (
		<div className="quote container">
			<h2>{content}</h2>
		</div>
	);
}
