import React from "react";

import { faq, notSure, cards, main } from "@/data/solution";
import FAQ from "@/components/FAQ/FAQ";
import NotSure from "./component/not-sure/NotSure";
import Cards from "./component/cards/Cards";
import Main from "./component/main/Main";

export default function page() {
	return (
		<>
			<Main data={main} />
			<Cards data={cards} />

			<FAQ ques={faq.data}>{faq.heading}</FAQ>

			<NotSure data={notSure} />
		</>
	);
}
