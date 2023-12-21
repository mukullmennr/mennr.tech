"use client";

import React from "react";
import Image from "next/image";
import collabTeam from "@/../public/home/whychoseus.jpg";
import arrrowDown from "@/../public/home/info-down.svg";
import { useRouter } from "next/navigation";
export default function InfoTwo() {
	const router = useRouter();

	const handleSolution = () => {
		router.push("/solutions");
	};

	return (
		<div className="info-item info-two">
			<div className="container">
				<div className="info-child">
					<div className="info-child__image">
						{/* <img src="/home/whychoseus.jpg" alt="collab team" /> */}
						{/* <Image src={collabTeam} alt="collab team" /> */}
						<img src="/common/chipy/chipy-board.svg" alt="chipy" />
					</div>

					<p>
					Once you’re satisfied, we waste no time and immediately get to work building up your online presence. 
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
					<button onClick={handleSolution} aria-label="Go to solution">
						What&apos;s in the marketing plan? 
					</button>
				</div>

				<p>
				We craft our marketing strategies to fit your business, supporting you for both immediate and long-term success.
				</p>
			</div>
		</div>
	);
}
