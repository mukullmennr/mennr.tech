import React from "react";
import styles from "./main.module.scss";

interface MainProps {
	data: {
		heading: string;
		text: string;
		img: string;
	};
	children: React.ReactNode;
}

export default function Main({ data, children }: MainProps) {
	return (
		<div className={`${styles.main} hero`}>
			{children}

			<div className="container">
				<div className={styles.container}>
					<div className={styles.content}>
						<h1 className="heading">{data.heading}</h1>

						<p className={`text ${styles.large}`}>{data.text}</p>
					</div>

					<div className={styles.image}>
						<img src={data.img} alt="" />
					</div>

					<div className={styles.small}>
						<p className="text">{data.text}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
