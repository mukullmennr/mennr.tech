import React from "react";
import Image from "next/image";
import GooglePartner from "@/../public/common/googlepartner.png";
import Hubspot from "@/../public/common/hubspot.png";
import Yext from "@/../public/common/yext.png";

interface CertificationProps {
	data: string[];
}

export default function Certification({ data }: CertificationProps) {
	const images = data.map((image) => {
		return (
			<div key={image} className="industries-image__container">
				<img src={image} />
			</div>
		);
	});

	return (
		<div className="industries-certification">
			<div className="container">
				<div className="industries-certification__yours">
					<img src="/common/chipy/chipy-hands-up.svg" />
					<h3 className="industries-heading">Your certifications</h3>

					<div className="industries-images">
						{images}

						<img src="/industries/your-certification-arrow.svg" />
					</div>
				</div>

				<div className="industries-certification__ours">
					<h3 className="industries-heading">Our certifications</h3>

					<div className="industries-images">
						<img src="/industries/our-certification-arrow.svg" />

						<div className="industries-image__container">
							<Image src={GooglePartner} alt="Google Partner" />
						</div>
						<div className="industries-image__container">
							<Image src={Hubspot} alt="Hubspot" />
						</div>
						<div className="industries-image__container">
							<Image src={Yext} alt="Yext" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
