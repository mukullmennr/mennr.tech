import Image from "next/image";
import React from "react";

export default function Solutions() {
	return (
		<div className="solutions whoweare-solutions">
			<div className="container">
				<p className="solutions-pcard">
					As a full-service digital marketing firm, Mennr works with
					our partners to build their businesses for the Digital Age.
				</p>
				<p className="solutions-pcard">
					The tactics we use aren&apos; magic, they&apos;re proven
					methods that have worked for us and thousands of other local
					small businesses.
					<Image
						src="/common/chipy/chipy-sitting.svg"
						alt="chipy sitting"
						width="180"
						height="170"
					/>
				</p>
				<p className="solutions-pcard">
					When you work with Mennr, you&apos;re not only working with
					a marketing team certified by Google, HubSpot, and Meta.
					You&apos;re working with a team that understands the
					dynamics of a local family business.
					<Image
						src="/common/chipy/chipy-salute.svg"
						alt="chipy salute"
						width="180"
						height="188"
					/>
				</p>
			</div>
		</div>
	);
}
