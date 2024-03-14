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

import { links, industries } from "@/data/navLinks";
import { whatwedo, whowehelp } from "@/data/ourinfo/externalLinks";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				{/* <div className="footer-chipy">
					<Image
						src="/common/chipy/chipy-sitting.svg"
						alt="chippy sitting"
						width="111"
						height="105"
					/>
				</div> */}

				<div className="footer-container" id="footer">
					<div className="footer-container__item link-grid">
						<div className="link-grid__item container-query">
							<h3 className="list-head">Navigations</h3>

							<ul>
								<li>
									<Link
										href={links.whoweare}
										prefetch={false}
									>
										Who we are
									</Link>
								</li>
								<li>
									<Link
										href={links.whatwedo}
										prefetch={false}
									>
										What we do
									</Link>
								</li>
								<li>
									<Link
										href={links.whowehelp}
										prefetch={false}
									>
										Who we help
									</Link>
								</li>
								<li>
									<Link
										href={links.solutions}
										prefetch={false}
									>
										Solutions
									</Link>
								</li>
								{/* <li>
									<Link href={links.solutions}>Blog</Link>
								</li> */}
							</ul>
						</div>

						<div className="link-grid__item">
							<h3 className="list-head">Industries</h3>
							<ul>
								{whowehelp.map((industries) => {
									return (
										<li key={industries.link}>
											<Link href={industries.link}>
												{industries.text}
											</Link>
										</li>
									);
								})}
							</ul>
						</div>

						<div className="link-grid__item">
							<h3 className="list-head">Services</h3>

							<ul className="services-links">
								{whatwedo.map((service) => {
									return (
										<li key={service.link}>
											<Link href={service.link}>
												{service.text}
											</Link>
										</li>
									);
								})}
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
									<a
										href={socials.facebook}
										className="facebook"
										target="_blank"
										aria-label="mennr_facebook"
									>
										<FontAwesomeIcon icon={faFacebookF} />
									</a>
									{/* <a
										href={socials.twitter}
										className="twitter"
										target="_blank"
									>
										<FontAwesomeIcon icon={faXTwitter} />
									</a> */}
									<a
										href={socials.linkedin}
										className="linkedin"
										target="_blank"
										aria-label="mennr_linkedin"
									>
										<FontAwesomeIcon icon={faLinkedinIn} />
									</a>
									<a
										href={socials.instagram}
										className="instagram"
										target="_blank"
										aria-label="mennr_instagram"
									>
										<FontAwesomeIcon icon={faInstagram} />
									</a>

									<a
										href={socials.threads}
										className="threads"
										target="_blank"
										aria-label="mennr_threads"
									>
										<FontAwesomeIcon icon={faThreads} />
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="footer-container__item copyright">
						{/* <img src="/logo.svg" alt="mennr" /> */}
						<Image src={MennrLogo} alt="Mennr" />

						<div className="footer-container__item copyright_content">
							<div>
								<p>
									<Link href="/privacy-policy">
										Privacy Policy
									</Link>
									&nbsp;&nbsp; | &nbsp;&nbsp;
									<Link href="/ccpa">
										California Privacy Rights
									</Link>
									&nbsp;&nbsp; | &nbsp;&nbsp;
									<Link href="/do-not-sell-or-share">
										Do Not Sell or Share My Personal Info
									</Link>
								</p>
							</div>
							<p>
								©2024 Mennr LLC. All rights reserved. Mennr and
								the Mennr logo are trademarks of Mennr LLC.
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
