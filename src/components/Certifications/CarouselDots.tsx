"use client";

import React from "react";

interface CarouselDotsProps {
	onClick: () => void;
	className: string;
}

export default function CarouselDots({
	onClick,
	className,
}: CarouselDotsProps) {
	return (
		<button onClick={onClick} className={className} type="button"></button>
	);
}
