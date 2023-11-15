// Base imports
import { Routes, Route } from "react-router-dom";
import React from "react";

// navbar
// TODO remake this using MUI
import { Nav } from "./components/Nav.jsx";

// Page imports
// if you want to add a page, add it here and in the Routes
// make sure to follow the same format as the other pages
import { Hello } from "./pages/Hello.jsx";
import { Info } from "./pages/Info.jsx";
import SignIn from "./pages/sign-in/SignIn.js";
import SignUp from "./pages/account-create/SignUp.js";

// App/Router for this project, it will be the same thing
export const App = () => {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/info" element={<Info />} />
			</Routes>
		</div>
	);
};
