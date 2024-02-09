"use client";

import React, { useRef, useEffect } from "react";
import styles from "./pricing-card.module.scss";

import { Card, Service } from "../Pricing";
import PricingModal from "./pricing-modal/PricingModal";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faAngleRight,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

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

    function gtag_report_conversion(url: Location | undefined) {
        var callback = function () {
            if (typeof url != "undefined") {
                window.location = url;
            }
        };

        // @ts-expect-error
        gtag("event", "conversion", {
            send_to: "AW-11406722063/F1-QCI2s3owZEI-Ik78q",
            event_callback: callback,
        });
        return false;
    }

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
                    {data.price_head}
                    <span className={styles.bold}>{data.price}</span>
                </p>

                <div className={styles.button}>
                    <a
                        onClick={() => gtag_report_conversion(undefined)}
                        href={data.link}
                    >
                        Get Pricing
                    </a>
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
    let isMultiple: boolean = data.card.length > 1;
    const scrollParent = useRef<HTMLDivElement | null>(null);
    const modalRef = useRef<ModalMethods | null>(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (isMultiple)
                if (scrollParent.current) {
                    let hover = scrollParent.current.matches(":hover");

                    if (hover) return;

                    let scroll = scrollParent.current.scrollLeft;

                    if (scroll >= 1977) {
                        scrollParent.current.scrollLeft = 0;
                    } else {
                        scrollParent.current.scrollLeft += 200;
                    }
                }
        }, 10000);

        return () => clearInterval(scrollInterval);
    }, []);

    const handleLeft = () => {
        if (scrollParent.current) {
            let scroll = scrollParent.current.scrollLeft;

            if (scroll >= 0) {
                scrollParent.current.scrollLeft -= 200;
            }
        }
    };

    const handleRight = () => {
        if (scrollParent.current) {
            let scroll = scrollParent.current.scrollLeft;

            if (scroll <= 1977) {
                scrollParent.current.scrollLeft += 200;
            }
        }
    };

    const services = data.card.map((service, index) => {
        // if (index >= 2) return;
        return (
            <ServicesInfo key={data.heading + service.text} data={service} />
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
            <>
                <PricingModal ref={modalRef} />
            </>
            <div className={styles.card}>
                <div className={styles.heading}>
                    <h3>
                        <img
                            src={data.icon}
                            alt="icon"
                            width="40"
                            height="40"
                        />
                        {data.heading}
                    </h3>
                </div>

                {isMultiple && (
                    <div className={styles.controls}>
                        <button className={styles.left} onClick={handleLeft}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>

                        <button className={styles.right} onClick={handleRight}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                )}

                <div
                    className={`${styles.content} ${
                        isMultiple ? styles.scroll : ""
                    }`}
                    ref={scrollParent}
                >
                    {services}
                </div>

                {data.compare && (
                    <div className={styles.compare}>
                        <button onClick={openModal}>
                            Compare Plans{" "}
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
