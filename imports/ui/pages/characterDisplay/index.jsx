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
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";

// Meteor imports
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

// Component imports
import {
	DnDCharacterStatsSheet,
	DnDCharacterProfileSheet,
	DnDCharacterSpellSheet,
} from "dnd-character-sheets";
import "dnd-character-sheets/dist/index.css";

import CharacterSpeedDial from "../../components/CharacterComponents/CharacterSpeedDial.jsx";

export const CharacterDisplayPage = () => {
	// Get the character id from the URL
	const characterId = window.location.pathname.split("/")[2];
	console.log("Character ID:", characterId);

	// states
	const [character, setCharacter] = useState(loadDefaultCharacter());
	const [loading, setLoading] = useState(true);
	const [value, setValue] = React.useState("1");
	const [charName, setCharName] = React.useState("");
	const [roomName, setRoomName] = React.useState("");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	function updateCharacter(character) {
		setCharacter(character);
	}

	useEffect(() => {
		// Update the character name for the room whenever the character changes
		setCharName(character.name);
	}, [character]);

	const handleSave = (event) => {
		// Save the character to the database
		Meteor.call(
			"character.update",
			characterId,
			character,
			(error, result) => {
				if (!error) {
					console.log("Character saved:", result);
				} else {
					console.error("Error saving character:", error);
				}
			}
		);
	};

	const handleRoomJoin = () => {
		//setCharName(character.name);
		Meteor.call("rooms.createOrJoinRoom", roomName, charName, (error) => {
			if (error) {
				console.error(error.reason);
			} else {
				console.log("Room joined successfully");
			}
		});
	};

	const leaveRoom = () => {
		Meteor.call("rooms.leaveRoom", roomName, charName, (error, result) => {
			if (error) {
				console.error(error);
			} else {
				console.log("Left room successfully");
				// Handle any additional logic after leaving the room
			}
		});
	};

	// sheets not big enough to warrant their own components
	const statsSheet = (
		<DnDCharacterStatsSheet
			character={character}
			onCharacterChanged={updateCharacter}
		/>
	);
	const profileSheet = (
		<DnDCharacterProfileSheet
			character={character}
			onCharacterChanged={updateCharacter}
		/>
	);
	const spellSheet = (
		<DnDCharacterSpellSheet
			character={character}
			onCharacterChanged={updateCharacter}
		/>
	);

	function loadDefaultCharacter() {
		let character = {};
		return character;
	}

	// Get the current logged in user
	const loggedInUser = useTracker(() => Meteor.user()?.username);
	console.log("Logged in user:", loggedInUser);
	console.log("Character", character);

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

	// If the data is still loading, display a loading message

	if (loading) {
		return <div>Loading...</div>;
	}

	// If the data is finished loading, display the page
	// toss all the components into a grid

	return (
		<Box sx={{ flexGrow: 1, margin: 1.5 }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList
						onChange={handleChange}
						aria-label="lab API tabs example"
					>
						<Tab label="Stats" value="1" />
						<Tab label="Profile" value="2" />
						<Tab label="Spells" value="3" />
						<CharacterSpeedDial handleSave={handleSave} />
					</TabList>
				</Box>
				<div
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<div style={{ display: "flex" }}>
						<TextField
							sx={{
								textAlign: "right",
								width: "50%", // Adjust the width as needed
							}}
							id="roomName"
							label="RoomName"
							name="roomName"
							value={roomName}
							onChange={(e) => setRoomName(e.target.value)}
						/>
						<Button onClick={handleRoomJoin}>Join Room</Button>
						<Button onClick={leaveRoom}>Leave Room</Button>
					</div>
				</div>

				<TabPanel value="1">{statsSheet}</TabPanel>
				<TabPanel value="2">{profileSheet}</TabPanel>
				<TabPanel value="3">{spellSheet}</TabPanel>
			</TabContext>
		</Box>
	);
};
