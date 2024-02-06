"use client";

import React, { useEffect, useRef } from "react";
import styles from "./get-in-touch.module.scss";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";
import Modal from "../modal/Modal";

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
	const callRef = useRef<HTMLDialogElement | null>(null);
	const emailRef = useRef<HTMLDialogElement | null>(null);
	const consultationRef = useRef<HTMLDialogElement | null>(null);

	const closeAllModal = () => {
		callRef.current?.close();
		emailRef.current?.close();
		consultationRef.current?.close();
	};

	const handleHashChange = () => {
		let type = location.hash;

		if (!type) {
			closeAllModal();
		}

		switch (type) {
			case "#call":
				callRef.current?.showModal();
				break;
			case "#email":
				emailRef.current?.showModal();
				break;
			case "#consultation":
				consultationRef.current?.showModal();
				break;
			default:
				closeAllModal();
		}
	};

	useEffect(() => {
		const script = document.createElement("script");
		script.setAttribute("type", "text/javascript");
		script.src = "https://js.hsforms.net/forms/embed/v2.js";

		script.addEventListener("load", () => {
			// @ts-ignore
			hbspt.forms.create({
				region: "na1",
				portalId: "44671756",
				formId: "2c32afb3-3cd4-4b6c-81c9-aa5ef4b4775e",
				target: "#callForm",
				onFormSubmitted: () => {
					//@ts-expect-error
					window.dataLayer = window.dataLayer || [];
					//@ts-expect-error
					window.dataLayer.push({
						event: "CallFormSubmission",
						currentUrl: window.location.href,
					});
				},
			});

			// @ts-ignore
			hbspt.forms.create({
				region: "na1",
				portalId: "44671756",
				formId: "1ca4a305-1423-47ec-b094-db2a2e78773f",
				target: "#emailForm",
				onFormSubmitted: () => {
					//@ts-expect-error
					window.dataLayer = window.dataLayer || [];
					//@ts-expect-error
					window.dataLayer.push({
						event: "CallFormSubmission",
						currentUrl: window.location.href,
					});
				},
			});

			// @ts-ignore
			hbspt.forms.create({
				region: "na1",
				portalId: "44671756",
				formId: "c09e3cc6-156e-4499-b64b-a1516c2de444",
				target: "#consultationForm",
				onFormSubmitted: () => {
					//@ts-expect-error
					window.dataLayer = window.dataLayer || [];
					//@ts-expect-error
					window.dataLayer.push({
						event: "CallFormSubmission",
						currentUrl: window.location.href,
					});
				},
			});
		});

		document.head.append(script);
	}, []);

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
		<>
			<>
				<Modal ref={callRef}>
					<div id="callForm"></div>
				</Modal>
			</>

			<>
				<Modal ref={emailRef}>
					<div id="emailForm"></div>
				</Modal>
			</>

			<>
				<Modal ref={consultationRef}>
					<div id="consultationForm"></div>
				</Modal>
			</>
			<div id="get-in-touch" className={styles.getintouch}>
				<div className="container-wide">
					<div className={styles.container}>
						<h2 className={`${styles.heading} solution-heading`}>
							{data.heading}
						</h2>

						<div className={styles.buttons}>{buttons}</div>
					</div>
				</div>
			</div>
		</>
	);
}
