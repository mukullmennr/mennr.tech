import React from "react";
import styles from "./content.module.scss";

interface ContentProps {
	data: {
		heading: string;
		content: {
			heading: string;
			text: string;
			img: {
				large: string;
				small: string;
			};
		}[];
	};
}

export default function Content({ data }: ContentProps) {
	const content = data.content.map((item) => {
		return (
			<div key={item.heading} className={styles.contentItem}>
				<div className={styles.img}>
					<picture>
						<source
							media="(min-width: 48em)"
							srcSet={item.img.large}
						/>
						<img src={item.img.small} alt="chipy" />
					</picture>
				</div>

				<div className={styles.text}>
					<h3>{item.heading}</h3>

					<p>{item.text}</p>
				</div>
			</div>
		);
	});

	return (
		<div className={styles.content}>
			<div className={styles.heading}>
				<div className="container">
					<h2 className="sub-heading">{data.heading}</h2>
				</div>
			</div>

			<div className="container">
				<div className={styles.container}>{content}</div>
			</div>
		</div>
	);
}
