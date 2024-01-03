import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function booking_confirmed() {
	return (
		<>
			<div className="container">
				<div className="booking_heading">
					<p>Your Consultation is Confirmed!</p>
					<Image
						src="/booking.svg"
						alt="celebrate"
						width="199"
						height="152"
					/>
				</div>
				<div className="booking_content">
					<p>
						In the meantime we recommend you explore our site to
						learn a bit more about exactly what we include in our
						marketing plans and the kinds of businesses we serve.
					</p>
				</div>
				<div className="booking_link">
					<div>
						<Link href="/what-we-do" prefetch={false}>
							Learn more about what we do
						</Link>
					</div>
					<div className="booking_link2">
						<Link href="/who-we-help" prefetch={false}>
							Learn more about who we help
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
