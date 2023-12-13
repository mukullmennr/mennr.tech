import React from "react";
import {
	breadcrumb,
	main,
	faq,
	steps,
	quote,
} from "@/data/industries/landscaping-business/sub-industries/pest-control/data";
import Main from "@/app/(main)/who-we-help/component/industries/main/Main";
import FAQ from "@/components/FAQ/FAQ";
import Steps from "@/components/Steps/Steps";
import Quote from "@/app/(main)/who-we-help/component/industries/quote/Quote";

export default function page() {
	return (
		<>
			<Main data={main} breadcrumb={breadcrumb} />
			<Quote content={quote} />
			<Steps data={steps} isServices={false} classname="webde" />
			<FAQ ques={faq.data}>{faq.heading}</FAQ>
		</>
	);
}
