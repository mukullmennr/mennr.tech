import React from "react";
import {
	main,
	breadcrumb,
	confused,
	content,
	cards,
	strategy,
	faq,
} from "@/data/services/seo/data";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import GetInTouch from "@/components/getInTouch/GetInTouch";
import Confused from "../../component/services/confused/Confused";
import Main from "../../component/services/main/Main";
import Content from "../../component/services/content/Content";
import Cards from "../../component/services/cards/Cards";
import Strategy from "../../component/services/strategy/Strategy";
import FAQ from "@/components/FAQ/FAQ";

export default function page() {
	return (
		<div className="services-container">
			<Main data={main}>
				<Breadcrumb data={breadcrumb} />
			</Main>

			<Strategy data={strategy} />

			<Content data={content} />

			<Cards data={cards} />

			<GetInTouch linkPrefix="seo-" type="normal" place="normal" />

			<FAQ ques={faq.data}>{faq.heading}</FAQ>

			<Confused data={confused}>
				<Breadcrumb data={breadcrumb} />
			</Confused>
		</div>
	);
}
