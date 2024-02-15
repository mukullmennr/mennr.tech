import React from "react";
import styles from "./awards.module.scss";

interface AwardsProps {
	data: { heading: string; awards: string[] };
}

export default function Awards({ data }: AwardsProps) {
	const awardsImages = data.awards.map((award) => {
		return (
			<img key={award} src={award} alt="award" width={200} height={80} />
		);
	});

	return (
		<div className={styles.awards}>
			<div className={styles.heading}>
				<div className="container">
					<h2 className={`sub-heading`}>{data.heading}</h2>
				</div>
			</div>

			<div className={styles.awardsParent}>
				<div className={styles.awardsRotate}>
					{awardsImages}
					{awardsImages}
					{awardsImages}
					{awardsImages}
				</div>
			</div>
		</div>
	);
}
