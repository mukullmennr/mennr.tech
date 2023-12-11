import React from "react";

interface MainContent {
	heading: string;
	text: string;
}

interface MainProps {
	data: MainContent;
}

export default function Main({ data }: MainProps) {
	return (
		<div className="main">
			<div className="container">
				<div className="main-phrase">
					<h1 className="main-phrase__head">{data.heading}</h1>

					<p className="main-phrase__text services">{data.text}</p>
				</div>
			</div>
		</div>
	);
}
