"use client";

import React from "react";

import {
	faq,
	notSure,
	cards,
	main,
	road,
	getInTouch,
	pricing,
} from "@/data/solution";
import FAQ from "@/components/FAQ/FAQ";
import NotSure from "./component/not-sure/NotSure";
import Cards from "./component/cards/Cards";
import Main from "./component/main/Main";
import Road from "./component/road/Road";
import GetInTouch from "@/components/getInTouch/GetInTouch";
import Pricing from "./component/pricing/Pricing";

export default function page() {
	return (
		<div className="solution-container">
			<Main data={main} />

			<Road data={road} />

			<Cards data={cards} />

			<Pricing data={pricing} />

			<GetInTouch page="solutions" type="normal" place="normal" />

			<FAQ ques={faq.data}>{faq.heading}</FAQ>

			<NotSure data={notSure} />
		</div>
	);
}
