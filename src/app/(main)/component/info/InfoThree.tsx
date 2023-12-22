import React from "react";
import Image from "next/image";
import collabTeam from "@/../public/home/whychoseus.jpg";
import ArrowUp from "@/../public/home/info-up.svg";

export default function InfoThree() {
	return (
		<div className="info-item info-three">
			<div className="container">
				{/* <p>
					Typically our work starts with designing and developing a
					website that attracts new business, not scare it away. From
					there we move onto establishing or refreshing the businesses
					social media and reviews presence before we get started with
					the advertising campaigns to make sure we put the businesses
					best face forward.
				</p> */}

				<div className="info-child">
					<div className="info-child__image">
						{/* <img src="/home/whychoseus.jpg" alt="collab team" /> */}
						{/* <Image src={collabTeam} alt="collab team" /> */}
						{/* <img
							src="/common/chipy/chipy-celebrating.svg"
							alt="chipy"
						/> */}
					</div>

					<p>
						That’s why our team of certified marketing strategists
						have a diverse set of skills to help small businesses
						like yours reach customers online.
					</p>
				</div>

				{/* <div className="info-point">
					<img src="/home/info-up.svg" alt="arrow up" />

					<p>Find out why we are so meticulous</p>
				</div> */}

				<div className="info-chipy">
					{/* <img src="/common/chipy/chipy-salute.svg" alt="chipy" /> */}
				</div>
			</div>
		</div>
	);
}
