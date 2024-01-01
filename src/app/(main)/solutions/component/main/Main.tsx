import Image from "next/image";
import React from "react";

export default function Main() {
	return (
		<div className="solutions-main">
			<div className="container">
				<div>
					<h1 className="solutions-main__text">
						Marketing solutions aren’t one size fits all
					</h1>
				</div>

				<Image
					src="/common/chipy/chipy-hands-up-standing.svg"
					alt="chipy"
					width="209"
					height="220"
				/>

				<div>
					<h1 className="solutions-main__text">
						That’s why we take the time to build personalized
						marketing plans for all of our partners
					</h1>
				</div>
			</div>
		</div>
	);
}
