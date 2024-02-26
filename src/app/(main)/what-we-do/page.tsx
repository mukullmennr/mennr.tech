import React from "react";
import Main from "./component/main/Main";
import { whatwedo } from "@/data/ourinfo/externalLinks";
import ExternalLinks from "../component/ourinfo/ExternalLinks";
import FAQ from "../../../components/FAQ/FAQ";
import { whatwedo as faqs } from "@/data/ourinfo/faq";
import Image from "next/image";
export default function page() {
	return (
		<>
			<Main />
			<div className="who-we-help-chipy container">
				<Image
					src="/common/chipy/chipy-what-we-do.svg"
					alt="chipy"
					width="1120"
					height="191"
				/>
			</div>
			<ExternalLinks links={whatwedo} linkText="For Local Businesses" />
			{/* <FAQ ques={faqs}>What We Do FAQs</FAQ> */}
			<div style={{ marginBlockEnd: "8em" }}></div>
		</>
	);
}
