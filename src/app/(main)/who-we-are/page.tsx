import React from "react";
import Main from "./component/main/Main";
import Solutions from "./component/solutions/Solutions";
import Schedule from "./component/Schedule/Schedule";
import Certifications from "./component/certifications/Certifications";

export default function page() {
	return (
		<>
			<Main />
			<Solutions />
			<Schedule />
			<Certifications />
		</>
	);
}
