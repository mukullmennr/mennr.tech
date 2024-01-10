import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
    return (
        <div>
            <div className="do-not_main">
                <div className="container">
                    <h1>Do Not Sell or Share My Personal Info</h1>
                    <Image
                        src="/ccpa.svg"
                        alt="chipy"
                        width="393"
                        height="279"
                    ></Image>
                </div>
            </div>
            <div className="container">
                <div className="do-not">
                    <h2>Do Not Sell or Share My Personal Info</h2>
                    <h3>
                        OPT OUT FROM SALE OR SHARING OF PERSONAL INFORMATION
                    </h3>
                    <p>
                        Mennr may sell or share Personal Information in the
                        circumstances described in our&nbsp;
                        <Link href="/privacy-policy" prefetch={false}>
                            Privacy Policy
                        </Link>
                        . Residents of California, Virginia, Colorado and
                        Connecticut have the right under the laws of those
                        states to opt-out from the sale or sharing of their
                        Personal Information. If you are a resident of one of
                        those states and you want opt-out from the sale or
                        sharing of your Personal Information, you may{" "}
                        <Link href="/privacy-form" prefetch={false}>
                            submit an opt-out request by clicking here
                        </Link>
                        .
                    </p>
                    <p>
                        In addition, as described in our Privacy Policy, when
                        you visit our website we may collect certain information
                        from you via cookies and other tracking devices to serve
                        you content, offers and advertising relevant to your
                        interests. If you would like to opt-out from that form
                        of sharing, you can adjust the cookie settings on your
                        browser. (Most browsers have a Help or Settings menu
                        that will provide direction on how to prevent your
                        laptop, tablet, smartphone or other device from
                        accepting certain types of cookies.) Please note that
                        disabling all cookies may limit the functionality of
                        certain features of our website. You can also click on
                        the links below for information on opting out of
                        receiving interest-based advertising from our
                        third-party partners:
                    </p>
                    <ul>
                        <li>
                            <a
                                href="https://policies.google.com/privacy#infochoices"
                                target="_blank"
                            >
                                Google
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://account.microsoft.com/privacy/ad-settings/signedout?refd=hibu.com&ru=https%3A%2F%2Faccount.microsoft.com%2Fprivacy%2Fad-settings%3Frefd%3Dhibu.com"
                                target="_blank"
                            >
                                Microsoft (Bing)
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                                target="_blank"
                            >
                                Meta (Facebook)
                            </a>
                        </li>
                        <li>
                            <a href="https://vwo.com/opt-out/" target="_blank">
                                VWO
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.ipromote.com/opt-out/"
                                target="_blank"
                            >
                                iPromote
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
