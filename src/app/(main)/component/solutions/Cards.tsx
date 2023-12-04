import Link from "next/link";
import React from "react";

interface CardsProps {
	image: string;
	title: string;
	text: string;
	link: string;
}

export default function Cards({ image, title, text, link }: CardsProps) {
	return (
		<div className="item embla__slide">
			<div className="item-image">
				<img src={image} alt={title} />
			</div>

			<div className="item-info">
				<h3>{title}</h3>

				<p>{text}</p>

				<div>
					<Link href={link}>Learn More</Link>
				</div>
			</div>
		</div>
	);
}
