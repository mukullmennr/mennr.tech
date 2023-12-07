import React from "react";
import { guide } from "@/data/services/websitedesignanddevelopment/data";

export default function Guide() {
	const items = guide.map((item) => {
		return (
			<div key={item.heading} className="guide-item">
				<h3 className="guide-item__heading">{item.heading}</h3>

				<p className="guide-item__text">{item.text}</p>
			</div>
		);
	});

	return (
		<div className="guide">
			<div className="container">{items}</div>
		</div>
	);
}
