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

// component imports
import SavingThrowDisplay from "../../components/CharacterComponents/SavingThrowDisplay";
import EquipmentDisplay from "../../components/CharacterComponents/EquipmentDisplay";
import EquippedDisplay from "../../components/CharacterComponents/EquippedDisplay";

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
			height: "3'6",
			weight: "60 lbs",
			eyes: "Blue",
			skin: "Tan",
			hair: "Brown",
		},
		alignment: "Chaotic Good",
		inspiration: false,
		ac: 12,
		initiative: 2,
		speed: 25,
		hp: 12,
		maxHP: 12,
		deathSaves: {
			successes: 0,
			failures: 0,
		},
		savingThrows: {
			strength: -1,
			dexterity: 8,
			constitution: 1,
			intelligence: 2,
			wisdom: 7,
			charisma: 5,
		},
		weaponProficiencies: ["simple", "martial"],
		armorProficiencies: ["light", "medium", "heavy"],
		feats: ["lucky", "halfling nimbleness"],
		skills: {
			acrobatics: 2,
			animalHandling: 2,
			arcana: 2,
			athletics: 2,
			deception: 2,
			history: 2,
			insight: 2,
			intimidation: 2,
			investigation: 2,
			medicine: 2,
			nature: 2,
			perception: 2,
			performance: 2,
			religion: 2,
			sleightOfHand: 2,
			stealth: 2,
			survival: 2,
		},
		equipped: {
			armor: [{}],
			weapons: [{}],
		},
		equipment: [{}],
		carryWeight: 0,
		maxCarryWeight: 10,
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

	return (
		<Box>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Typography variant="h6">Character Name</Typography>
				</Grid>
				<Grid item xs={6}>
					<SavingThrowDisplay
						savingThrows={characterData.savingThrows}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};
