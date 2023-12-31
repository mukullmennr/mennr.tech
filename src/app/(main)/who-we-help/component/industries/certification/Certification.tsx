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
				<Image src={image} alt="certificate" width="99" height="99" />
			</div>
		);
	});

	return (
		<div className="industries-certification">
			<div className="container">
				<div className="industries-certification__yours">
					<Image
						src="/common/chipy/chipy-hands-up.svg"
						alt="chipy"
						width="128"
						height="115"
					/>
					<h3 className="industries-heading">Your certifications</h3>

					<div className="industries-images">
						{images}

						<Image
							src="/industries/your-certification-arrow.svg"
							alt="arrow"
							width="60"
							height="100"
						/>
					</div>
				</div>

				<div className="industries-certification__ours">
					<h3 className="industries-heading">Our certifications</h3>

					<div className="industries-images">
						<Image
							src="/industries/our-certification-arrow.svg"
							alt="arrow"
							width="64"
							height="116"
						/>

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
