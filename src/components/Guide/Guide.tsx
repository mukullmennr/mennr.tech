import React from "react";

interface GuideData {
	heading: string;
	text: string;
}

interface GuideProps {
	data: GuideData[];
}

export default function Guide({ data }: GuideProps) {
	let len = data.length;
	const items = data.map((item) => {
		let classname = len > 1 ? "multiple" : "";

		return (
			<div key={item.heading} className={`guide-item ${classname}`}>
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
