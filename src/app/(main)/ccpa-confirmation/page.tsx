import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function page() {
    return (
        <div>
            <div className="container">
                <div className="ccpa_conf_heading">
                    <p>Thank you!</p>
                    <Image
                        src="/common/chipy/sub-industries/other-small-businesses/law.svg"
                        alt="celebrate"
                        width="199"
                        height="152"
                    />
                </div>
                <div className="ccpa_conf_content">
                    <p>
                        Thank you for submitting your request. We will be in
                        touch with you shortly.
                    </p>
                </div>
                <div className="ccpa_conf_link">
                    <div>
                        <Link href="/" prefetch={false}>
                            Explore Mennr&apos;s website
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
