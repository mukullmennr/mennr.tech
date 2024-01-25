import React, { useState } from "react";
import styles from "./compare-table.module.scss";

import { table as tableContent } from "@/data/solution";

const options = [
	{ value: "one", label: "1. Mennr Digital Presence Bundle" },
	{ value: "two", label: "2. Organic Marketing Bundle" },
	{
		value: "three",
		label: "3. Paid Marketing Bundle (Google & Social Media)",
	},
	{ value: "four", label: "4. The Mennr Advantages Bundle" },
	{ value: "five", label: "5. HubSpot Integration" },
];

interface TableItemsProps {
	table: number;
}

function TableItems({ table }: TableItemsProps) {
	const { services } = tableContent[table];

	const service = services.map((service, index) => {
		let isLast = index === services.length - 1;

		return (
			<div
				data-last={`${isLast ? "true" : ""}`}
				className={styles.tableRow}
				key={service.name}
			>
				<div data-left="true">{service.name}</div>

				<div>
					<ul>
						{service.silver.map((item) => {
							return <li key={item}>{item}</li>;
						})}
					</ul>
				</div>

				<div>
					{service.gold.text && (
						<p
							style={{
								fontWeight: "600",
								marginBlockEnd: ".5em",
							}}
						>
							{service.gold.text}
						</p>
					)}
					<ul>
						{service.gold.services.map((item) => {
							return <li key={item}>{item}</li>;
						})}
					</ul>
				</div>
			</div>
		);
	});

	return <div className={styles.tableContainer}>{service}</div>;
}

export default function CompareTable() {
	const [selectedBundle, setSelectedBundle] = useState("one");

	const table = () => {
		switch (selectedBundle) {
			case "one":
				return <TableItems table={0} />;

			case "two":
				return <TableItems table={1} />;

			case "three":
				return <TableItems table={2} />;

			case "four":
				return <TableItems table={3} />;

			case "five":
				return <TableItems table={4} />;
		}
	};

	return (
		<div className={styles.table}>
			<div className={styles.selectContainer}>
				<select
					className={styles.select}
					value={selectedBundle}
					onChange={(e) => setSelectedBundle(e.target.value)}
				>
					{options.map((option) => {
						return (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						);
					})}
				</select>
			</div>

			<div className={styles.tableContent}>{table()}</div>
		</div>
	);
}
