import React from "react";
import Link from "next/link";

interface BreadCrumbItem {
	text: string;
	link: string;
}

export interface BreadCrumbContent {
	home: BreadCrumbItem;
	our: string;
	prev: BreadCrumbItem;
	next: BreadCrumbItem;
}

interface BreadcrumbProps {
	data: BreadCrumbContent;
}

export default function Breadcrumb({ data }: BreadcrumbProps) {
	return (
		<div className="breadcrumb container">
			<div className="breadcrumb-parent">
				<Link href={data.home.link}>{data.home.text}</Link>
				{" > "}
				<p>{data.our}</p>
			</div>

			<div className="breadcrumb-others">
				<Link href={data.prev.link}>
					{"<<"}
					{data.prev.text}
				</Link>

				<Link href={data.next.link}>
					{data.next.text}
					{">>"}
				</Link>
			</div>
		</div>
	);
}
