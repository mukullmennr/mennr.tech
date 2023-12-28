import firebase_app from "./config";

import {
	getFunctions,
	httpsCallable,
	connectFunctionsEmulator,
} from "firebase/functions";

const functions = getFunctions();

connectFunctionsEmulator(functions, "127.0.0.1", 5001);

export const addMarketingEmail = httpsCallable(functions, "addMarketingEmail");
