import React from "react";

export default function Certifications() {
	return (
		<div className="whoweare-certification">
			<div className="container">
				<h2>Awards and certifications held by our team</h2>

				<div className="whoweare-certification__certificates">
					<div className="certificates-item">
						<img src="/awards/google.png" alt="google partners" />
					</div>

					<div className="certificates-item">
						<img src="/awards/amazon.png" alt="amazon ads" />
					</div>

					<div className="certificates-item">
						<img src="/awards/meta.png" alt="meta partners" />
					</div>

					<div className="certificates-item">
						<a
							href="https://app.hubspot.com/academy/achievements/f7s94dwl/en/1/luca-veneziano/digital-marketing"
							title="Digital Marketing "
							target="__blank"
						>
							<img src="https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/08c8444f497c449c851370b1cf552778.png" />
						</a>
					</div>
				</div>

				<div className="whoweare-certification__certificates">
					<div className="certificates-item">
						<img src="/awards/localogy.png" alt="localogy" />
					</div>

					<div className="certificates-item">
						<img src="/awards/microsoft.png" alt="microsoft" />
					</div>

					<div className="certificates-item">
						<img src="/awards/bbb.png" alt="bbb" />
					</div>
				</div>

				<div className="whoweare-certification__certificates">
					<div className="certificates-item">
						<img
							src="/awards/consumer-affairs.png"
							alt="consumer affairs"
						/>
					</div>

					<div className="certificates-item">
						<img
							src="/awards/localogy-certified.png"
							alt="localogy"
						/>
					</div>

					<div className="certificates-item">
						<img src="/awards/yext.png" alt="yext" />
					</div>

					<div className="certificates-item">
						<img src="/awards/sp.png" alt="sp" />
					</div>
				</div>
			</div>
		</div>
	);
}
