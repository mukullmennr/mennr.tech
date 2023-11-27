"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { number } from "@/data/contact";
import Link from "next/link";
import NavUpper from "./NavUpper";
import NavMain from "./NavMain";

export default function Nav() {
	return (
		<>
			<NavUpper />
			<NavMain />
		</>
	);
}
