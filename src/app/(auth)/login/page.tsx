import React from "react";
import Link from "next/link";
import LoginForm from "../Components/LoginForm";

export default function page() {
	return (
		<div className="login">
			<nav className="nav-login container">
				<Link href="/">
					<img src="/logo.svg" alt="mennr" />
				</Link>
			</nav>

			<div className="login-form container">
				<div className="login-form__element">
					<h1>
						Grow your business <span>today</span> with Mennr
					</h1>

					<img
						src="/common/chipy/chipy-hands-up-standing.svg"
						alt="chipy"
					/>
				</div>

				<LoginForm />
			</div>
		</div>
	);
}
