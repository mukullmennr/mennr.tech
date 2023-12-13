import React from "react";
import {
	breadcrumb,
	main,
} from "@/data/industries/automotive-businesses/sub-industries/service-shops/data";
import Main from "@/app/(main)/who-we-help/component/industries/main/Main";

export default function page() {
	return (
		<>
			<Main data={main} breadcrumb={breadcrumb} />
		</>
	);
}