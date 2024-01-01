"use client";

import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { tabs } from "@/data/industries/tabs";
import TabsContent from "./TabsContent";

export default function TabSection() {
	const triggers = tabs.map((tab, index) => {
		return (
			<Tabs.Trigger
				key={tab.heading}
				className="tabs-trigger"
				value={`tab${index + 1}`}
			>
				{tab.heading}
			</Tabs.Trigger>
		);
	});

	const content = tabs.map((tab, index) => {
		return (
			<TabsContent
				key={tab.heading}
				heading={tab.heading}
				text={tab.text}
				link={tab.link}
				image={tab.image}
				value={`tab${index + 1}`}
				btn={tab.btn}
			/>
		);
	});

	return (
		<div className="tabs">
			<div className="container">
				<Tabs.Root
					className="tabs-container"
					defaultValue="tab1"
					orientation="vertical"
				>
					<Tabs.List className="tabs-container__list" aria-label="">
						{triggers}
					</Tabs.List>

					<div className="tabs-container__content">{content}</div>
				</Tabs.Root>
			</div>
		</div>
	);
}
