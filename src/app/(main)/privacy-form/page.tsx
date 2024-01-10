"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
// import Link from "next/link";
// import Script from "next/script";
export default function Page() {
    // const count = useRef(0);

    useEffect(() => {
        // if (count.current != 0) return;

        // count.current = 1;

        const script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.src = "https://js.hsforms.net/forms/embed/v2.js";

        script.addEventListener("load", () => {
            // @ts-ignore
            hbspt.forms.create({
                region: "na1",
                portalId: "44671756",
                formId: "ab329a29-4088-435a-98f9-6a6602849646",
                target: "#hubspotForm",
            });
        });

        document.head.append(script);
    }, []);

    return (
        <div>
            <div className="form_main">
                <div className="container">
                    <h1>Mennr Privacy Rights Request Form</h1>
                    <Image
                        src="/ccpa.svg"
                        alt="chipy"
                        width="393"
                        height="279"
                    ></Image>
                </div>
            </div>
            <div className="container">
                <div className="form_content">
                    <p>
                        Certain states provide consumers with specific rights
                        regarding their personal information. You may use this
                        webform to submit your request, as permitted by
                        applicable law, to access, correct or delete personal
                        information collected by Mennr LLC, including on our
                        websites mennr.tech.
                    </p>
                    {/* <form>
                        <div className="form_name">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="form_content">
                            <input type="text" placeholder="Email ID" />
                            <input type="text" placeholder="State" />
                            <input type="text" placeholder="Business Name" />
                            <input type="text" placeholder="Business Phone" />
                            <select id="">
                                <option value="">I am a</option>
                                <option value="">
                                    Visiter / User of Mennr.tech
                                </option>
                                <option value="">Client of Mennr</option>
                                <option value="">
                                    Recipient of Email Marketing from Mennr
                                </option>
                                <option value="">
                                    Employee / Former Employee of Mennr
                                </option>
                                <option value="">Job Applicant to Mennr</option>
                                <option value="">
                                    Authorized Agent of One of the Above
                                </option>
                                <option value="">None of the Above</option>
                            </select>
                            <select id="">
                                <option value="">Request Type</option>
                                <option value="">
                                    Question about my Personal Information
                                </option>
                                <option value="">
                                    Access to my Personal Information
                                </option>
                                <option value="">
                                    Deletion of my Personal Information
                                </option>
                                <option value="">
                                    Correct my Personal Information
                                </option>
                                <option value="">Job Applicant to Mennr</option>
                                <option value="">
                                    Opt-out from the Sale or Share of Personal
                                    information
                                </option>
                            </select>
                            <textarea
                                id=""
                                placeholder="Details of your request:"
                            />
                        </div>
                        <div>
                            <p>Certification:</p>
                        </div>
                        <div className="form_check">
                            <input type="checkbox" />
                            <p>
                                I certify under penalty of perjury that: (i) I
                                am the consumer identified above or I have
                                permission to submit this request on such
                                consumer’s behalf; (ii) the consumer identified
                                above is a resident of the state identified
                                above; and (iii) the personal information I have
                                provided above is current, true and correct
                            </p>
                        </div>

                        <div className="form_button">
                            <button>Submit</button>
                        </div>
                    </form> */}
                    <div id="hubspotForm"></div>
                </div>
            </div>
        </div>
    );
}
