import { Plus_Jakarta_Sans } from "next/font/google";
import React from "react";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface StepsData {
	heading?: string;
	steps: string[];
	last?: string;
}

interface StepsProps {
	data: StepsData;
	isServices: boolean;
	classname?: string;
}

export default function Steps({ data, isServices, classname }: StepsProps) {
	let even: boolean = data.steps.length % 2 === 0;

	const stepItems = data.steps.map((step, index) => {
		if (!isServices && index === 2) {
			return (
				<pre className={plusJakartaSans.className} key={index}>
					{isServices && <span>{index + 1}.</span>} {step}
				</pre>
			);
		}
		return (
			<p className={plusJakartaSans.className} key={index}>
				{isServices && <span>{index + 1}.</span>} {step}
			</p>
		);
	});

	return (
		<div className={`steps ${classname}`}>
			<div className="container">
				<div className={`steps-container ${classname} `}>
					{data.heading && (
						<h3 className="steps-heading">{data.heading}</h3>
					)}

					<div
						className={`steps-item ${even ? "right" : ""} ${
							!isServices && "industries"
						}`}
					>
						{stepItems}
					</div>

					<h4
						className={`steps-subheading ${
							!isServices && "industries"
						}`}
					>
						{data.last}
					</h4>

					<img
						src="/common/calender/calender-point.svg"
						alt="calender pointer"
					/>
				</div>

				<div className={`chipy-parent ${classname}`}>
					<div className="calender-container" id="calender">
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
