import React from "react";
import Image from "next/image";
export default function page() {
    return (
        <div>
            <div className="ccpa_main">
                <div className="container">
                    <h1>Mennr LLC. CCPA</h1>
                    <Image
                        src="/ccpa.svg"
                        alt="chipy"
                        width="393"
                        height="279"
                    ></Image>
                </div>
            </div>
            <div className="container"></div>
        </div>
    );
}
