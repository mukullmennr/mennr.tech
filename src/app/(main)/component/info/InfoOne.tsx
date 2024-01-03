import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function InfoOne() {
	return (
		<div className="info-item info-one">
			<div className="container">
				<p>
					If it wasn’t already clear, we add value to local businesses
					across America like yours by making sure your customers can
					find you online. Here’s how we do it.
				</p>
				<p>
					<span>
						We start with an initial consultation where our
						marketing strategist learns about your business,
						including location, customer base, online presence,
						needs, and goals.
					</span>
					<Image
						src="/common/chipy/chipy-meet.svg"
						alt="chipy"
						width="544"
						height="126"
					/>
				</p>
				<p>
					{/* <img src="/common/chipy/chipy-call-color.svg" alt="chipy" /> */}
					<span>
						<Link
							href="/solutions"
							aria-label="What's in the marketing plan?"
							prefetch={false}
						>
							What&apos;s in the marketing plan?
						</Link>
					</span>

					<span>
						Based on your initial consultation, our strategist
						creates a detailed 6-month marketing plan, personalized
						to your business&apos;s needs and goals.
					</span>
				</p>

				<p>
					<span>
						Once we complete your 6-month plan, your strategist
						meets with you, virtually or in-person, to walk you
						through our proposed plan.
					</span>

					<Image
						src="/common/chipy/chipy-group-sitting.svg"
						alt="chipy"
						width="544"
						height="257"
					/>
				</p>
			</div>
		</div>
	);
}
