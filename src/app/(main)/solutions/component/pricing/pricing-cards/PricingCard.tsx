"use client";

import React, { useRef, useEffect } from "react";
import styles from "./pricing-card.module.scss";

import { Card, Service } from "../Pricing";
import PricingModal from "./pricing-modal/PricingModal";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

interface PricingCardProps {
	data: Card;
}

interface ServicesInfoProps {
	data: Service;
}

export interface ModalMethods {
	openModal: () => void;
	closeModal: () => void;
}

function ServicesInfo({ data }: ServicesInfoProps) {
	const modalRef = useRef<ModalMethods | null>(null);

	const services = data.services.map((service) => {
		return (
			<li key={service.id}>
				<NavigationMenu.Root>
					<NavigationMenu.List className={styles.hover}>
						<NavigationMenu.Item>
							<NavigationMenu.Trigger className={styles.trigger}>
								{service.head}
							</NavigationMenu.Trigger>

							<NavigationMenu.Content
								className={styles.hoverContent}
							>
								{service.hover}
							</NavigationMenu.Content>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</li>
		);
	});

	const openModal = () => {
		modalRef.current?.openModal();
	};

	const closeModal = () => {
		modalRef.current?.closeModal();
	};

	return (
		<>
			{/* <>
				<PricingModal ref={modalRef} data={data.modal} />
			</> */}

			<div className={styles.service}>
				{data.heading && (
					<h4 className={styles.serviceHeading}>{data.heading}</h4>
				)}

				<p className={styles.text}>{data.text}</p>

				<p className={styles.pricing}>
					Starts from:{" "}
					<span className={styles.bold}>{data.price}</span>
				</p>

				<div className={styles.button}>
					<a href={data.link}>Get Discounted Quote</a>
				</div>

				<ul className={styles.list}>{services}</ul>

				{data.free && <p className={styles.free}>{data.free}</p>}

				{/* <div className={styles.modalOpen}>
					<button onClick={openModal}>Learn More</button>
				</div> */}
			</div>
		</>
	);
}

export default function PricingCard({ data }: PricingCardProps) {
	let len = data.card.length;
	const scrollParent = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const scrollInterval = setInterval(() => {
			if (len > 1)
				if (scrollParent.current) {
					let scroll = scrollParent.current.scrollLeft;
					console.log(scroll);

					if (scroll >= 1977) {
						scrollParent.current.scrollLeft = 0;
					} else {
						scrollParent.current.scrollLeft += 200;
					}
				}
		}, 10000);

		return () => clearInterval(scrollInterval);
	}, []);

	const services = data.card.map((service) => {
		return (
			<ServicesInfo key={data.heading + service.text} data={service} />
		);
	});

	return (
		<div className={styles.card}>
			<div className={styles.heading}>
				<h3>
					<img src={data.icon} alt="icon" width="32" height="32" />
					{data.heading}
				</h3>
			</div>

			<div
				className={`${styles.content} ${len > 1 ? styles.scroll : ""}`}
				ref={scrollParent}
			>
				{services}
			</div>
		</div>
	);
}
