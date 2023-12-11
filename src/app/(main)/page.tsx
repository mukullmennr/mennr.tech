import React from "react";
import Main from "./component/main/Main";
import WhyChoseUs from "./component/whychoseus/WhyChoseUs";
import Info from "./component/info/Info";
import Solutions from "./component/solutions/Solutions";

export default function Home() {
	return (
		<>
			<Main />
			<WhyChoseUs />
			<Info />
			<Solutions />
		</>
	);
}
