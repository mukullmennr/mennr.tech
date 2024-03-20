import React from "react";
import styles from "./list.module.scss";
import Video from "./Video";
import Link from "next/link";

interface ListProps {
	data: {
		heading: string;
		items: {
			heading: string;
			link: string;
			text: string;
			item: string[];
			video: string;
		}[];
	};
}

const List = ({ data }: ListProps) => {
	const services = data.items.map((service) => {
		return (
			<div key={service.heading}>
				<div className={styles.video}>
					<Video link={service.video} />
				</div>

				<div className={styles.content}>
					<h3>{service.heading}</h3>

					<p>{service.text}</p>

					<ul>
						{service.item.map((element) => {
							return <li key={element}>{element}</li>;
						})}
					</ul>

					<div className={styles.button}>
						<Link href={service.link}>Learn More</Link>
					</div>
				</div>
			</div>
		);
	});
	return (
		<div className={styles.list}>
			<div className="container">
				<div className={styles.container}>
					<h2 className="sub-heading">{data.heading}</h2>

					<div className={styles.servicesContainer}>{services}</div>
				</div>
			</div>
		</div>
	);
};

export default List;
