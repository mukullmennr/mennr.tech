import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

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
										<Image
											src="/tick.svg"
											alt="tick"
											width="14"
											height="14"
										/>
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
				<h2 className="plans-heading">
					We breakdown our solutions into three main categories based
					on common needs and wants of business owners like yourself.
					This helps us identify what marketing tactics we might want
					to use to help you reach your goal.
				</h2>
				<div className="plans-cards">{cards}</div>
				<h2 className="plans-heading">
					Once we identify your goal, one of our marketing strategists
					will meet with you to discuss what our specific approach for
					your business will look like.
				</h2>
			</div>
		</div>
	);
}
