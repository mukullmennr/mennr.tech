import React from "react";
import styles from "./cards.module.scss";
import CardItem from "./CardItem";
import Link from "next/link";

interface CardsProps {
	data: {
		heading: {
			initial: string;
			rest: string;
		};
		cardItems: {
			heading: string;
			img: string;
			content: string;
		}[];
		link: string;
	};
}

export default function Cards({ data }: CardsProps) {
	const items = data.cardItems.map((card) => {
		return (
			<CardItem
				key={card.heading}
				heading={card.heading}
				img={card.img}
				content={card.content}
			/>
		);
	});

	return (
		<div className={styles.cards}>
			<div className="container">
				<div className={styles.container}>
					<h2 className={`${styles.heading} sub-heading`}>
						<span>{data.heading.initial}</span> {data.heading.rest}
					</h2>

					<div
						className={`${styles.cardsContainer} horizontal-scrollbar`}
					>
						{items}
					</div>

					<div className={styles.link}>
						<Link href={data.link}>Get In Touch</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
