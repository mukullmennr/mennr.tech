"use client";

import React, { useState } from "react";
import { addMarketingEmail } from "@/firebase/firebase";

export default function BlogForm() {
	const [email, setEmail] = useState<string>();
	const [loading, setLoading] = useState(false);

	const handleBlog = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		addMarketingEmail({ email })
			.then((res) => {
				alert("successfully added");
			})
			.catch((err) => {
				alert("can't add email right now");
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<form className="social-mail" onSubmit={handleBlog}>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<button aria-label="join our blog" disabled={loading}>
				{loading ? "Adding..." : "Join"}
			</button>
		</form>
	);
}
