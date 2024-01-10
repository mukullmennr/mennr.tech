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
                    <Image
                        src="/common/chipy/chipy-sitting.svg"
                        alt="chippy sitting"
                        width="111"
                        height="105"
                    />
                </div>

                <div className="footer-container" id="footer">
                    <div className="footer-container__item link-grid">
                        <div className="link-grid__item">
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
                                <li>
                                    <Link
                                        href={industries.automotive}
                                        prefetch={false}
                                    >
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
                                    <Link
                                        href={industries.personalCare}
                                        prefetch={false}
                                    >
                                        Personal Care
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={industries.realEstate}
                                        prefetch={false}
                                    >
                                        Real Estate
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={industries.landscapingServices}
                                        prefetch={false}
                                    >
                                        Landscaping Services
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href={industries.otherSmallBusiness}
                                        prefetch={false}
                                    >
                                        Other Small Business
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="link-grid__item">
                            <h3 className="list-head">Services</h3>

                            <ul className="services-links">
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
                                    <Link
                                        href={services.metaAds}
                                        prefetch={false}
                                    >
                                        Meta Ads
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={services.googleAds}
                                        prefetch={false}
                                    >
                                        Google Ads
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

                                <li>
                                    <Link
                                        href={services.websiteDesignDevelopment}
                                        prefetch={false}
                                    >
                                        Website Design & Development
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href={services.printAds}
                                        prefetch={false}
                                    >
                                        Direct Mail Ads
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={services.googleMyBusiness}
                                        prefetch={false}
                                    >
                                        Google My Business
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
                                        href={services.businessListings}
                                        prefetch={false}
                                    >
                                        Business Listings
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={services.mapads}
                                        prefetch={false}
                                    >
                                        Map Ads
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={services.strategicPlanning}
                                        prefetch={false}
                                    >
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
                        <div>
                            <div>
                                <p>
                                    <Link href="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                    &nbsp;|&nbsp;
                                    <Link href="/ccpa">
                                        California Privacy Rights
                                    </Link>
                                    &nbsp;|&nbsp;
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
