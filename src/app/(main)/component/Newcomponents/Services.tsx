import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Services() {
    return (
        <div className="container">
            <div className="home_service">
                <div className="home_service_content">
                    <ul>
                        <li>
                            <Link href="/" prefetch={false}>
                                SEO
                            </Link>
                        </li>
                        <li>
                            <Link href="/" prefetch={false}>
                                Social Media Management
                            </Link>
                        </li>
                        <li>
                            <Link href="/" prefetch={false}>
                                Facebook Ads
                            </Link>
                        </li>
                        <li>
                            <Link href="/" prefetch={false}>
                                Google Ads
                            </Link>
                        </li>
                        <li>
                            <Link href="/" prefetch={false}>
                                Reputation Management
                            </Link>
                        </li>
                        <li>
                            <Link href="/" prefetch={false}>
                                Website Design & Developemnt
                            </Link>
                        </li>
                        <li>
                            <Link href="/" prefetch={false}>
                                Review Management
                            </Link>
                        </li>
                    </ul>
                    <Link href="/" prefetch={false}>
                        All Our Marketing Skills
                    </Link>
                </div>
                <div className="home_service_chipy">
                    <Image
                        src="/home/service_chipy.svg"
                        alt="chipy"
                        width="252"
                        height="268"
                    />
                </div>
            </div>
        </div>
    );
}