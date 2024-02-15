import React from "react";
import styles from "./road.module.scss";
import Link from "next/link";

interface RoadProps {
	data: {
		heading: string;
		text: string;
		link: {
			text: string;
			link: string;
		};
	};
}

export default function Road({ data }: RoadProps) {
	return (
		<div className={styles.road}>
			<div className="container">
				<div className={styles.container}>
					<h2 className={`${styles.heading} sub-heading`}>
						{data.heading}
					</h2>

					<p className={styles.text}>{data.text}</p>
				</div>
			</div>

			<picture>
				<source
					media="(min-width: 74em)"
					srcSet="/home/updated/1190roadmap.svg"
				/>

				<source
					media="(min-width: 64em)"
					srcSet="/home/updated/1024roadmap.svg"
				/>

				<source
					media="(min-width: 48em)"
					srcSet="/home/updated/768roadmap.svg"
				/>

				<source
					media="(min-width: 40em)"
					srcSet="/home/updated/640roadmap.svg"
				/>

				<img src="/home/updated/360roadmap.svg" alt="our process" />
			</picture>

			<div className="container">
				<div className={styles.link}>
					<Link href={data.link.link}>{data.link.text}</Link>
				</div>
			</div>
		</div>
	);
}
