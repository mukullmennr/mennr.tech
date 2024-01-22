import React from "react";
import styles from "./button-container.module.scss";
import { Buttons } from "../../GetInTouch";
import DropDown from "../DropDown/DropDown";

interface ButtonContainerProps {
	data: Buttons;
}

export default function ButtonContainer({ data }: ButtonContainerProps) {
	return (
		<div className={styles.button} id={data.link}>
			<a className={styles.link} href={`#${data.link}`}>
				{data.title}
			</a>

			<DropDown data={data.dropDown} />
		</div>
	);
}
