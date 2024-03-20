import GetInTouch from "@/components/getInTouch/GetInTouch";
import React from "react";

import { main, services } from "@/data/what-we-do/data";
import Main from "./component/main/Main";
import List from "./component/list/List";

const WhatWeDo = () => {
	return (
		<div className="whatWeDo-container">
			<Main data={main} />

			<List data={services} />

			<GetInTouch
				linkPrefix="services_main-"
				type="full"
				place="bottom"
			/>
		</div>
	);
};

export default WhatWeDo;
