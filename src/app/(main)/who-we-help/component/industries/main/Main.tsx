import React from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {
	BreadCrumbContent,
	BreadCrumbItem,
} from "@/components/Breadcrumb/Breadcrumb";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface MainContent {
	heading: string;
	subIndustries: BreadCrumbItem[];
	img: string;
}

interface MainContentProps {
	data: MainContent;
	breadcrumb: BreadCrumbContent;
}

export default function Main({ data, breadcrumb }: MainContentProps) {
	const links = data.subIndustries.map((subindustry) => {
		return (
			<Link key={subindustry.text} href={subindustry.link}>
				{subindustry.text}
				<span>
					<FontAwesomeIcon icon={faAngleRight} />
				</span>
			</Link>
		);
	});

	return (
		<div className="industries-main">
			<Breadcrumb data={breadcrumb} />

			<div className="container">
				<div className="industries-main__element">
					<h1 className="heading">{data.heading}</h1>

					<div className="links">{links}</div>
				</div>

				<div className="industries-main__element image">
					<img src={data.img} />
				</div>
			</div>
		</div>
	);
}
