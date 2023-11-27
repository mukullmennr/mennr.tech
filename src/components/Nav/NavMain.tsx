"use client";

import React, { useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { number } from "@/data/contact";

export default function NavMain() {
	const [open, setOpen] = useState<boolean>(false);
	const [subOpen, setSubOpen] = useState(0);

	let one = subOpen === 1;
	let two = subOpen === 2;
	let three = subOpen === 3;
	let four = subOpen === 4;

	const handleChange = () => {
		setOpen((prev) => !prev);
	};

	const handleSubOpen = (val: number) => {
		if (subOpen === val) {
			setSubOpen(0);
			return;
		}

		setSubOpen(val);
	};

	const handleHover = () => {
		setSubOpen(0);
	};
	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-bottom">
					<>
						<input
							type="checkbox"
							id="mobile-nav"
							checked={open}
							onChange={handleChange}
						/>
						<label htmlFor="mobile-nav">
							<span></span>
							<span></span>
							<span></span>
						</label>
					</>

					<div className="nav-bottom__logo">
						<img src="/logo.svg" alt="logo" />
					</div>

					<div className="nav-bottom__links">
						<ul className="nav-links">
							<li>
								<Link href="/">Who We Are</Link>
							</li>

							<li>
								<input
									type="checkbox"
									checked={one}
									onChange={() => {}}
								/>
								<div
									className="nav-hover"
									onClick={() => handleSubOpen(1)}
									onMouseEnter={handleHover}
								>
									<span>
										What We Do
										<FontAwesomeIcon icon={faAngleDown} />
									</span>

									<ul className="nav-links__sub">
										<li>
											<Link href="/">Solution</Link>
										</li>
										<li>
											<Link href="/">Services</Link>
										</li>
										<li>
											<Link href="/">Pricing</Link>
										</li>
									</ul>
								</div>
							</li>

							<li>
								<input
									type="checkbox"
									checked={two}
									onChange={() => {}}
								/>

								<div
									className="nav-hover"
									onClick={() => handleSubOpen(2)}
									onMouseEnter={handleHover}
								>
									<span>
										Who We Help
										<FontAwesomeIcon icon={faAngleDown} />
									</span>

									<ul className="nav-links__sub">
										<li>
											<Link href="/">Automotive</Link>
										</li>
										<li>
											<Link href="/">Home Services</Link>
										</li>
										<li>
											<Link href="/">
												Landscaping Services
											</Link>
										</li>
										<li>
											<Link href="/">Real Estate</Link>
										</li>
										<li>
											<Link href="/">Personal Care</Link>
										</li>
										<li>
											<Link href="/">
												Other Small Business
											</Link>
										</li>
									</ul>
								</div>
							</li>

							<li>
								<input
									type="checkbox"
									checked={three}
									onChange={() => {}}
								/>
								<div
									className="nav-hover"
									onClick={() => handleSubOpen(3)}
									onMouseEnter={handleHover}
								>
									<span>
										Solutions
										<FontAwesomeIcon icon={faAngleDown} />
									</span>

									<ul className="nav-links__sub">
										<li>
											<Link href="/">SEO</Link>
										</li>
										<li>
											<Link href="/">
												Social Media Management
											</Link>
										</li>
										<li>
											<Link href="/">Facebook Ads</Link>
										</li>
										<li>
											<Link href="/">Google Ads</Link>
										</li>
										<li>
											<Link href="/">
												Review Management
											</Link>
										</li>
										<li>
											<Link href="/">
												Reputation Management
											</Link>
										</li>
										<li>
											<Link href="/">
												Website Design & Development
											</Link>
										</li>
										<li>
											<Link href="/">
												Google My Business
											</Link>
										</li>
										<li>
											<Link href="/">
												Business Listings
											</Link>
										</li>
										<li>
											<Link href="/">Print Ads</Link>
										</li>
									</ul>
								</div>
							</li>

							<li>
								<input
									type="checkbox"
									checked={four}
									onChange={() => {}}
								/>
								<div
									className="nav-hover"
									onClick={() => handleSubOpen(4)}
									onMouseEnter={handleHover}
								>
									<span>
										Free Tools
										<FontAwesomeIcon icon={faAngleDown} />
									</span>

									<ul className="nav-links__sub">
										<li>
											<Link href="/">
												Custom Marketing Plan
											</Link>
										</li>
										<li>
											<Link href="/">Marketing Quiz</Link>
										</li>
										<li>
											<Link href="/">
												Facebook Calculator
											</Link>
										</li>
										<li>
											<Link href="/">
												Business Listings Scan
											</Link>
										</li>
										<li>
											<Link href="/">
												Digital Marketing Score
											</Link>
										</li>
										<li>
											<Link href="/">
												Marketing Resource Library
											</Link>
										</li>
									</ul>
								</div>
							</li>

							<li>
								<Link href="/">Blog</Link>
							</li>

							<li className="hidden-large link-button">
								<Link
									href="/"
									className="nav-upper__item nav-button"
								>
									<span className="nav-button__circle"></span>
									Client Support
								</Link>
							</li>

							<li className="hidden-large link-button">
								<Link
									href="/"
									className="nav-upper__item nav-button"
								>
									<span className="nav-button__circle"></span>
									Client Login
								</Link>
							</li>
						</ul>

						<div className="nav-bottom__links-ours">
							<div className="links-phone hidden-large">
								<a href={`tel:${number}`}>
									<FontAwesomeIcon icon={faPhoneVolume} />
								</a>
							</div>

							<Link className="links-button" href="/">
								Get Started
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
