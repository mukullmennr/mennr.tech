import React from "react";
import Image from "next/image";

export default function Chipy() {
    return (
        <div className="container">
            <div className="home-solution__chipy">
                <div className="home-solution__chipy_arrow">
                    <Image
                        src="/home/home-solution-arrow-down.svg"
                        alt="arrow-down"
                        width="192"
                        height="302"
                    />
                </div>

                <div className="chipy-parent">
                    <div className="calender-container" id="getstarted">
                        <iframe
                            src="https://meetings.hubspot.com/luca-veneziano?embed=true"
                            frameBorder="0"
                            loading="lazy"
                            title="meeting-calander"
                        ></iframe>
                    </div>

                    <Image
                        src="/common/chipy/chipy-call-color.svg"
                        alt="chipy contact"
                        width="200"
                        height="210"
                    />
                </div>
            </div>
        </div>
    );
}
