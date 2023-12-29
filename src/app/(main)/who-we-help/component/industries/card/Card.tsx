import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Card() {
	return (
		<div className="card">
			<div className="container">
				<div className="card-container">
					<h3 className="card-container__heading">
						Your customers trust you to take care of a problem they
						have, let us take care of yours.
					</h3>

					<a href="#calender" className="card-container__link">
						Start using the internet to your advantage
						<FontAwesomeIcon icon={faAngleDown} />
					</a>

					<Image
						src="/common/chipy/chipy-sitting.svg"
						alt="chipy"
						width="160"
						height="151"
					/>
				</div>
			</div>
		</div>
	);
}
