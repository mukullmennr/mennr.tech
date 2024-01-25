import React from "react";
import styles from "./pricing.module.scss";
import PricingCard from "./pricing-cards/PricingCard";
import * as Tabs from "@radix-ui/react-tabs";

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

	const smallCards = (
		<>
			<Tabs.Root
				className={styles.tabsRoot}
				defaultValue={data.cards[0].heading}
			>
				<Tabs.List className={styles.tabList}>
					{data.cards.map((card, index) => {
						return (
							<Tabs.Trigger
								className={styles.tabTrigger}
								key={card.heading + index}
								value={card.heading}
							>
								<img
									src={card.icon}
									alt="icon"
									width="32"
									height="32"
								/>
								{card.heading}
							</Tabs.Trigger>
						);
					})}
				</Tabs.List>

				{data.cards.map((card, index) => {
					return (
						<Tabs.Content
							className={styles.tabContent}
							key={card.heading + index + "contentadsaf"}
							value={card.heading}
						>
							<PricingCard data={card} />
						</Tabs.Content>
					);
				})}
			</Tabs.Root>
		</>
	);

	return (
		<div className={styles.pricing}>
			<div className="container">
				<div className={styles.container}>
					<h2 className={`${styles.heading} solution-heading`}>
						{data.heading}
					</h2>

					<div className={styles.cardsSmall}>{smallCards}</div>

					<div className={styles.cards}>{cards}</div>
				</div>
			</div>
		</div>
	);
}
