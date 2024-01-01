import React from "react";
import Main from "./component/main/Main";
import { whowehelp } from "@/data/ourinfo/externalLinks";
import ExternalLinks from "../component/ourinfo/ExternalLinks";
import { whowehelp as faqs } from "@/data/ourinfo/faq";
import FAQ from "../../../components/FAQ/FAQ";
import Image from "next/image";

export default function page() {
	return (
		<>
			<Main />

			<div className="who-we-help-chipy container">
				<Image
					src="/common/chipy/chipy-who-we-help.svg"
					alt="chipy"
					width="1120"
					height="191"
				/>
			</div>

			<ExternalLinks links={whowehelp} linkText="How We Help"/>
			<FAQ ques={faqs}>Who We Help FAQs</FAQ>
		</>
	);
}
