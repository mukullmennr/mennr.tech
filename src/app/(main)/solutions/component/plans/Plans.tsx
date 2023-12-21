import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface PlansProps {
	data: {
		heading: string;
		text: string;
		points: string[];
	}[];
}

export default function Plans({ data }: PlansProps) {
	const cards = data.map((card) => {
		return (
			<div key={card.heading} className="plans-cards__item">
				<h3>{card.heading}</h3>

				<p>{card.text}</p>

				<a href="#calender">
					Get in touch
					<FontAwesomeIcon icon={faAngleDown} />
				</a>

				<ul className="plans-points">
					{card.points.map((point, index) => {
						return (
							<li key={point + index}>
								<div>
									<span>
										<img src="/tick.svg" alt="tick" />
									</span>
									<p>{point}</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
	});

	return (
		<div className="plans">
			<div className="container">
				<h2 className="plans-heading">Mennr Marketing Solutions</h2>

				<div className="plans-cards">{cards}</div>
			</div>
		</div>
	);
}
