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
	const steps = data.steps.map((step, index) => {
		if (index === 8) {
			return (
				<div key={step} className="chipy-rocket">
					<p>{step}</p>

					<img src="/common/chipy/chipy-rocket.svg" alt="chipy" />
				</div>
			);
		}

		if (index === 9) {
			return (
				<div key={step} className="chipy-sitting">
					<p>{step}</p>

					<img
						src="/common/chipy/chipy-sitting.svg"
						width={128}
						alt="chipy"
					/>
				</div>
			);
		}

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

				<Link href="#industry-getintouch">
					{data.button}
					<FontAwesomeIcon icon={faAngleDown} />
				</Link>
			</div>
		</div>
	);
}
