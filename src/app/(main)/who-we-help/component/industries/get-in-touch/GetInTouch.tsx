import Image from "next/image";
import React from "react";

interface GetInTouchProps {
	data: { text1: string; text2: string };
}

export default function GetInTouch({ data }: GetInTouchProps) {
	return (
		<div className="getintouch" id="industry-getintouch">
			<div className="container">
				<div className="getintouch-text">
					<p>{data.text1}</p>

					<p>{data.text2}</p>
				</div>

				<div className="chipy-parent">
					<div className="getintouch-calender-container">
						<iframe
							src="https://meetings.hubspot.com/luca-veneziano?embed=true"
							frameBorder="0"
							loading="lazy"
							title="meeting-calander"
							width="792"
							height="690"
						></iframe>
					</div>

					<Image
						src="/common/chipy/chipy-call-color-left.svg"
						alt="chipy contact"
						width="200"
						height="210"
					/>
				</div>
			</div>
		</div>
	);
}
