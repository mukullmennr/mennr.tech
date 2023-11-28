import React from "react";
import Link from "next/link";

export default function Main() {
	return (
		<div className="main">
			<div className="container">
				<div className="main-phrase">
					<h1 className="main-phrase__head">
						We&apos;e passionate about helping businesses succeed
						online
					</h1>

					<p className="main-phrase__text">
						Lucky for you, online marketing is our forte.
					</p>
				</div>

				<div className="main-buttons">
					<div className="main-buttons__item">
						<Link href="/">Watch a quick video</Link>
					</div>

					<div className="main-buttons__item">
						<Link href="/">Get a quote in 5 minutes</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
