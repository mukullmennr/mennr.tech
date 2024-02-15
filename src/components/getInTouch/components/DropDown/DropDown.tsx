"use client";

import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import styles from "./drop-down.module.scss";

import { DropDown as DropDownType } from "../../GetInTouch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface DropDownProps {
	data: DropDownType;
}

export default function DropDown({ data }: DropDownProps) {
	const steps = data.steps.map((step) => {
		return (
			<div className={styles.item} key={step.id}>
				<h3 className={styles.heading}>{step.heading}</h3>

				<ul className={styles.list}>
					{step.points.map((point) => {
						return (
							<li key={+step.id * point.length + point}>
								{point}
							</li>
						);
					})}
				</ul>
			</div>
		);
	});

	return (
		<>
			<NavigationMenu.Root>
				<NavigationMenu.List className={styles.itemList}>
					<NavigationMenu.Item>
						<NavigationMenu.Trigger className={styles.trigger}>
							{data.title} <FontAwesomeIcon icon={faAngleDown} />
						</NavigationMenu.Trigger>

						<NavigationMenu.Content className={styles.content}>
							{steps}
						</NavigationMenu.Content>
					</NavigationMenu.Item>
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</>
	);
}
