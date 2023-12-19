import React from "react";
import Main from "./component/main/Main";
import { whowehelp } from "@/data/ourinfo/externalLinks";
import ExternalLinks from "../component/ourinfo/ExternalLinks";
import { whowehelp as faqs } from "@/data/ourinfo/faq";
import FAQ from "../../../components/FAQ/FAQ";

export default function page() {
	return (
		<>
			<Main />

			<div className="who-we-help-chipy container">
				<img src="/common/chipy/chipy-who-we-help.svg" alt="chipy" />
			</div>

			<ExternalLinks links={whowehelp} />
			<FAQ ques={faqs}>Who We Help FAQs</FAQ>
		</>
	);
}
