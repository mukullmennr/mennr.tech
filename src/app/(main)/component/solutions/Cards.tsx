import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface CardsProps {
	image: StaticImageData;
	title: string;
	text: string;
	link: string;
}

export default function Cards({ image, title, text, link }: CardsProps) {
	return (
		<div className="item embla__slide">
			<div className="item-image">
				{/* <img src={image} alt={title} /> */}
				<Image src={image} alt={title} />
			</div>

			<div className="item-info">
				<div>
					<h3>{title}</h3>
				</div>

				<p>{text}</p>

				<div>
					<Link href={link}>Learn More</Link>
				</div>
			</div>
		</div>
	);
}
