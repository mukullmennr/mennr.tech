"use client";

import React from "react";

interface ServicesProps {
	services: string[];
	className: string;
}

export default function Services({ services, className }: ServicesProps) {
	const items = services.map((item, index) => {
		return <li key={item + index}>{item}</li>;
	});

	return (
		<div className={className}>
			<ul>{items}</ul>
		</div>
	);
}
