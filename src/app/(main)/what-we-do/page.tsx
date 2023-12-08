import React from "react";
import Main from "./component/main/Main";
import { whatwedo } from "@/data/ourinfo/externalLinks";
import ExternalLinks from "../component/ourinfo/ExternalLinks";
import FAQ from "../../../components/FAQ/FAQ";
import { whatwedo as faqs } from "@/data/ourinfo/faq";

export default function page() {
	return (
		<>
			<Main />
			<ExternalLinks links={whatwedo} />
			<FAQ ques={faqs}>What We Do FAQs</FAQ>
		</>
	);
}
