import React from "react";
import styles from "./road.module.scss";
import Link from "next/link";

interface RoadProps {
	data: {
		heading: string;
		link: string;
	};
}

export default function Road({ data }: RoadProps) {
	return (
		<div className={styles.road}>
			<div className="container">
				<h2 className={`${styles.heading} solution-heading`}>
					{data.heading}
				</h2>
			</div>

			<div className={styles.image}>
				<picture>
					<source
						media="(min-width: 74em)"
						srcSet="/home/solutions/road/1190.svg"
					/>

					<source
						media="(min-width: 64em)"
						srcSet="/home/solutions/road/1024.svg"
					/>

					<source
						media="(min-width: 48em)"
						srcSet="/home/solutions/road/768.svg"
					/>

					<source
						media="(min-width: 40em)"
						srcSet="/home/solutions/road/640.svg"
					/>

					<img src="/home/solutions/road/360.svg" alt="our process" />
				</picture>
			</div>

			<div className="container">
				<div className={styles.link}>
					<Link href={data.link}>Get Started</Link>
				</div>
			</div>
		</div>
	);
}
