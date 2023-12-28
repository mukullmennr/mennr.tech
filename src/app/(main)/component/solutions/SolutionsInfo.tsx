import React from "react";
import { number } from "@/data/contact";
import Link from "next/link";

export default function SolutionsInfo() {
	return (
		<div className="solutions-info">
			<div className="container">
				<div className="solutions-info__item intro">
					{/* <Link href="/solutions">
						Find a solution that fits your needs
					</Link> */}

					<p className="solutions-pcard">
						Think of us as your tech-savy cousin. Able to answer any
						of your marketing questions.
					</p>
					<p className="solutions-pcard">
						And just like your cousin, you can call us at anytime
						and we&apos;ll be happy to help with anything!
						<img
							src="/common/chipy/chipy_laptop.svg"
							alt="chipy sitting"
							className="chipy"
						/>
					</p>
				</div>

				<div className="solutions-info__item card">
					<h3>
						Discover marketing solutions that fit your businesses
						needs and goals.
					</h3>

					<div>
						<Link href="/solutions/#typeform">Find your strategy!</Link>
					</div>

					<img
						src="/common/chipy/chipy-sitting.svg"
						alt="chipy sitting"
						className="chipy"
					/>
				</div>

				{/* <div className="solutions-info__item guide">
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
				</div> */}

				<div className="solutions-info__item home-solution__chipy">
					<h3>
						Or schedule a consultation with one of our certified
						marketing strategists to get started!
					</h3>

					<img
						src="/home/home-solution-arrow-down.svg"
						alt="arrow-down"
					/>

					<div className="chipy-parent">
						<div className="calender-container" id="getstarted">
							<iframe
								src="https://meetings.hubspot.com/luca-veneziano?embed=true"
								frameBorder="0"
								loading="lazy"
								title="meeting-calander"
							></iframe>
						</div>

						<img
							src="/common/chipy/chipy-call-color.svg"
							alt="chipy contact"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
