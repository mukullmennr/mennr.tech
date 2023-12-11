import React from "react";
import {
	breadcrumb,
	faq,
	main,
} from "@/data/industries/personal-care-businesses/data";
import FAQ from "@/components/FAQ/FAQ";
import Main from "../../component/industries/main/Main";

export default function page() {
	return (
		<>
			<Main data={main} breadcrumb={breadcrumb} />
			<FAQ ques={faq.data}>{faq.heading}</FAQ>
		</>
	);
}
