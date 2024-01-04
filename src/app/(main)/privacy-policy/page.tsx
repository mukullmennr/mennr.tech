import React from "react";
import Image from "next/image";
export default function page() {
    return (
        <div>
            <div className="policy_main">
                <div className="container">
                    <h1>Mennr LLC Privacy Policy</h1>
                    <Image
                        src="/ccpa.svg"
                        alt="chipy"
                        width="393"
                        height="279"
                    ></Image>
                </div>
            </div>
            <div className="container">
                <div></div>
            </div>
        </div>
    );
}
