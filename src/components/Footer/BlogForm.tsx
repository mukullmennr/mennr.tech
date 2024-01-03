"use client";

import React, { useState } from "react";

import { addMail } from "@/server-actions/actions";

export default function BlogForm() {
	const [email, setEmail] = useState<string>("");
	const [loading, setLoading] = useState(false);

	const handleBlog = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		if (email) {
			addMail(email)
				.then((res: any) => {
					alert(res.message);
				})
				.catch((err) => {
					alert(err.message);
				})
				.finally(() => {
					setLoading(false);
					setEmail("");
				});
		}
	};

	return (
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
	);
}
