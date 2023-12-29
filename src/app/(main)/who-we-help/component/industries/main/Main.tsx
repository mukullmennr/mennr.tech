import React from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {
	BreadCrumbContent,
	BreadCrumbItem,
} from "@/components/Breadcrumb/Breadcrumb";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import GooglePartner from "@/../public/industries/google.svg";
import Hubspot from "@/../public/industries/hubspot.svg";
import Yext from "@/../public/industries/yext.svg";

interface MainContent {
	heading: string;
	subIndustries?: BreadCrumbItem[];
	img: string;
	showCertification?: boolean;
}

interface MainContentProps {
	data: MainContent;
	breadcrumb: BreadCrumbContent;
}

export default function Main({ data, breadcrumb }: MainContentProps) {
	const links = data.subIndustries?.map((subindustry) => {
		return (
			<Link key={subindustry.text} href={subindustry.link}>
				{subindustry.text}
				<span>
					<FontAwesomeIcon icon={faAngleRight} />
				</span>
			</Link>
		);
	});

	return (
		<>
			<div className="industries-main">
				<Breadcrumb data={breadcrumb} />

				<div className="container">
					<div className="industries-main__element">
						<h1 className="heading">{data.heading}</h1>

						{data.subIndustries && (
							<div className="links">{links}</div>
						)}

						{data.showCertification && (
							<div className="sub-industries__certification">
								<h3>Certified by</h3>

								<div className="sub-industries__images ">
									<Image
										src="/industries/our-certification-arrow-white.svg"
										alt="arrow"
										width="93"
										height="49"
										priority={true}
									/>

									<div className="sub-industries-images__container google">
										<Image
											src={GooglePartner}
											alt="Google Partner"
											priority={true}
										/>
									</div>
									<div className="sub-industries-images__container">
										<Image
											src={Hubspot}
											alt="Hubspot"
											priority={true}
										/>
									</div>
									<div className="sub-industries-images__container">
										<Image
											src={Yext}
											alt="Yext"
											priority={true}
										/>
									</div>
								</div>
							</div>
						)}
					</div>

					<div className="industries-main__element image">
						<Image
							src={data.img}
							alt="chipy"
							width="442"
							height="354"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
