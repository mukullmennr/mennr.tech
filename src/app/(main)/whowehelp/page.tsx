import React from "react";
import Main from "./component/main/Main";
import { whowehelp } from "@/data/ourinfo/externalLinks";
import ExternalLinks from "../component/ourinfo/ExternalLinks";
import { whowehelp as faqs } from "@/data/ourinfo/faq";
import FAQ from "../component/ourinfo/FAQ";

export default function page() {
	return (
		<>
			<Main />
			<ExternalLinks links={whowehelp} />
			<FAQ ques={faqs}>Who We Help FAQs</FAQ>
		</>
	);
}
