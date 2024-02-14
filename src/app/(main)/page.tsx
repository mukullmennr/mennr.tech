import React from "react";
import Main from "./component/main/Main";
import WhyChoseUs from "./component/whychoseus/WhyChoseUs";
import Info from "./component/info/Info";
import Solutions from "./component/solutions/Solutions";
import Chipy from "./component/Newcomponents/Chipy";
import Services from "./component/Newcomponents/Services";
import GetInTouch from "./component/getInTouch/GetInTouch";

export default function Home() {
	return (
		<div>
			{/* <Main />
			<WhyChoseUs />
			<Info />
			<Services />
			<Chipy />
			<Solutions /> */}

			<GetInTouch page="home" type="full" place="bottom" />
		</div>
	);
}
