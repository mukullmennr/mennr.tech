"use server";

export const addMail = async (email) => {
	// const email = formData.get("email");

	try {
		const url = "https://api.hubapi.com/crm/v3/objects/contacts";
		const body = JSON.stringify({
			properties: {
				email: email,
				lifecyclestage: "subscriber",
			},
		});
		const headers = {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.HUBSPOT}`,
		};

		let res = await fetch(url, {
			method: "POST",
			headers: headers,
			body: body,
		});

		res = await res.json();
		console.log(res);

		if (res.status === "error") {
			if (res.category === "CONFLICT")
				throw new Error("Email already exist");
			else if (res.category === "VALIDATION_ERROR") {
				throw new Error("Invalid email");
			} else {
				throw new Error("Can't add email right now");
			}
		}

		return {
			success: true,
		};
	} catch (error) {
		throw new Error(error.message);
	}
};
