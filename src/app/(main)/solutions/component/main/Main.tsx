import React from "react";
import styles from "./main.module.scss";
import Services from "./Services";

interface MainProps {
	data: {
		heading: string;
		text: string;
		services: string[];
		flagText: string;
	};
}

export default function Main({ data }: MainProps) {
	return (
		<div className={styles.main}>
			<div className="container">
				<div className={styles.container}>
					<div className={styles.text}>
						<h1 className={styles.heading}>{data.heading}</h1>

						<p className={styles.content}>{data.text}</p>
					</div>

					<div className={styles.services}>
						<div className={styles.chipy}>
							<Services
								className={styles.list}
								services={data.services}
							/>

							<picture>
								<source
									media="(min-width: 48em)"
									srcSet="home/solutions/chipy/chipy-flag-640.svg"
								/>

								<img
									src="home/solutions/chipy/chipy-flag-360.svg"
									alt="chipy"
								/>
							</picture>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
