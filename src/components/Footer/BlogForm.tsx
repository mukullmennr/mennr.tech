"use client";

import React, { useState, useRef } from "react";

import { addMail } from "@/server-actions/actions";

export default function BlogForm() {
	const [email, setEmail] = useState<string>("");
	const [loading, setLoading] = useState(false);

	const responseModalRef = useRef<HTMLDialogElement | null>(null);
	const [res, setRes] = useState<number>(0);

	const handleBlog = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		if (email) {
			// res 0->success 1->already in 2->invalid email 3->internal error

			addMail(email)
				.then((res: any) => {
					setRes(0);
				})
				.catch((err) => {
					let code = +err.message;
					console.log(err.message);
					console.log(code);

					if (typeof code !== "number") {
						setRes(3);
						return;
					}

					setRes(code);
				})
				.finally(() => {
					setLoading(false);
					setEmail("");

					responseModalRef.current?.showModal();
				});
		}
	};

	const handleClose = () => {
		responseModalRef.current?.close();
	};

	const resImage = () => {
		switch (res) {
			case 0:
				return (
					<img
						src="/footer/success.svg"
						alt="chipy"
						width={136}
						height={142}
					/>
				);
			case 1:
				return (
					<img
						src="/footer/already.svg"
						alt="chipy"
						width={136}
						height={142}
					/>
				);
			case 2:
				return (
					<img
						src="/footer/invalid-email.svg"
						alt="chipy"
						width={136}
						height={142}
					/>
				);
			default:
				return (
					<img
						src="/footer/error.svg"
						alt="chipy"
						width={136}
						height={142}
					/>
				);
		}
	};

	const resText = () => {
		switch (res) {
			case 0:
				return "High-five! You've just made our day by joining. Get ready for a wave of awesome content and surprises!";
			case 1:
				return "You're in! No need to sign up again – your email is already subscribed. Thanks for being a loyal member!";
			case 2:
				return "Oh no! It seems there's an issue with the email. Could you please check and enter a valid email to join our community?";
			default:
				return "Apologies! We're experiencing an internal error. It's definitely not your fault. Please try again in a few moments. Thanks for your understanding!";
		}
	};

	return (
		<>
			<>
				<dialog className="newsletter-response" ref={responseModalRef}>
					<div>
						<div className="newsletter-response__image">
							{resImage()}
						</div>

						<div className="newsletter-response__text">
							<p>{resText()}</p>

							<button onClick={handleClose}>Okay</button>
						</div>
					</div>
				</dialog>
			</>

			<form className="social-mail" onSubmit={handleBlog}>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					name="email"
				/>
				<button aria-label="join our blog" disabled={loading}>
					{loading ? "Adding..." : "Join"}
				</button>
			</form>
		</>
	);
}
