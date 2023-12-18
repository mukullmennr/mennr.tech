import React from "react";
import SolutionsCarousel from "./SolutionsCarousel";
import SolutionsInfo from "./SolutionsInfo";
import Link from "next/link";

export default function Solutions() {
	return (
		<div className="solutions">
			<SolutionsInfo />

			{/* carousel */}
			<SolutionsCarousel />

			<div className="solutions-services">
				<Link href="/what-we-do">See all our services</Link>
			</div>
		</div>
	);
}
