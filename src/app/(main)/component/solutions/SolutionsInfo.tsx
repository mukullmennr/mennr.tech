import React from "react";
import { number } from "@/data/contact";
import Link from "next/link";

export default function SolutionsInfo() {
	return (
		<div className="solutions-info">
			<div className="container">
				<div className="solutions-info__item intro">
					<Link href="/">Find a solution that fits your needs</Link>

					<p>
						Think of us as your tech-savy cousin. Able to answer any
						of your marketing questions.
					</p>
					<p>
						And just like your cousin, you can call us at anytime
						and we&apos;ll be happy to help with anything!
					</p>
				</div>

				<div className="solutions-info__item card">
					<h3>
						Take your first step into the Digital Age with Mennr.
					</h3>

					<div>
						<a href={`tel:${number}`}>Contact Us!</a>
					</div>
				</div>

				<div className="solutions-info__item guide">
					<p>
						And for those who want to learn more about what exactly
						we do.
					</p>
					<p>
						Checkout our marketing services pages where we explain
						everything from Paid Ads to Social Media Management with
						no jargon.
						<img
							className="arrow-pc"
							src="/home/solutions/solutions-down-pc.svg"
						/>
					</p>

					<img
						className="arrow-mobile"
						src="/home/solutions/solutions-down-mobile.svg"
					/>
				</div>
			</div>
		</div>
	);
}
