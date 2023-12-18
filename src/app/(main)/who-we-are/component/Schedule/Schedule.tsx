import React from "react";

export default function Schedule() {
	return (
		<div className="schedule">
			<div className="container">
				<div className="schedule-head">
					<h3>Get to know us more!</h3>

					<img src="/home/whoweare/get-to-know-us.svg" />
				</div>

				<div className="chipy-parent">
					<div className="calender-container" id="calender">
						<iframe
							src="https://meetings.hubspot.com/rohan90?embed=true"
							frameBorder="0"
						></iframe>
					</div>

					<img
						src="/common/chipy/chipy-call-color.svg"
						alt="chipy contact"
					/>
				</div>
			</div>
		</div>
	);
}
