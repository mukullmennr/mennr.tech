import React from "react";
import {
	breadcrumb,
	faq,
	main,
	importance,
	getInTouch,
	table,
	yourCertifications,
} from "@/data/industries/skilled-trades-businesses/data";
import FAQ from "@/components/FAQ/FAQ";
import Main from "../../component/industries/main/Main";
import Importance from "../../component/industries/importance/Importance";
import GetInTouch from "../../component/industries/get-in-touch/GetInTouch";
import Table from "../../component/industries/table/Table";
import Certification from "../../component/industries/certification/Certification";

export default function page() {
	return (
		<>
			<Main data={main} breadcrumb={breadcrumb} />
			<Importance data={importance} />
			<Certification data={yourCertifications} />
			<Table data={table} />
			<GetInTouch data={getInTouch} />
			<FAQ ques={faq.data}>{faq.heading}</FAQ>
		</>
	);
}
