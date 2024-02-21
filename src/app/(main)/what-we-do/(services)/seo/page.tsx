import React from "react";
import Main from "@/components/Main/Main";
import { main, breadcrumb, confused } from "@/data/services/seo/data";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import GetInTouch from "@/components/getInTouch/GetInTouch";
import Confused from "../../component/confused/Confused";

export default function page() {
	return (
		<div className="services-container">
			<Main data={main} breadcrumb={breadcrumb} />

			<GetInTouch linkPrefix="seo-" type="normal" place="normal" />

			<Confused data={confused}>
				<Breadcrumb data={breadcrumb} />
			</Confused>
		</div>
	);
}
