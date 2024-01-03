import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Services() {
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link href="/">SEO</Link>
                    </li>
                    <li>
                        <Link href="/">Social Media Management</Link>
                    </li>
                    <li>
                        <Link href="/">Facebook Ads</Link>
                    </li>
                    <li>
                        <Link href="/">Google Ads</Link>
                    </li>
                    <li>
                        <Link href="/">Reputation Management</Link>
                    </li>
                    <li>
                        <Link href="/">Website Design & Developemnt</Link>
                    </li>
                    <li>
                        <Link href="/">Review Management</Link>
                    </li>
                    <Link href="/">All Our Marketing Skills</Link>
                </ul>
            </div>
            <div>
                <Image
                    src="/home/service_chipy.svg"
                    alt="chipy"
                    width="252"
                    height="268"
                />
            </div>
        </div>
    );
}
