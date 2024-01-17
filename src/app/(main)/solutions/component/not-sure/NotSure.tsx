import React from "react";
import styles from "./not-sure.module.scss";
import Link from "next/link";

interface NotSureProps {
	data: {
		heading: string;
		text: string;
	};
}
export default function NotSure({ data }: NotSureProps) {
	return (
		<div className={styles.notSure}>
			<div className="container">
				<div className={styles.container}>
					<div className={styles.textContainer}>
						<h2 className={styles.heading}>{data.heading}</h2>

						<p className={styles.text}>{data.text}</p>

						<div>
							<Link
								href="/rohan"
								aria-label="get in touch"
								className={styles.link}
							>
								Get In Touch
							</Link>
						</div>
					</div>

					<div className={styles.imageContainer}>
						<picture>
							<source
								media="(min-width: 48em)"
								srcSet="home/solutions/chipy/chipy-confused-640.svg"
							/>

							<img
								src="home/solutions/chipy/chipy-confused-360.svg"
								alt="chipy"
							/>
						</picture>
					</div>
				</div>
			</div>
		</div>
	);
}
