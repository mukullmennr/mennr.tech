import React from "react";
import styles from "./cards.module.scss";

interface CardsProps {
	data: {
		heading: string;
		card: {
			heading: string;
			icon: {
				fill: string;
				stroke: string;
			};
			text: string;
		}[];
	};
}

export default function Cards({ data }: CardsProps) {
	const cards = data.card.map((item) => {
		return (
			<div key={item.heading} className={styles.card}>
				<div className={styles.visual}>
					<div className={styles.img}>
						<img
							src={item.icon.fill}
							alt={item.heading}
							width="96"
							height="96"
						/>
					</div>

					<div className={styles.subHeading}>
						<h3>{item.heading}</h3>
					</div>
				</div>

				<div className={styles.content}>
					<img
						src={item.icon.stroke}
						alt={item.heading}
						width="64"
						height="64"
					/>

					<h4>{item.heading}</h4>

					<p>{item.text}</p>
				</div>
			</div>
		);
	});

	const items = data.card.map((rohan) => {
		return <div className={styles.item}>rohan</div>;
	});

	return (
		<div className={styles.cards}>
			<div className={styles.heading}>
				<div className="container">
					<h2 className="sub-heading">{data.heading}</h2>
				</div>
			</div>

			<div className="container">
				<div className={`${styles.container} horizontal-scrollbar`}>
					{cards}
				</div>
			</div>
		</div>
	);
}
