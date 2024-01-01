import Image from "next/image";
import React from "react";

export default function Schedule() {
	return (
		<div className="schedule">
			<div className="container">
				<div className="schedule-head">
					<h3>Get to know us more!</h3>

					<Image
						src="/home/whoweare/get-to-know-us.svg"
						width="384"
						height="425"
						alt="arrow"
					/>
				</div>

				<div className="chipy-parent">
					<div className="calender-container" id="calender">
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
						src="/common/chipy/chipy-call-color.svg"
						alt="chipy contact"
						width="200"
						height="210"
					/>
				</div>
			</div>
		</div>
	);
}
