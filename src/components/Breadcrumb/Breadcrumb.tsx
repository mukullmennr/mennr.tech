import React from "react";
import Link from "next/link";

export interface BreadCrumbItem {
	text: string;
	link: string;
}

export interface BreadCrumbContent {
	home: BreadCrumbItem;
	our: string;
	prev?: BreadCrumbItem;
	next?: BreadCrumbItem;
}

interface BreadcrumbProps {
	data: BreadCrumbContent;
	classname?: string;
}

export default function Breadcrumb({ data, classname }: BreadcrumbProps) {
	return (
		<div className={`breadcrumb container ${classname}`}>
			<div className="breadcrumb-parent">
				<Link href={data.home.link}>{data.home.text}</Link>
				{" > "}
				<p>{data.our}</p>
			</div>

			{data.prev && data.next && (
				<div className="breadcrumb-others">
					{data.prev.text.length > 0 && (
						<Link href={data.prev.link}>
							{"<<"}
							{data.prev.text}
						</Link>
					)}

					{data.next.text.length > 0 && (
						<Link href={data.next.link}>
							{data.next.text}
							{">>"}
						</Link>
					)}
				</div>
			)}
		</div>
	);
}
