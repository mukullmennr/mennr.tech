"use client";

import React from "react";

import {
    faq,
    notSure,
    cards,
    main,
    road,
    getInTouch,
    pricing,
} from "@/data/solution";
import FAQ from "@/components/FAQ/FAQ";
import NotSure from "./component/not-sure/NotSure";
import Cards from "./component/cards/Cards";
import Main from "./component/main/Main";
import Road from "./component/road/Road";
import GetInTouch from "./component/getInTouch/GetInTouch";
import Pricing from "./component/pricing/Pricing";

export default function page() {
    return (
        <div className="solution-container">
            <Main data={main} />

            {/* <div style={{ marginBlock: "5.4rem" }}></div> */}

            <Road data={road} />

            {/* <div style={{ marginBlock: "5.4rem" }}></div> */}

            <Cards data={cards} />

            {/* <div style={{ marginBlock: "5.4rem" }}></div> */}

            <Pricing data={pricing} />

            {/* <div style={{ marginBlock: "5.4rem" }}></div> */}

            <GetInTouch data={getInTouch} />

            {/* <div style={{ marginBlock: "5.4rem" }}></div> */}

            <FAQ ques={faq.data}>{faq.heading}</FAQ>

            {/* <div style={{ marginBlock: "5.4rem" }}></div> */}

            <NotSure data={notSure} />
        </div>
    );
}
