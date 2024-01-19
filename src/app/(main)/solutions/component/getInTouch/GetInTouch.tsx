"use client";

import React, { useCallback, useEffect } from "react";
import styles from "./get-in-touch.module.scss";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";

interface Steps {
	heading: string;
	points: string[];
	id: string;
}

export interface DropDown {
	title: string;
	steps: Steps[];
}

export interface Buttons {
	title: string;
	dropDown: DropDown;
	link: string;
}

interface GetInTouchProps {
	data: {
		heading: string;
		buttons: Buttons[];
	};
}

export default function GetInTouch({ data }: GetInTouchProps) {
	const handleHashChange = () => {
		console.log(location.hash);
	};

	useEffect(() => {
		window.addEventListener("hashchange", handleHashChange);

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	useEffect(() => {
		handleHashChange();
	}, []);

	const buttons = data.buttons.map((button) => {
		return <ButtonContainer key={button.title} data={button} />;
	});

	return (
		<div className={styles.getintouch}>
			<div className="container-wide">
				<div className={styles.container}>
					<h2 className={`${styles.heading} solution-heading`}>
						{data.heading}
					</h2>

					<div className={styles.buttons}>{buttons}</div>
				</div>
			</div>
		</div>
	);
}
