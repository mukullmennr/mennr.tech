import Link from "next/link";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faXTwitter,
	faLinkedinIn,
	faInstagram,
	faThreads,
} from "@fortawesome/free-brands-svg-icons";
import { socials } from "@/data/social";
import BlogForm from "./BlogForm";

import Image from "next/image";
import MennrLogo from "@/../public/logo.svg";

import { links, industries, services } from "@/data/navLinks";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-chipy">
					<img
						src="/common/chipy/chipy-sitting.svg"
						alt="chippy sitting"
					/>
				</div>

				<div className="footer-container">
					<div className="footer-container__item link-grid">
						<div className="link-grid__item">
							<h3 className="list-head">Navigations</h3>

							<ul>
								<li>
									<Link href={links.whoweare}>
										Who we are
									</Link>
								</li>
								<li>
									<Link href={links.whatwedo}>
										What we do
									</Link>
								</li>
								<li>
									<Link href={links.whowehelp}>
										Who we help
									</Link>
								</li>
								<li>
									<Link href={links.solutions}>
										Solutions
									</Link>
								</li>
								<li>
									<Link href={links.solutions}>Blog</Link>
								</li>
							</ul>
						</div>

						<div className="link-grid__item">
							<h3 className="list-head">Industries</h3>
							<ul>
								<li>
									<Link href={industries.automotive}>
										Automotive
									</Link>
								</li>
								<li>
									<Link
										href={
											industries.skilledTradesBusinesses
										}
									>
										Skilled Trades Businesses
									</Link>
								</li>
								<li>
									<Link href={industries.personalCare}>
										Personal Care
									</Link>
								</li>
								<li>
									<Link href={industries.realEstate}>
										Real Estate
									</Link>
								</li>
								<li>
									<Link href={industries.landscapingServices}>
										Landscaping Services
									</Link>
								</li>

								<li>
									<Link href={industries.otherSmallBusiness}>
										Other Small Business
									</Link>
								</li>
							</ul>
						</div>

						<div className="link-grid__item">
							<h3 className="list-head">Services</h3>

							<ul className="services-links">
								<li>
									<Link href={services.seo}>SEO</Link>
								</li>
								<li>
									<Link href={services.socialMediaManagement}>
										Social Media Management
									</Link>
								</li>
								<li>
									<Link href={services.metaAds}>
										Meta Ads
									</Link>
								</li>
								<li>
									<Link href={services.googleAds}>
										Google Ads
									</Link>
								</li>
								<li>
									<Link href={services.reviewManagement}>
										Review Management
									</Link>
								</li>

								<li>
									<Link
										href={services.websiteDesignDevelopment}
									>
										Website Design & Development
									</Link>
								</li>

								<li>
									<Link href={services.printAds}>
										Direct Mail Ads
									</Link>
								</li>
								<li>
									<Link href={services.googleMyBusiness}>
										Google My Business
									</Link>
								</li>
								<li>
									<Link href={services.reputationManagement}>
										Reputation Management
									</Link>
								</li>
								<li>
									<Link href={services.businessListings}>
										Business Listings
									</Link>
								</li>
								<li>
									<Link href={services.mapads}>Map Ads</Link>
								</li>
								<li>
									<Link href={services.strategicPlanning}>
										Strategic Planning
									</Link>
								</li>
							</ul>
						</div>

						<div className="socials link-grid__item">
							<div className="socials-container">
								<h3 className="list-head">Mennr Blog</h3>

								<p>
									Sign up for Mennr&apos;s weekly marketing
									newsletter for tips on how you can better
									utilize the internet to drive more business
								</p>

								<BlogForm />
							</div>

							<div className="socials-container">
								<h3 className="list-head">Connect With Us</h3>

								<div className="social-links">
									<a href={socials.facebook} target="_blank">
										<FontAwesomeIcon icon={faFacebookF} />
									</a>
									<a href={socials.twitter} target="_blank">
										<FontAwesomeIcon icon={faXTwitter} />
									</a>
									<a href={socials.linkedin} target="_blank">
										<FontAwesomeIcon icon={faLinkedinIn} />
									</a>
									<a href={socials.instagram} target="_blank">
										<FontAwesomeIcon icon={faInstagram} />
									</a>

									<a href={socials.threads} target="_blank">
										<FontAwesomeIcon icon={faThreads} />
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="footer-container__item copyright">
						{/* <img src="/logo.svg" alt="mennr" /> */}
						<Image src={MennrLogo} alt="Mennr" />

						<p>
							©2024 Mennr Inc. All rights reserved. Mennr and the
							Mennr logo are trademarks of Mennr Inc.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
