"use client";

import React, { useCallback } from "react";
import { solutions } from "@/data/home/solutions";
import Cards from "./Cards";
import useEmblaCarousel from "embla-carousel-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Autoplay from "embla-carousel-autoplay";

export default function SolutionsCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
		Autoplay({ delay: 3000 }),
	]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	const items = solutions.map((item, index) => {
		return (
			<Cards
				key={index}
				// image={`/home/solutions/solutions${index + 1}.WebP`}
				image={`/home/solutions/solutions${index + 1}.WebP`}
				title={item.heading}
				text={item.text}
				link={item.link}
			/>
		);
	});

	return (
		<div className="solutions-carousel">
			<div className="container">
				<div className="embla" ref={emblaRef}>
					<div className="embla__container">{items}</div>
				</div>

				<>
					<button onClick={scrollPrev} aria-label="previous slide">
						<FontAwesomeIcon icon={faAngleLeft} />
					</button>

					<button
						className="right"
						onClick={scrollNext}
						aria-label="next slide"
					>
						<FontAwesomeIcon icon={faAngleRight} />
					</button>
				</>
			</div>
		</div>
	);
}
