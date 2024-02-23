import React from "react";
import styles from "./strategy.module.scss";

interface StrategyProps {
	data: {
		heading: string;
		content: {
			heading: string;
			icon: string;
			text: string[];
			sub: string;
		};
		numbers: {
			title: string;
			value: string;
		}[];
	};
}

export default function Strategy({ data }: StrategyProps) {
	const info = data.content.text.map((item) => {
		return (
			<p key={item} className={styles.p}>
				{item}
			</p>
		);
	});

	const scale = data.numbers.map((item) => {
		return (
			<div key={item.title}>
				<h4>{item.value}</h4>
				<p>{item.title}</p>
			</div>
		);
	});

	return (
		<div className={styles.strategy}>
			<div className="container">
				<h2 className="sub-heading">{data.heading}</h2>

				<div className={styles.container}>
					<div className={styles.info}>
						<h3 className={styles.large}>
							{data.content.heading}
							<img src={data.content.icon} />
						</h3>

						<div className={styles.text}>
							{info}

							<p className={styles.sub}>{data.content.sub}</p>
						</div>
					</div>

					<div className={styles.visual}>
						<h3 className={styles.small}>
							{data.content.heading}
							<img src={data.content.icon} />
						</h3>

						<div
							className={`${styles.elements} horizontal-scrollbar`}
						>
							{scale}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
