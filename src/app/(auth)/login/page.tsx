import React from "react";
import Link from "next/link";
import LoginForm from "../Components/LoginForm";
import Image from "next/image";

export default function page() {
	return (
		<div className="login">
			<nav className="nav-login container">
				<Link href="/" prefetch={false}>
					<Image
						src="/logo.svg"
						alt="mennr"
						width="192"
						height="36"
						priority={true}
					/>
				</Link>
			</nav>

			<div className="login-form container">
				<div className="login-form__element">
					<h1>
						Grow your business <span>today</span> with Mennr
					</h1>

					<Image
						src="/common/chipy/chipy-hands-up-standing.svg"
						alt="chipy"
						width="115"
						height="109"
					/>
				</div>

				<LoginForm />
			</div>
		</div>
	);
}
