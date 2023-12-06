"use client";

import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import CarouselDots from "./CarouselDots";
import Image from "next/image";
import GooglePartner from "@/../public/common/googlepartner.png";
import Hubspot from "@/../public/common/hubspot.png";
import Yext from "@/../public/common/yext.png";

interface OurCertificationsProps {
	children: React.ReactNode; // heading for component
}

export default function OurCertifications({
	children,
}: OurCertificationsProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const scrollTo = useCallback(
		(index: number) => {
			setSelectedIndex(index);

			return emblaApi && emblaApi.scrollTo(index);
		},
		[emblaApi]
	);

	const onInit = useCallback((emblaApi: EmblaCarouselType) => {
		setScrollSnaps(emblaApi.scrollSnapList());
	}, []);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, []);

	useEffect(() => {
		const myInterval = setInterval(() => {
			console.log("working");
			if (emblaApi) emblaApi.scrollNext();
		}, 3000);

		return () => clearInterval(myInterval);
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;

		onInit(emblaApi);

		onSelect(emblaApi);
		emblaApi.on("reInit", onInit);
		emblaApi.on("reInit", onSelect);
		emblaApi.on("select", onSelect);
	}, [emblaApi, onInit, onSelect]);

	return (
		<div className="containerQuery ourcertifications-parent">
			<div className="ourcertifications">
				{children}

				<div className="ourcertifications-content">
					<img
						className="ourcertifications-content__image"
						src="/common/right.svg"
						alt="right arrow"
					/>

					<div
						className="embla ourcertifications-content__embla"
						ref={emblaRef}
					>
						<div className="embla__container">
							<div className="embla__slide">
								{/* <img
									src="/common/googlepartner.png"
									alt="Google Partner"
								/> */}
								<Image
									src={GooglePartner}
									alt="Google Partner"
								/>
							</div>

							<div className="embla__slide">
								{/* <img src="/common/hubspot.png" alt="Hubspot" /> */}
								<Image src={Hubspot} alt="Hubspot" />
							</div>

							<div className="embla__slide">
								{/* <img src="/common/yext.png" alt="Yext" /> */}
								<Image src={Yext} alt="Yext" />
							</div>
						</div>
					</div>
				</div>

				<div className="embla-dots">
					{scrollSnaps.map((_, index) => (
						<CarouselDots
							key={index}
							onClick={() => scrollTo(index)}
							className={"embla-dots__item".concat(
								index === selectedIndex ? " dot-selected" : ""
							)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
