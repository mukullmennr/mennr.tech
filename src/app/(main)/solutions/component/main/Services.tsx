"use client";

import React, { useEffect, useState } from "react";

interface ServicesProps {
	services: string[];
}

export default function Services({ services }: ServicesProps) {
	const [displayItem, setDisplayItem] = useState({
		text: services[7],
		index: 7,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setDisplayItem((prev) => {
				let index = prev.index;
				let newIndex = (index + 1) % services.length;
				return {
					text: services[newIndex],
					index: newIndex,
				};
			});
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return <p>{displayItem.text}</p>;
}
