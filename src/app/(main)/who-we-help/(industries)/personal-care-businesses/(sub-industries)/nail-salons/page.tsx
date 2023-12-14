import React from "react";
import {
	breadcrumb,
	main,
} from "@/data/industries/personal-care-businesses/sub-industries/nail-salons/data";
import Main from "@/app/(main)/who-we-help/component/industries/main/Main";

export default function page() {
	return (
		<>
			<Main data={main} breadcrumb={breadcrumb} />
		</>
	);
}