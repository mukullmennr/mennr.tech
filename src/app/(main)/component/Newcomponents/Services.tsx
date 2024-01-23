import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services, links } from "@/data/navLinks";

export default function Services() {
	return (
		<div className="container">
			<div className="home_service" id="getstarted">
				<div className="calender-container calender-mobile">
					<h3>
						Or schedule a consultation with one of our certified
						marketing strategists to get started!
					</h3>
					<iframe
						src="https://meetings.hubspot.com/luca-veneziano?embed=true"
						frameBorder="0"
						loading="lazy"
						title="meeting-calander"
					></iframe>
				</div>
				<div className="home_service_content">
					<ul>
						<li>
							<Link href={services.seo} prefetch={false}>
								SEO
							</Link>
						</li>
						<li>
							<Link
								href={services.socialMediaManagement}
								prefetch={false}
							>
								Social Media Management
							</Link>
						</li>
						<li>
							<Link href={services.metaAds} prefetch={false}>
								Meta Ads
							</Link>
						</li>
						<li>
							<Link href={services.googleAds} prefetch={false}>
								Google Ads
							</Link>
						</li>
						<li>
							<Link
								href={services.reputationManagement}
								prefetch={false}
							>
								Reputation Management
							</Link>
						</li>
						<li>
							<Link
								href={services.websiteDesignDevelopment}
								prefetch={false}
							>
								Website Design & Developemnt
							</Link>
						</li>
						<li>
							<Link
								href={services.reviewManagement}
								prefetch={false}
							>
								Review Management
							</Link>
						</li>
					</ul>
					<Link href={links.whatwedo} prefetch={false}>
						All Our Marketing Skills
					</Link>
				</div>
				<div className="home_service_chipy">
					<Image
						src="/home/service_chipy.svg"
						alt="chipy"
						width="252"
						height="268"
					/>
					<h3>
						Or schedule a consultation with one of our certified
						marketing strategists to get started!
					</h3>
				</div>
			</div>
		</div>
	);
}
