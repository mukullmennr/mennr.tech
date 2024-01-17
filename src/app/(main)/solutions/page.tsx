import React from "react";

import { faq, notSure } from "@/data/solution";
import FAQ from "@/components/FAQ/FAQ";
import NotSure from "./component/not-sure/NotSure";

export default function page() {
	return (
		<>
			<FAQ ques={faq.data}>{faq.heading}</FAQ>

			<NotSure data={notSure} />
		</>
	);
}
