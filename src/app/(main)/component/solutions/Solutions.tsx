import React from "react";
import SolutionsInfo from "./SolutionsInfo";
import Link from "next/link";

export default function Solutions() {
	return (
		<div className="solutions">
			{/* carousel */}
			{/* <SolutionsCarousel /> */}

			{/* <div className="solutions-services">
				<Link href="/what-we-do">See how we grow your business</Link>
			</div> */}

			<SolutionsInfo />
		</div>
	);
}
