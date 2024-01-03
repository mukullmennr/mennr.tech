import React from "react";
import Link from "next/link";

export default function Main() {
	return (
		<div className="main">
			<div className="container">
				<div className="main-phrase">
					<h1 className="main-phrase__head">
						We&apos;re passionate about helping businesses reach new
						customers online
					</h1>

					<p className="main-phrase__text">
						Lucky for you, online marketing is our forte.
					</p>
				</div>

				<div className="main-buttons">
					<div className="main-buttons__item">
						<Link href="/who-we-help" prefetch={false}>
							Businesses we serve
						</Link>
					</div>

					<div className="main-buttons__item">
						<Link href="/solutions" prefetch={false}>
							Find your marketing solution
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
