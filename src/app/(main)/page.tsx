import React from "react";

import { awards, honeyComb, road, hero } from "@/data/home/data";
import GetInTouch from "@/components/getInTouch/GetInTouch";
import Road from "./component/road/Road";
import HoneyComb from "./component/honeycomb/HoneyComb";
import Awards from "./component/awards/Awards";
import Main from "./component/main/Main";

export default function Home() {
	return (
		<div className="home-container">
			<Main data={hero} />

			<Road data={road} />

			<Awards data={awards} />

			<HoneyComb data={honeyComb} />

			<GetInTouch linkPrefix="hp-" type="full" place="bottom" />
		</div>
	);
}
