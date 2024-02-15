import React from "react";
import styles from "./honeycomb.module.scss";
import Link from "next/link";

interface HoneyCombProps {
	data: {
		heading: {
			text: string;
			highlight: string;
		};
		link: {
			text: string;
			link: string;
		};
	};
}

export default function HoneyComb({ data }: HoneyCombProps) {
	return (
		<div className={styles.honeycomb}>
			<div className="container">
				<h2 className={`sub-heading ${styles.heading}`}>
					{data.heading.text}
					<span> {data.heading.highlight} </span>
				</h2>
			</div>

			<picture>
				<source
					media="(min-width: 74em)"
					srcSet="/home/updated/1190services.svg"
				/>

				<source
					media="(min-width: 64em)"
					srcSet="/home/updated/1024services.svg"
				/>

				<source
					media="(min-width: 48em)"
					srcSet="/home/updated/768services.svg"
				/>

				<source
					media="(min-width: 40em)"
					srcSet="/home/updated/640services.svg"
				/>

				<img src="/home/updated/360services.svg" alt="our process" />
			</picture>

			<div className="container">
				<div className={styles.link}>
					<Link href={data.link.link}>{data.link.text}</Link>
				</div>
			</div>
		</div>
	);
}
