import React from "react";
import styles from "./pricing.module.scss";
import PricingCard from "./pricing-cards/PricingCard";

interface Services {
	id: string;
	head: string;
	hover: string;
}

export interface Service {
	heading?: string;
	text: string;
	price: string;
	link: string;
	services: Services[];
	free?: string;
	modal: {
		text: string;
	};
}

export interface Card {
	icon: string;
	heading: string;
	card: Service[];
}

interface PricingProps {
	data: {
		heading: string;
		cards: Card[];
	};
}

export default function Pricing({ data }: PricingProps) {
	const cards = data.cards.map((card) => {
		return <PricingCard key={card.heading} data={card} />;
	});

	return (
		<div className={styles.pricing}>
			<div className="container">
				<div className={styles.container}>
					<h2 className={`${styles.heading} solution-heading`}>
						{data.heading}
					</h2>

					<div className={styles.cardsSmall}></div>

					<div className={styles.cards}>{cards}</div>
				</div>
			</div>
		</div>
	);
}
