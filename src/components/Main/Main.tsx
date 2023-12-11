import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { BreadCrumbContent } from "../Breadcrumb/Breadcrumb";

interface MainContent {
	heading: string;
	text: string;
}

interface MainProps {
	data: MainContent;
	breadcrumb: BreadCrumbContent;
}

export default function Main({ data, breadcrumb }: MainProps) {
	return (
		<div className="main">
			<Breadcrumb data={breadcrumb} />
			<div className="container">
				<div className="main-phrase">
					<h1 className="main-phrase__head">{data.heading}</h1>

					<p className="main-phrase__text services">{data.text}</p>
				</div>
			</div>
		</div>
	);
}
