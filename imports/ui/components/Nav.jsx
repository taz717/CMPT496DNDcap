import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export const Nav = () => {
	const location = useLocation();

	//Pages where navigation bar is hidden
	const navBarPages = [
		"/login"
	]

	//Using the above list, check if current page should be hidden
	const showNavBar = navBarPages.includes(location.pathname);

	return (
		<AppBar position="static">
			<Toolbar>
				<Button color="inherit"><Link to="/">Home</Link></Button>
				<Button color="inherit"><Link to="/characterSheet">Character Sheet</Link></Button>
				<Button color="inherit"><Link to="/playerInventory">Player Inventory</Link></Button>
				<Button color="inherit"><Link to="/playerSpells">Player Spells</Link></Button>				
			</Toolbar>
		</AppBar>
		
	);
};
