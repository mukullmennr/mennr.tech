import React from "react";
import styles from "./main.module.scss";

interface MainProps {
	data: {
		heading: string;
		text: string;
		img: string;
	};
}

export default function Main({ data }: MainProps) {
	return (
		<div className={`${styles.main} hero`}>
			<div className="container">
				<div className={styles.content}>
					<h1 className="heading">{data.heading}</h1>

					<p>{data.text}</p>
				</div>

				<div className={styles.image}>
					<img src={data.img} alt="chipy" width="400" height="437" />
				</div>
			</div>
		</div>
	);
}
