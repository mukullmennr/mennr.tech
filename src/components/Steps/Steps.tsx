import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	display: "swap",
});

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
				<pre
					className={`${plusJakartaSans.className} steps-item__element`}
					key={index}
				>
					{isServices && <span>{index + 1}.</span>} {step}
				</pre>
			);
		}
		return (
			<p
				className={`${plusJakartaSans.className} steps-item__element`}
				key={index}
			>
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

					<Image
						src="/common/calender/calender-point.svg"
						alt="calender pointer"
						width="192"
						height="293"
					/>
				</div>

				<div className={`chipy-parent ${classname}`}>
					<div className="calender-container" id="calender">
						<iframe
							src="https://meetings.hubspot.com/luca-veneziano?embed=true"
							frameBorder="0"
							loading="lazy"
							title="meeting-calander"
							width="792"
							height="690"
						></iframe>
					</div>

					<Image
						src="/common/chipy/chipy-call-color.svg"
						alt="chipy contact"
						width="200"
						height="210"
					/>
				</div>
			</div>
		</div>
	);
}
