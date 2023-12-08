import React from "react";

interface InfoDataItem {
	head: string;
	text: string;
}

type InfoDataContainer = InfoDataItem[];

interface InfoData {
	heading: string;
	info: InfoDataContainer[];
}

interface InfoDataProps {
	data: InfoData;
}

export default function Info({ data }: InfoDataProps) {
	const items = data.info.map((item, index) => {
		let subitems = item.map((subitem, ind) => {
			return (
				<div key={`${ind}${index}`} className="services-items__element">
					<div>
						<h4 className="services-items__element-head">
							{subitem.head}
						</h4>
					</div>

					<p className="services-items__element-text">
						{subitem.text}
					</p>
				</div>
			);
		});

		return (
			<div key={index} className="services-items">
				{subitems}
			</div>
		);
	});

	return (
		<div className="services-info">
			<div className="container">
				<h3 className="services-info__heading">{data.heading}</h3>

				<div className="services-info__content">{items}</div>
			</div>
		</div>
	);
}
