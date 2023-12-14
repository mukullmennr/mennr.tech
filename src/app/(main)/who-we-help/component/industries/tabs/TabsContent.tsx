"use client";

import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Link from "next/link";
import Image from "next/image";

interface TabsContentProps {
	heading: string;
	text: string;
	link: string;
	image: string;
	value: string;
}

export default function TabsContent({
	heading,
	text,
	link,
	image,
	value,
}: TabsContentProps) {
	return (
		<Tabs.Content className="tabs-content" value={value}>
			<div className="tabs-content__item">
				<h3 className="heading">{heading}</h3>

				<p className="text">{text}</p>

				<div>
					<Link className="link" href={link}>
						Learn More
					</Link>
				</div>
			</div>

			<div className="tabs-content__item">
				<img className="image" src={image} alt={heading} />
			</div>
		</Tabs.Content>
	);
}
