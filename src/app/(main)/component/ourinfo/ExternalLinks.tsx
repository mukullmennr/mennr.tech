import Link from "next/link";
import React from "react";

interface ExternalLinks {
	text: string;
	link: string;
}

interface ExternalLinksProps {
	links: ExternalLinks[];
	linkText: string;
}

interface ExternalLinksItemProps {
	text: string;
	link: string;
	linkText: string;
}

function ExternalLinksItem({ text, link, linkText }: ExternalLinksItemProps) {
	return (
		<div className="externalLinks-container__item">
			<p className="externalLinks-container__item-text">{text}</p>
			{/* <Link className="externalLinks-container__item-text" href={link}>
				{text}
			</Link> */}

			<Link
				className="externalLinks-container__item-link"
				href={link}
				prefetch={false}
			>
				{linkText}
			</Link>
		</div>
	);
}

export default function ExternalLinks({ links, linkText }: ExternalLinksProps) {
	const item = links.map((link) => {
		return (
			<ExternalLinksItem
				key={link.text}
				text={link.text}
				link={link.link}
				linkText={linkText}
			/>
		);
	});

	return (
		<div className="externalLinks">
			<div className="container externalLinks-container">{item}</div>
		</div>
	);
}
