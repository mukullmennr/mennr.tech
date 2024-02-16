import React from "react";
import Link from "next/link";

import styles from "./main.module.scss";
import Services from "../../solutions/component/main/Services";

interface MainProps {
	data: {
		heading: string;
		text: string;
		links: {
			text: string;
			link: string;
		}[];

		services: string[];
	};
}

export default function Main({ data }: MainProps) {
	const links = data.links.map((link) => {
		return (
			<div className={styles.link}>
				<Link key={link.link + link.text} href={link.link}>
					{link.text}
				</Link>
			</div>
		);
	});

	return (
		<div className={styles.main}>
			<div className="container">
				<div className={styles.container}>
					<div className={styles.content}>
						<h1 className={styles.heading}>{data.heading}</h1>

						<p className={`${styles.text} ${styles.smallHide}`}>
							{data.text}
						</p>

						<div
							className={`${styles.linkContainer} ${styles.smallHide}`}
						>
							{links}
						</div>
					</div>

					<div className={styles.item}>
						<Services
							className={styles.list}
							services={data.services}
						/>

						<picture>
							<source
								media="(min-width: 48em)"
								srcSet="home/pc-lg.svg"
							/>

							<img src="home/pc-sm.svg" alt="chipy" />
						</picture>
					</div>

					<div
						className={`${styles.linkContainer} ${styles.largeHide}`}
					>
						{links}
					</div>
				</div>
			</div>
		</div>
	);
}
