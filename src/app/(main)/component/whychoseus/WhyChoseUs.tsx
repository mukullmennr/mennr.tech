import OurCertifications from "@/components/Certifications/OurCertifications";
import React from "react";
import Image from "next/image";
import whyChoseUs from "@/../public/home/whychoseus.jpg";

export default function WhyChoseUs() {
	return (
		<div className="whychoseus">
			<div className="container">
				<div className="whychoseus-text">
					<p>
						You found us, and we can help your customers find you
						online too.
					</p>
				</div>

				<div className="whychoseus-container">
					<OurCertifications>
						<h3>Yes, we&apos;re certified</h3>
					</OurCertifications>

					<div className="whychoseus-container__image">
						{/* <img src="/home/whychoseus.jpg" alt="Why Choose Us" /> */}
						<Image src={whyChoseUs} alt="Why Choose Us" />

						<div className="whychoseus-container__image-more">
							<img src="/home/down.svg" alt="Down arrow" />

							<p>And we&apos;re family owned</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}