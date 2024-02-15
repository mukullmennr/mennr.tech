"use client";

import React, { useEffect, useRef } from "react";
import styles from "./get-in-touch.module.scss";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";
import Modal, { RefMethods } from "../modal/Modal";
import { useRouter } from "next/navigation";
import { getInTouch as data } from "@/data/solution";

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
	// data: {
	// 	heading: string;
	// 	buttons: Buttons[];
	// };
	page: string;
	type: "full" | "normal";
	place: "normal" | "bottom";
}

export default function GetInTouch({ page, type, place }: GetInTouchProps) {
	const router = useRouter();

	const callRef = useRef<RefMethods | null>(null);
	const emailRef = useRef<RefMethods | null>(null);
	const consultationRef = useRef<RefMethods | null>(null);

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
			case "#hp-call":
				callRef.current?.open();
				break;
			case "#email":
			case "#hp-email":
				emailRef.current?.open();
				break;
			case "#consultation":
			case "#hp-consultation":
				consultationRef.current?.open();
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
					router.push("/call-thankyou");
				},
			});

			// @ts-ignore
			hbspt.forms.create({
				region: "na1",
				portalId: "44671756",
				formId: "1ca4a305-1423-47ec-b094-db2a2e78773f",
				target: "#emailForm",
				onFormSubmitted: () => {
					router.push("/email-thankyou");
				},
			});

			// @ts-ignore
			hbspt.forms.create({
				region: "na1",
				portalId: "44671756",
				formId: "c09e3cc6-156e-4499-b64b-a1516c2de444",
				target: "#consultationForm",
				onFormSubmitted: () => {
					router.push("/consultation-thankyou");
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
		let linkPrefix = "";

		if (page === "home") linkPrefix = "hp-";

		return (
			<ButtonContainer
				key={button.title}
				data={button}
				linkPrefix={linkPrefix}
			/>
		);
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
			<div
				id="get-in-touch"
				className={`${styles.getintouch} ${
					type === "full" ? styles.full : ""
				} ${place === "bottom" ? styles.bottom : ""}`}
			>
				<div className="container-wide">
					<div className={styles.container}>
						<h2 className={`${styles.heading} sub-heading`}>
							{data.heading}
						</h2>

						<div className={styles.buttons}>{buttons}</div>
					</div>
				</div>
			</div>
		</>
	);
}
