import React from "react";
import Image from "next/image";

export default function Certifications() {
	return (
		<div className="whoweare-certification">
			<div className="container">
				<h2>Awards and certifications held by our team</h2>

				<div className="whoweare-certification__certificates">
					<div className="certificates-item">
						<Image
							src="/awards/google.svg"
							alt="google partners"
							width="199"
							height="98"
						/>
					</div>

					<div className="certificates-item">
						<Image
							src="/awards/amazon.svg"
							alt="amazon ads"
							width="249"
							height="178"
						/>
					</div>

					<div className="certificates-item">
						<Image
							src="/awards/meta.svg"
							alt="meta partners"
							width="307"
							height="208"
						/>
					</div>

					<div className="certificates-item">
						<a
							href="https://app.hubspot.com/academy/achievements/f7s94dwl/en/1/luca-veneziano/digital-marketing"
							title="Digital Marketing "
							target="__blank"
						>
							<img
								src="https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/08c8444f497c449c851370b1cf552778.png"
								width="308"
								height="164"
								alt="hubspot"
							/>
						</a>
					</div>
				</div>

				<div className="whoweare-certification__certificates">
					<div className="certificates-item">
						<Image
							width="280"
							height="103"
							src="/awards/localogy.svg"
							alt="localogy"
						/>
					</div>

					<div className="certificates-item">
						<Image
							width="350"
							height="168"
							src="/awards/microsoft.svg"
							alt="microsoft"
						/>
					</div>

					<div className="certificates-item">
						<Image
							width="240"
							height="42"
							src="/awards/bbb.svg"
							alt="bbb"
						/>
					</div>
				</div>

				<div className="whoweare-certification__certificates">
					<div className="certificates-item">
						<Image
							width="400"
							height="224"
							src="/awards/consumer-affairs.svg"
							alt="consumer affairs"
						/>
					</div>

					<div className="certificates-item">
						<Image
							width="180"
							height="85"
							src="/awards/localogy-certified.svg"
							alt="localogy"
						/>
					</div>

					<div className="certificates-item">
						<Image
							width="250"
							height="249"
							src="/awards/yext.svg"
							alt="yext"
						/>
					</div>

					<div className="certificates-item">
						<Image
							width="180"
							height="89"
							src="/awards/sp.svg"
							alt="sp"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
