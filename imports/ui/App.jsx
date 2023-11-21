// Base imports
import { Routes, Route } from "react-router-dom";
import React from "react";
import Button from '@mui/material/Button'

// navbar
// TODO remake this using MUI
import { Nav } from "./components/Nav.jsx";

// Page imports
// if you want to add a page, add it here and in the Routes
// make sure to follow the same format as the other pages
import { Login } from "./pages/Login.jsx";
import { CharacterSheet } from "./pages/CharacterSheet.jsx";
import { PlayerLogin } from "./pages/PlayerLogin.jsx";
import { PlayerInventory } from "./pages/PlayerInventory.jsx";
import { PlayerSpells } from "./pages/PlayerSpells.jsx";


// App/Router for this project, it will be the same thing
export const App = () => {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/playerInventory" element={<PlayerInventory />} />
				<Route path="/playerSpells" element={<PlayerSpells />} />
				<Route path="/characterSheet" element={<CharacterSheet />} />
				<Route path="/playerLogin" element={<PlayerLogin />} />
			</Routes>
		</div>
	);
};
