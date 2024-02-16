import React from "react";
import styles from "./honeycomb.module.scss";
import Link from "next/link";
import { honeyCombContent } from "@/data/home/data";

interface HoneyCombProps {
	data: {
		heading: {
			text: string;
			highlight: string;
		};
		link: {
			text: string;
			link: string;
		};
	};
}

export default function HoneyComb({ data }: HoneyCombProps) {
	return (
		<div className={styles.honeycombParent}>
			<div className="container">
				<h2 className={`sub-heading ${styles.heading}`}>
					{data.heading.text}
					<span> {data.heading.highlight} </span>
				</h2>
			</div>

			{/* <picture>
				<source
					media="(min-width: 74em)"
					srcSet="/home/updated/1190services.svg"
				/>

				<source
					media="(min-width: 64em)"
					srcSet="/home/updated/1024services.svg"
				/>

				<source
					media="(min-width: 48em)"
					srcSet="/home/updated/768services.svg"
				/>

				<source
					media="(min-width: 40em)"
					srcSet="/home/updated/640services.svg"
				/>

				<img src="/home/updated/360services.svg" alt="our process" />
			</picture> */}

			<div className={styles.honeycombContainer}>
				<div className={styles.honeycomb}>
					<div className={styles.honeycombRow}>
						<div className={styles.honeycombRowItem}></div>
						<div className={styles.honeycombRowItem}></div>
						<div
							className={`${styles.honeycombRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.socialMedia.link}
								className={styles.honeycombLink}
								title={honeyCombContent.socialMedia.text}
							>
								<img
									alt={honeyCombContent.socialMedia.text}
									src={honeyCombContent.socialMedia.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.socialMedia.text}</p>
							</Link>
						</div>

						<div className={styles.honeycombRowItem}></div>
						<div className={styles.honeycombRowItem}></div>
					</div>

					<div className={styles.honeycombRow}>
						<div className={styles.honeycombRowItem}></div>
						<div
							className={`${styles.honeycombRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.facebook.link}
								className={styles.honeycombLink}
								title={honeyCombContent.facebook.text}
							>
								<img
									alt={honeyCombContent.facebook.text}
									src={honeyCombContent.facebook.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.facebook.text}</p>
							</Link>
						</div>
						<div
							className={`${styles.honeycombRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.google.link}
								className={styles.honeycombLink}
								title={honeyCombContent.google.text}
							>
								<img
									alt={honeyCombContent.google.text}
									src={honeyCombContent.google.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.google.text}</p>
							</Link>
						</div>
					</div>

					<div className={styles.honeycombRow}>
						<div
							className={`${styles.honeycombRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.web.link}
								className={styles.honeycombLink}
								title={honeyCombContent.web.text}
							>
								<img
									alt={honeyCombContent.web.text}
									src={honeyCombContent.web.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.web.text}</p>
							</Link>
						</div>
						<div
							className={`${styles.honeycombRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.reputation.link}
								className={styles.honeycombLink}
								title={honeyCombContent.reputation.text}
							>
								<img
									alt={honeyCombContent.reputation.text}
									src={honeyCombContent.reputation.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.reputation.text}</p>
							</Link>
						</div>
						<div className={styles.honeycombRowItem}></div>

						<div className={styles.honeycombRowItem}></div>
					</div>

					<div className={styles.honeycombRow}>
						<div className={styles.honeycombRowItem}></div>
						<div
							className={`${styles.honeycombRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.content.link}
								className={styles.honeycombLink}
								title={honeyCombContent.content.text}
							>
								<img
									alt={honeyCombContent.content.text}
									src={honeyCombContent.content.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.content.text}</p>
							</Link>
						</div>
						<div
							className={`${styles.honeycombRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.sms.link}
								className={styles.honeycombLink}
								title={honeyCombContent.sms.text}
							>
								<img
									alt={honeyCombContent.sms.text}
									src={honeyCombContent.sms.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.sms.text}</p>
							</Link>
						</div>
					</div>

					<div className={styles.honeycombRow}>
						<div className={styles.honeycombRowItem}></div>
						<div
							className={`${styles.honeycombRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.seo.link}
								className={styles.honeycombLink}
								title={honeyCombContent.seo.text}
							>
								<img
									alt={honeyCombContent.seo.text}
									src={honeyCombContent.seo.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.seo.text}</p>
							</Link>
						</div>
						<div className={styles.honeycombRowItem}></div>

						<div className={styles.honeycombRowItem}></div>
					</div>

					<div className={styles.honeycombRow}>
						<div className={styles.honeycombRowItem}></div>
						<div
							className={`${styles.honeycombRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.review.link}
								className={styles.honeycombLink}
								title={honeyCombContent.review.text}
							>
								<img
									alt={honeyCombContent.review.text}
									src={honeyCombContent.review.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.review.text}</p>
							</Link>
						</div>
						<div
							className={`${styles.honeycombRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.email.link}
								className={styles.honeycombLink}
								title={honeyCombContent.email.text}
							>
								<img
									alt={honeyCombContent.email.text}
									src={honeyCombContent.email.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.email.text}</p>
							</Link>
						</div>

						<div className={styles.honeycombRowItem}></div>
					</div>
				</div>

				<div className={styles.honeycombPC}>
					<div className={styles.honeycombPCRow}>
						<div className={styles.honeycombPCRowItem}></div>

						<div
							className={`${styles.honeycombPCRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.facebook.link}
								className={styles.honeycombLink}
								title={honeyCombContent.facebook.text}
							>
								<img
									alt={honeyCombContent.facebook.text}
									src={honeyCombContent.facebook.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.facebook.text}</p>
							</Link>
						</div>
						<div
							className={`${styles.honeycombPCRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.google.link}
								className={styles.honeycombLink}
								title={honeyCombContent.google.text}
							>
								<img
									alt={honeyCombContent.google.text}
									src={honeyCombContent.google.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.google.text}</p>
							</Link>
						</div>
						<div
							className={`${styles.honeycombPCRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.socialMedia.link}
								className={styles.honeycombLink}
								title={honeyCombContent.socialMedia.text}
							>
								<img
									alt={honeyCombContent.socialMedia.text}
									src={honeyCombContent.socialMedia.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.socialMedia.text}</p>
							</Link>
						</div>

						<div className={styles.honeycombPCRowItem}></div>
					</div>

					<div className={styles.honeycombPCRow}>
						<div className={styles.honeycombPCRowItem}></div>

						<div
							className={`${styles.honeycombPCRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.seo.link}
								className={styles.honeycombLink}
								title={honeyCombContent.seo.text}
							>
								<img
									alt={honeyCombContent.seo.text}
									src={honeyCombContent.seo.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.seo.text}</p>
							</Link>
						</div>
						<div
							className={`${styles.honeycombPCRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.web.link}
								className={styles.honeycombLink}
								title={honeyCombContent.web.text}
							>
								<img
									alt={honeyCombContent.web.text}
									src={honeyCombContent.web.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.web.text}</p>
							</Link>
						</div>
						<div
							className={`${styles.honeycombPCRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.reputation.link}
								className={styles.honeycombLink}
								title={honeyCombContent.reputation.text}
							>
								<img
									alt={honeyCombContent.reputation.text}
									src={honeyCombContent.reputation.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.reputation.text}</p>
							</Link>
						</div>
						<div
							className={`${styles.honeycombPCRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.review.link}
								className={styles.honeycombLink}
								title={honeyCombContent.review.text}
							>
								<img
									alt={honeyCombContent.review.text}
									src={honeyCombContent.review.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.review.text}</p>
							</Link>
						</div>
					</div>

					<div className={styles.honeycombPCRow}>
						<div className={styles.honeycombPCRowItem}></div>

						<div
							className={`${styles.honeycombPCRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.content.link}
								className={styles.honeycombLink}
								title={honeyCombContent.content.text}
							>
								<img
									alt={honeyCombContent.content.text}
									src={honeyCombContent.content.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.content.text}</p>
							</Link>
						</div>
						<div
							className={`${styles.honeycombPCRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.sms.link}
								className={styles.honeycombLink}
								title={honeyCombContent.sms.text}
							>
								<img
									alt={honeyCombContent.sms.text}
									src={honeyCombContent.sms.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.sms.text}</p>
							</Link>
						</div>
						<div
							className={`${styles.honeycombPCRowItem} ${styles.content}`}
						>
							<Link
								href={honeyCombContent.email.link}
								className={styles.honeycombLink}
								title={honeyCombContent.email.text}
							>
								<img
									alt={honeyCombContent.email.text}
									src={honeyCombContent.email.img}
									width={28}
									height={28}
								/>
								<p>{honeyCombContent.email.text}</p>
							</Link>
						</div>

						<div className={styles.honeycombPCRowItem}></div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className={styles.link}>
					<Link href={data.link.link}>{data.link.text}</Link>
				</div>
			</div>
		</div>
	);
}
