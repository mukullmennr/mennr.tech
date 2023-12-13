import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface ImportanceProps {
	data: {
		heading: string;
		steps: string[];
		button: string;
	};
}

export default function Importance({ data }: ImportanceProps) {
	const steps = data.steps.map((step) => {
		return (
			<div key={step}>
				<p>{step}</p>
			</div>
		);
	});

	return (
		<div className="industries-importance">
			<div className="container">
				<h3 className="industries-importance__heading">
					{data.heading}
				</h3>

				<div className="industries-importance__steps">{steps}</div>

				<Link href="/">
					{data.button}
					<FontAwesomeIcon icon={faAngleDown} />
				</Link>
			</div>
		</div>
	);
}
