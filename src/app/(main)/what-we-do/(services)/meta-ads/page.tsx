import React from "react";
import Main from "@/components/Main/Main";
import Guide from "@/components/Guide/Guide";
import Comparison from "@/components/Comparison/Comparison";
import {
	faq,
	steps,
	comparison,
	guide,
	info,
	main,
	breadcrumb,
} from "@/data/services/meta-ads/data";
import FAQ from "@/components/FAQ/FAQ";
import Steps from "@/components/Steps/Steps";
import Info from "@/components/Info/Info";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

export default function page() {
	return (
		<>
			<Main data={main} breadcrumb={breadcrumb} />
			<Guide data={guide} />
			<Comparison data={comparison} />
			<Info data={info} />
			<Steps data={steps} isServices={true} classname="meta" />
			<FAQ ques={faq.data}>{faq.heading}</FAQ>
			<Breadcrumb classname="bottom" data={breadcrumb} />
		</>
	);
}
