import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function page() {
    return (
        <div>
            <div className="container">
                <div className="thankyou_heading">
                    <p>Thank you!</p>
                    <Image
                        src="/common/chipy/thankyou_chipy.svg"
                        alt="celebrate"
                        width="199"
                        height="152"
                    />
                </div>
                <div className="thankyou_content">
                    <p>
                        Your request has been received. Our team will review
                        your request and reach out to you within 2 working days.
                    </p>
                </div>
                <div className="thankyou_link">
                    <div>
                        <Link href="/" prefetch={false}>
                            Explore Mennr&apos;s Website
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
