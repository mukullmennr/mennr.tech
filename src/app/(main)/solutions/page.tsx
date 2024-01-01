import React from "react";

import { faq, steps, plans } from "@/data/solution";
import Main from "./component/main/Main";
import FAQ from "@/components/FAQ/FAQ";
import Steps from "@/components/Steps/Steps";
import Plans from "./component/plans/Plans";

export default function page() {
	return (
		<>
			<Main />
			<Plans data={plans} />
			<Steps
				data={steps}
				isServices={false}
				classname="solutions-steps"
			/>
			<FAQ ques={faq.data}>{faq.heading}</FAQ>
		</>
	);
}
