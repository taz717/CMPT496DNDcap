///////////////////////////////////////////////////////////////////////////////
// Purpose   : Display a character's stats and show a dice roller
// Parameters: characterId - the id of the character to display
// Returns   : CharacterDisplayPage page
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

// TODO check if char belongs to user

// React imports
import React, { useState, useEffect } from "react";

// Material UI imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import PersonIcon from "@mui/icons-material/Person";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

// Meteor imports
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

// Component imports
import { DnDCharacterStatsSheet } from "dnd-character-sheets";
import "dnd-character-sheets/dist/index.css";

export const CharacterDisplayPage = () => {
	// Get the character id from the URL
	const characterId = window.location.pathname.split("/")[2];
	console.log("Character ID:", characterId);

	// Set up state variables
	const [characterData, setCharacter] = useState({
		name: "",
		ownerID: "",
		class: [],
		level: 0,
		xp: 0,
		race: "",
		background: {
			name: "",
			description: "",
		},
		details: {
			age: 0,
			height: "",
			weight: "",
			eyes: "",
			skin: "",
			hair: "",
		},
		alignment: "",
		inspiration: false,
		ac: 0,
		initiative: 0,
		speed: 0,
		hp: 0,
		maxHP: 0,
		deathSaves: {
			successes: 0,
			failures: 0,
		},
		savingThrows: {
			strength: 0,
			dexterity: 0,
			constitution: 0,
			intelligence: 0,
			wisdom: 0,
			charisma: 0,
		},
		weaponProficiencies: ["", ""],
		armorProficiencies: ["", "", ""],
		feats: [""],
		skills: {
			acrobatics: 0,
			animalHandling: 0,
			arcana: 0,
			athletics: 0,
			deception: 0,
			history: 0,
			insight: 0,
			intimidation: 0,
			investigation: 0,
			medicine: 0,
			nature: 0,
			perception: 0,
			performance: 0,
			religion: 0,
			sleightOfHand: 0,
			stealth: 0,
			survival: 0,
		},
		equipped: {
			armor: [{}],
			weapons: [{}],
		},
		equipment: [{}],
		carryWeight: 0,
		maxCarryWeight: 0,
		knownSpells: [{}],
		preparedSpells: [{}],
	});
	const [loading, setLoading] = useState(true);

	// Get the current logged in user
	const loggedInUser = useTracker(() => Meteor.user()?.username);
	console.log("Logged in user:", loggedInUser);

	// Get the character data from the database
	useEffect(() => {
		// Connect to MongoDB and fetch character data
		const fetchCharacterData = () => {
			Meteor.call("character.getOne", characterId, (error, result) => {
				if (!error) {
					console.log("Character Data:", result);
					setCharacter(result);
				} else {
					console.error("Error fetching character data:", error);
				}
				setLoading(false);
			});
		};

		fetchCharacterData(); // Call the fetch function when the component mounts

		return () => {
			// Cleanup (optional): This function will be called when the component is unmounted
		};
	}, [characterId]);

	console.log("Character data:", characterData);

	// Get the character's owner
	const owner = characterData.character?.username;

	// If the data is still loading, display a loading message

	if (loading) {
		return <div>Loading...</div>;
	}

	// If the data is finished loading, display the page
	// toss all the components into a grid

	return <DnDCharacterStatsSheet />;
};
