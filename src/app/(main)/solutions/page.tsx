import React from "react";

import { faq, notSure, cards } from "@/data/solution";
import FAQ from "@/components/FAQ/FAQ";
import NotSure from "./component/not-sure/NotSure";
import Cards from "./component/cards/Cards";

export default function page() {
	return (
		<>
			<Cards data={cards} />

			<FAQ ques={faq.data}>{faq.heading}</FAQ>

			<NotSure data={notSure} />
		</>
	);
}
