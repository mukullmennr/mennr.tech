import React from "react";
import Link from "next/link";
import style from "./sample_page.module.scss";
import { StyleRegistry } from "styled-jsx";
interface sample {
    data: {
        img: string;
        link: string;
    };
}
export default function Sample_page({ data }: sample) {
    return (
        <div className={style.bg_sample}>
            <div className={style.sample_page}>
                <div className={style.content}>
                    <div className={style.head}>
                        <h3>Not confident regarding your website design?</h3>
                        <p>
                            Feeling lost in the sea of website designs? Let's
                            simplify. Focus on clarity, ease of use, and
                            consistency with our brand. By prioritizing these,
                            we ensure your website effectively communicates with
                            your audience, reflecting your identity and making
                            navigation a breeze.
                        </p>
                    </div>
                    <div className={style.img}>
                        <img src={data.img} />
                    </div>
                    <div className={style.link}>
                        <Link href={data.link}>View Sample Page</Link>
                    </div>
                </div>
                <div className={style.img2}>
                    <img src={data.img} />
                </div>
            </div>
        </div>
    );
}
