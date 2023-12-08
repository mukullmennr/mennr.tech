import React from "react";

interface ComparisonData {
	heading: string;
	correct: string;
	wrong: string;
}

interface ComparisonProps {
	data: ComparisonData;
}

export default function Comparison({ data }: ComparisonProps) {
	return (
		<div className="comparison">
			<img
				src="/common/chipy/chipy-sitting-handsup.svg"
				alt="chipy sitting handsup"
			/>
			<div className="container">
				<h3 className="comparison-heading">{data.heading}</h3>

				<div className="comparison-circles">
					<div className="comparison-circles__item">
						<p>{data.correct}</p>
					</div>
					<div className="comparison-circles__item">
						<p>{data.wrong}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
