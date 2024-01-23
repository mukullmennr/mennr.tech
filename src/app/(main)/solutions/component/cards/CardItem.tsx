import React from "react";

import styles from "./cardItem.module.scss";

interface CardItemProps {
	heading: string;
	img: string;
	content: string;
}

export default function CardItem({ heading, img, content }: CardItemProps) {
	return (
		<div className={styles.scene}>
			<div className={styles.card}>
				<div className={`${styles.face} ${styles.front}`}>
					<h3 className={styles.heading}>{heading}</h3>

					<img src={img} alt={heading} width="130" height="164" />
				</div>

				<div className={`${styles.face} ${styles.back}`}>
					<h3 className={styles.heading}>{heading}</h3>

					<p className={styles.text}>{content}</p>
				</div>
			</div>
		</div>
	);
}
