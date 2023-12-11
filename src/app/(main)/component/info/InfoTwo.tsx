import React from "react";
import Image from "next/image";
import collabTeam from "@/../public/home/whychoseus.jpg";
import arrrowDown from "@/../public/home/info-down.svg";

export default function InfoTwo() {
	return (
		<div className="info-item info-two">
			<div className="container">
				<div className="info-child">
					<div className="info-child__image">
						{/* <img src="/home/whychoseus.jpg" alt="collab team" /> */}
						<Image src={collabTeam} alt="collab team" />
					</div>

					<p>
						Our specialist meets with you (virtually or in person)
						to review the 6 month plan. There we cover our growth
						strategy with you in detail, making sure that you are
						following every step of the way.
					</p>

					{/* <img
						className="img-arrow"
						src="/home/info-down.svg"
						alt="arrow down"
					/> */}

					<Image
						className="img-arrow"
						src={arrrowDown}
						alt="arrow down"
					/>
				</div>

				<div className="info-button">
					<button>What&apos;s in the growth strategy?</button>
				</div>

				<p>
					After reviewing the 6 month plan, and ensuring you and the
					rest of the family are satisfied with our projections, we
					sign some paperwork and begin our work immediately.
				</p>
			</div>
		</div>
	);
}
