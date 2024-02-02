"use server";

export const addMail = async (email) => {
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
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUBSPOT}`,
		};

		let res = await fetch(url, {
			method: "POST",
			headers: headers,
			body: body,
		});

		console.log("awaiting server response");
		res = await res.json();
		console.log(res);

		if (res.status === "error") {
			if (res.category === "CONFLICT") {
				throw new Error("1");
			} else if (res.category === "VALIDATION_ERROR") {
				throw new Error("2");
			} else {
				throw new Error("3");
			}
		}

		return {
			success: true,
			message: "Successfully added email",
		};
	} catch (error) {
		console.error(error);
		throw new Error(error.message);
	}
};
