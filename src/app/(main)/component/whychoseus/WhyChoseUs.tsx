import OurCertifications from "@/components/Certifications/OurCertifications";
import React from "react";
import Image from "next/image";

export default function WhyChoseUs() {
	return (
		<div className="whychoseus">
			<div className="container">
				<div className="whychoseus-text">
					<p className="whychoseus-text1">You found us,</p>
					<p className="whychoseus-text2">
						and we can help your customers find you online too.
					</p>
				</div>

				<div className="whychoseus-container">
					<OurCertifications>
						<h3>Yes, we&apos;re certified</h3>
					</OurCertifications>

					<div className="whychoseus-container__image">
						<Image
							src="/home/whychoseus.WebP"
							alt="Why Choose Us"
							width="544"
							height="363"
						/>

						<div className="whychoseus-container__image-more">
							<Image
								src="/home/down.svg"
								alt="Down arrow"
								width="41"
								height="94"
							/>

							<p>And we&apos;re family owned</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
