import React from "react";
import { number } from "@/data/contact";
import Link from "next/link";

export default function SolutionsInfo() {
	return (
		<div className="solutions-info">
			<div className="container">
				<div className="solutions-info__item intro">
					<Link href="/solutions">Find a solution that fits your needs</Link>

					<p className="solutions-pcard">
						Think of us as your tech-savy cousin. Able to answer any
						of your marketing questions.
					</p>
					<p className="solutions-pcard">
						And just like your cousin, you can call us at anytime
						and we&apos;ll be happy to help with anything!
						<img
							src="/common/chipy/chipy-phone.svg"
							alt="chipy sitting"
							className="chipy"
						/>
					</p>
				</div>

				<div className="solutions-info__item card">
					<h3>
						Take your first step into the Digital Age with Mennr.
					</h3>

					<div>
						<Link href="/solutions/#calender">Contact Us!</Link>
					</div>

					<img
						src="/common/chipy/chipy-sitting.svg"
						alt="chipy sitting"
						className="chipy"
					/>
				</div>

				<div className="solutions-info__item guide">
					<p className="solutions-pcard">
						And for those who want to learn more about what exactly
						we do.
						<img
							className="arrow-pc"
							src="/home/solutions/solutions-down-pc.svg"
							alt="line_pointing_down"
						/>
					</p>
					<p className="solutions-pcard">
						Checkout our marketing services pages where we explain
						everything from Paid Ads to Social Media Management with
						no jargon.
					</p>

					<img
						className="arrow-mobile"
						src="/home/solutions/solutions-down-mobile.svg"
						alt="line_pointing_down"
					/>
				</div>
			</div>
		</div>
	);
}
