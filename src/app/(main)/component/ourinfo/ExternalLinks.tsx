import Link from "next/link";
import React from "react";

interface ExternalLinks {
	text: string;
	link: string;
}

interface ExternalLinksProps {
	links: ExternalLinks[];
}

interface ExternalLinksItemProps {
	text: string;
	link: string;
}

function ExternalLinksItem({ text, link }: ExternalLinksItemProps) {
	return (
		<div className="externalLinks-container__item">
			<p>{text}</p>
			<Link href={link}>Read More</Link>
		</div>
	);
}

export default function ExternalLinks({ links }: ExternalLinksProps) {
	const item = links.map((link) => {
		return (
			<ExternalLinksItem
				key={link.text}
				text={link.text}
				link={link.link}
			/>
		);
	});

	return (
		<div className="externalLinks">
			<div className="container externalLinks-container">{item}</div>
		</div>
	);
}
