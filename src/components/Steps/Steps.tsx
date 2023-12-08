import React from "react";

interface StepsData {
	heading?: string;
	steps: string[];
	last?: string;
}

interface StepsProps {
	data: StepsData;
	isServices: boolean;
	classname: string;
}

export default function Steps({ data, isServices, classname }: StepsProps) {
	let even: boolean = data.steps.length % 2 === 0;

	const stepItems = data.steps.map((step, index) => {
		return (
			<p key={index}>
				{isServices && <span>{index + 1}.</span>} {step}
			</p>
		);
	});

	return (
		<div className="steps">
			<div className="container">
				<div className={`steps-container ${classname}`}>
					{data.heading && (
						<h3 className="steps-heading">{data.heading}</h3>
					)}

					<div className={`steps-item ${even && "right"}`}>
						{stepItems}
					</div>

					<h4 className="steps-subheading">{data.last}</h4>

					<img
						src="/common/calender/calender-point.svg"
						alt="calender pointer"
					/>
				</div>

				<div className="chipy-parent">
					<div className="calender-container">
						<iframe
							src="https://meetings.hubspot.com/rohan90?embed=true"
							frameBorder="0"
						></iframe>
					</div>

					<img
						src="/common/chipy/chipy-call-color.svg"
						alt="chipy contact"
					/>
				</div>
			</div>
		</div>
	);
}
