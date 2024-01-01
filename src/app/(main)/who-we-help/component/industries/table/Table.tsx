import Image from "next/image";
import React from "react";

interface TableProps {
	data: {
		heading: string;
		column: string[];
		row: string[];
		data: string[][];
	};
}

export default function Table({ data }: TableProps) {
	const columnHead = data.column.map((str) => {
		return (
			<p key={str} className="table-item__head">
				{str}
			</p>
		);
	});

	const rows = data.row.map((str, index) => {
		const rowItems = data.data[index].map((rowStr) => {
			return (
				<p key={rowStr} className="table-item__content">
					{rowStr}
				</p>
			);
		});

		return (
			<div key={str} className="table-item ">
				<p className="table-item__head">{str}</p>
				{rowItems}
			</div>
		);
	});

	return (
		<div className="table">
			<div className="container">
				<div className="table-container">
					<h2>{data.heading}</h2>

					<div className="table-container__table">
						<div className="table-item">
							<Image
								src="/table-arrow.svg"
								alt="arrow"
								width="192"
								height="159"
							/>
							<p></p>
							{columnHead}
						</div>

						{rows}
					</div>
				</div>
			</div>
		</div>
	);
}
