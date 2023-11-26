// Base imports
import { Routes, Route } from "react-router-dom";
import React from "react";
import { Meteor } from 'meteor/meteor';

// navbar
// TODO remake this using MUI
import { Nav } from "./components/Nav.jsx";

// Page imports
// if you want to add a page, add it here and in the Routes
// make sure to follow the same format as the other pages

import { Info } from "./pages/Info.jsx";
import SignIn from "./pages/sign-in/SignIn.js";
import SignUp from "./pages/account-create/SignUp.js";
import { UserChoice } from "./pages/UserChoice.jsx";
import { PlayerCharList} from "./pages/PlayerCharList.jsx";
import { DM } from "./pages/DM.jsx";
import { Character } from "./pages/Character.jsx";
import { CharacterCreate } from "./pages/CharacterCreate.jsx";

// App/Router for this project, it will be the same thing
export const App = () => {
	
	return (
		<div>
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/info" element={<Info />} />
				<Route path="/choice" element={<UserChoice />} />
				<Route path="/DM" element={<DM />} />
				<Route path="/playerCharList" element={<PlayerCharList />} />
				<Route path="/character/:characterId" element={<Character />} />
				<Route path="/create" element={<CharacterCreate />} />
			</Routes>
		</div>
	);
};
