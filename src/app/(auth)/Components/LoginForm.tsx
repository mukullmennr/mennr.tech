"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ClientInfo {
	email: string;
	password: string;
}

export default function LoginForm() {
	const [clientInfo, setClientInfo] = useState<ClientInfo>({
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let key = e.target.name;
		let value = e.target.value;

		setClientInfo((prev) => {
			return {
				...prev,
				[key]: value,
			};
		});
	};

	return (
		<div className="login-form__element">
			<img src="/common/chipy/chipy-sitting.svg" alt="chipy" />

			<h3>User Login</h3>

			<form onSubmit={handleSubmit} className="form">
				<div className="form-item">
					<label htmlFor="email">Email ID</label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="Email..."
						value={clientInfo.email}
						onChange={handleChange}
					/>
				</div>

				<div className="form-item">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						name="password"
						type={`${!showPassword ? "password" : "text"}`}
						placeholder="Password..."
						value={clientInfo.password}
						onChange={handleChange}
					/>

					<div className="form-item__sub">
						<input
							type="checkbox"
							id="show-password"
							checked={showPassword}
							onChange={(e) => setShowPassword(e.target.checked)}
						/>
						<label htmlFor="show-password">Show Password</label>
					</div>
				</div>

				<div className="form-item">
					<button type="submit">Login</button>
				</div>
			</form>

			<div className="login-links">
				<div className="login-links__element">
					<Link href="/" target="_blank">
						Forgot Password
					</Link>
				</div>

				<div className="login-links__element">
					<Link href="/">Admin Login</Link>
				</div>
			</div>
		</div>
	);
}
