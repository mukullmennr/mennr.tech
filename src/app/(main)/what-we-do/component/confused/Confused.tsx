import React from "react";
import styles from "./confused.module.scss";
import Link from "next/link";

interface ConfusedProps {
	data: {
		heading: string;
		text: string[];
		link: string;
	};
	children: React.ReactNode;
}

export default function Confused({ data, children }: ConfusedProps) {
	const text = data.text.map((p) => {
		return (
			<p key={p} className={styles.textItem}>
				{p}
			</p>
		);
	});

	return (
		<div className={styles.confused}>
			<div className="container">
				<h2 className={`${styles.heading} sub-heading`}>
					{data.heading}
				</h2>

				<div className={styles.content}>
					<div className={styles.text}>{text}</div>

					<div className={styles.contentVisual}>
						<picture>
							{/* <source
								media="(min-width: 48em)"
								srcSet="/home/solutions/chipy/chipy-confused-640.svg"
							/> */}

							<img
								src="/home/solutions/chipy/chipy-confused-360.svg"
								alt="chipy"
							/>
						</picture>

						<div className={styles.link}>
							<Link href={data.link} aria-label="get in touch">
								Get in Touch
							</Link>
						</div>
					</div>
				</div>
			</div>

			{children}
		</div>
	);
}
