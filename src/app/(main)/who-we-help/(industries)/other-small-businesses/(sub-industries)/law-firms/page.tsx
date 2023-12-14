import React from "react";
import {
	breadcrumb,
	main,
} from "@/data/industries/other-small-businesses/sub-industries/law-firms/data";
import Main from "@/app/(main)/who-we-help/component/industries/main/Main";

export default function page() {
	return (
		<>
			<Main data={main} breadcrumb={breadcrumb} />
		</>
	);
}