"use client";

import React, { useState } from "react";

export default function BlogForm() {
	const [email, setEmail] = useState<string>();

	const handleBlog = () => {};

	return (
		<form className="social-mail" onSubmit={handleBlog}>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button aria-label="join our blog">Join</button>
		</form>
	);
}
