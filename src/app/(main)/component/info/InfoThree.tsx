import React from "react";
import Image from "next/image";
import collabTeam from "@/../public/home/whychoseus.jpg";
import ArrowUp from "@/../public/home/info-up.svg";

export default function InfoThree() {
	return (
		<div className="info-item info-three">
			<div className="container">
				<p>
					Typically our work starts with designing and developing a
					website that attracts new business, not scare it away. From
					there we move onto establishing or refreshing the businesses
					social media and reviews presence before we get started with
					the advertising campaigns to make sure we put the businesses
					best face forward.
				</p>

				<div className="info-child">
					<div className="info-child__image">
						{/* <img src="/home/whychoseus.jpg" alt="collab team" /> */}
						<Image src={collabTeam} alt="collab team" />
					</div>

					<p>
						But every business has unique needs and there&apos;s not
						a one size fits all marketing strategy. Budget,
						location, what you sell, all of these play critical
						roles in determining an effective strategy to
						successfully finding new business through the power of
						the internet.
					</p>
				</div>

				<div className="info-point">
					{/* <img src="/home/info-up.svg" alt="arrow up" /> */}
					<Image src={ArrowUp} alt="arrow up" />

					<p>Find out why we are so meticulous</p>
				</div>
			</div>
		</div>
	);
}
