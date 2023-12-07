import React from "react";
import Main from "./component/main/Main";
import Guide from "./component/guide/Guide";
import Comparison from "./component/comparison/Comparison";
import { faq } from "@/data/services/websitedesignanddevelopment/data";
import FAQ from "@/app/(main)/component/ourinfo/FAQ";

export default function page() {
	return (
		<>
			<Main />
			<Guide />
			<Comparison />
			<FAQ ques={faq}>Home Services Business Marketing FAQs</FAQ>
		</>
	);
}
