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
	return <span onClick={onClick} className={className}></span>;
}
