import React from "react";
import {
	breadcrumb,
	main,
	faq,
	steps,
	quote,
} from "@/data/industries/personal-care-businesses/sub-industries/barbers/data";
import Main from "@/app/(main)/who-we-help/component/industries/main/Main";
import FAQ from "@/components/FAQ/FAQ";
import Steps from "@/components/Steps/Steps";
import Quote from "@/app/(main)/who-we-help/component/industries/quote/Quote";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Card from "@/app/(main)/who-we-help/component/industries/card/Card";
import TabSection from "@/app/(main)/who-we-help/component/industries/tabs/Tabs";

export default function page() {
	return (
		<>
			<Main data={main} breadcrumb={breadcrumb} />
			<Quote content={quote} />
			<TabSection />
			<Card />
			<Steps data={steps} isServices={false} classname="sub-industries" />
			<FAQ ques={faq.data}>{faq.heading}</FAQ>
			<Breadcrumb position="bottom" color="dark" data={breadcrumb} />
		</>
	);
}
