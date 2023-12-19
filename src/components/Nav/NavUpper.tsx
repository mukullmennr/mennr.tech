import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { number } from "@/data/contact";
import Link from "next/link";
import { links } from "@/data/navLinks";

export default function NavUpper() {
	return (
		<div className="nav-upper">
			<div className="container">
				<div className="nav-upper__item">
					<a href={`tel:${number}`}>
						<span>
							<FontAwesomeIcon icon={faPhoneVolume} />
						</span>

						{number}
					</a>
				</div>

				{/* <Link href="/" className="nav-upper__item nav-button">
				<span className="nav-button__circle"></span>
				Client Support
			</Link> */}

				<Link
					href={links.login}
					target="_blank"
					className="nav-upper__item nav-button"
				>
					{/* <span className="nav-button__circle"></span> */}
					Client Login
				</Link>
			</div>
		</div>
	);
}
