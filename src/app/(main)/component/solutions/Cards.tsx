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
				{/* <img src={image} alt={title} /> */}
				<img src={image} alt={title} />
			</div>

			<div className="item-info">
				<div>
					<Link href={link} className="item-info__heading">
						{title}
					</Link>
				</div>

				<p className="item-info__text">{text}</p>

				{/* <div>
					<Link className="item-info__link" href={link}>Learn More</Link>
				</div> */}
			</div>
		</div>
	);
}
