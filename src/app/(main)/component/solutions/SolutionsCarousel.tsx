"use client";

import React, { useCallback } from "react";
import { solutions } from "@/data/home/solutions";
import Cards from "./Cards";
import useEmblaCarousel from "embla-carousel-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Autoplay from "embla-carousel-autoplay";

import solutionsImage1 from "@/../public/home/solutions/solutions1.png";
import solutionsImage2 from "@/../public/home/solutions/solutions2.png";
import solutionsImage3 from "@/../public/home/solutions/solutions3.png";
import solutionsImage4 from "@/../public/home/solutions/solutions4.png";
import solutionsImage5 from "@/../public/home/solutions/solutions5.png";
import solutionsImage6 from "@/../public/home/solutions/solutions6.png";
import solutionsImage7 from "@/../public/home/solutions/solutions7.png";
import solutionsImage8 from "@/../public/home/solutions/solutions8.png";
import solutionsImage9 from "@/../public/home/solutions/solutions9.png";
import solutionsImage10 from "@/../public/home/solutions/solutions10.png";
import solutionsImage11 from "@/../public/home/solutions/solutions11.png";
import solutionsImage12 from "@/../public/home/solutions/solutions12.png";
import { StaticImageData } from "next/image";

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
		let img: StaticImageData = solutionsImage1;

		switch (index) {
			case 0:
				img = solutionsImage1;
				break;
			case 1:
				img = solutionsImage2;
				break;
			case 2:
				img = solutionsImage3;
				break;
			case 3:
				img = solutionsImage4;
				break;
			case 4:
				img = solutionsImage5;
				break;
			case 5:
				img = solutionsImage6;
				break;
			case 6:
				img = solutionsImage7;
				break;
			case 7:
				img = solutionsImage8;
				break;
			case 8:
				img = solutionsImage9;
				break;
			case 9:
				img = solutionsImage10;
				break;
			case 10:
				img = solutionsImage11;
				break;
			case 11:
				img = solutionsImage12;
				break;
		}

		return (
			<Cards
				key={index}
				// image={`/home/solutions/solutions${index + 1}.png`}
				image={img}
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
					<button onClick={scrollPrev}>
						<FontAwesomeIcon icon={faAngleLeft} />
					</button>

					<button className="right" onClick={scrollNext}>
						<FontAwesomeIcon icon={faAngleRight} />
					</button>
				</>
			</div>
		</div>
	);
}
