import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import ListItemIcon from "@mui/material/ListItemIcon";
import Autocomplete from "@mui/material/Autocomplete";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { getMonsters, getMonster } from "../../api/DnDCalls";
import { useEffect } from "react";

import MonsterSearch from "../components/MonsterSearch.jsx";
import SpellSearch from "../components/SpellSearch.jsx";

export const DM = () => {
	navigate = useNavigate();

	const [monster, setMonster] = React.useState("");
	const [monsterData, setMonsterData] = React.useState([]);
	const [monsterInfo, setMonsterInfo] = React.useState([]);

	useEffect(() => {
		getMonsters().then((data) => {
			console.log(data.results);
			setMonsterData(data.results);
		});
	}, []);

	const handleSearch = () => {
		monsterData.forEach((item) => {
			if (item.name === monster) {
				getMonster(item.url).then((data) => {
					setMonsterInfo(data);
					//console.log(data);
					addMonsterToEncounter(data);
				});
			}
		});
	};

	const addMonsterToEncounter = (monsterInstance) => {
		const baseName = monsterInstance.name;
		let newName = baseName;

		// Check if the base name already exists in the encounterList
		const existingNames = encounterList.map((character) =>
			character.isMonster && character.name.startsWith(baseName)
				? character.name
				: null
		);

		// If the base name already exists, append a number to make it unique
		let counter = 2;
		while (existingNames.includes(newName)) {
			newName = `${baseName} ${counter}`;
			counter++;
		}

		// Create the monster object with the required properties
		const monsterToAdd = {
			name: newName,
			isMonster: true,
			initialHP: monsterInstance.hit_points, // Replace 'hp' with the actual property in your monster object
		};

		// Add the unique monster name to the encounterList
		setEncounterList((prevList) => [...prevList, monsterToAdd]);
	};

	const handleHPChange = (event, index) => {
		const updatedEncounterList = [...encounterList];
		updatedEncounterList[index].initialHP = event.target.value;
		setEncounterList(updatedEncounterList);
	};

	const backClick = (event) => {
		navigate("/choice");
	};

	loggedInUser = Meteor.user({ fields: { username: 1 } })?.username;

	function CustomTabPanel(props) {
		const { children, value, index, ...other } = props;
		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && (
					<Box sx={{ p: 3 }}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	}

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	CustomTabPanel.propTypes = {
		children: PropTypes.node,
		index: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
	};

	function a11yProps(index) {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`,
		};
	}

	const [roomName, setRoomName] = React.useState("");
	const [characterList, setCharacterList] = useState([]);
	const [encounterList, setEncounterList] = useState([]);

	//Join room
	const handleAccessRoom = () => {
		Meteor.call("rooms.accessRoom", roomName, (error, result) => {
			if (error) {
				console.error(error);
			} else {
				console.log("Room accessed successfully");
				handleAccessOpen();
				setCharacterList(result);
			}
		});
	};

	const addCharToEncounter = (selectedCharacterName) => {
		const isAlreadyInEncounter = encounterList.includes(
			selectedCharacterName
		);

		if (!isAlreadyInEncounter) {
			// Add the selected character to the encounterList
			setEncounterList((prevList) => [
				...prevList,
				selectedCharacterName,
			]);
			//console.log(encounterList)
		}
	};

	const [open2, setAccess] = React.useState(false);

	const handleAccessOpen = () => {
		setAccess(true);
	};

	const handleClose = () => {
		setAccess(false);
	};

	const handleRemoveEncounter = (characterToRemove) => {
		const updatedEncounterList = encounterList.filter(
			(character) => character !== characterToRemove
		);

		// Update the encounterList state with the filtered list
		setEncounterList(updatedEncounterList);
	};

	const handleMoveUp = (index) => {
		if (index > 0) {
			const updatedList = [...encounterList];
			[updatedList[index], updatedList[index - 1]] = [
				updatedList[index - 1],
				updatedList[index],
			];
			setEncounterList(updatedList);
		}
	};

	const handleMoveDown = (index) => {
		if (index < encounterList.length - 1) {
			const updatedList = [...encounterList];
			[updatedList[index], updatedList[index + 1]] = [
				updatedList[index + 1],
				updatedList[index],
			];
			setEncounterList(updatedList);
		}
	};

	const handleRotateList = () => {
		if (encounterList.length > 1) {
			const rotatedList = [...encounterList.slice(1), encounterList[0]];
			setEncounterList(rotatedList);
		}
	};

	return (
		<>
			<Container component="main" maxWidth="lg">
				<Box sx={{ width: "100%" }}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label="basic tabs example"
						>
							<Tab label="Lookup" {...a11yProps(0)} />
							<Tab label="Encounter Tracker" {...a11yProps(1)} />
						</Tabs>
					</Box>
					<CustomTabPanel value={value} index={0}>
						<Box margin={1.5}>
							<MonsterSearch />
						</Box>
						<Box margin={1.5}>
							<SpellSearch />
						</Box>
					</CustomTabPanel>
					<CustomTabPanel value={value} index={1}>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<TextField
									sx={{
										width: "60%", // Adjust the width as needed
									}}
									id="roomName"
									label="RoomName"
									name="roomName"
									value={roomName}
									autoFocus
									onChange={(e) =>
										setRoomName(e.target.value)
									}
								/>
								<Button onClick={handleAccessRoom}>
									Access Room
								</Button>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<Autocomplete
									id="monster-search"
									value={monster}
									onChange={(event, newValue) => {
										setMonster(newValue);
									}}
									options={monsterData.map(
										(option) => option.name
									)}
									renderInput={(params) => (
										<TextField
											{...params}
											label="Monster"
											variant="outlined"
											sx={{ width: "300px" }}
										/>
									)}
								/>
								<Button onClick={handleSearch}>
									Add Monster
								</Button>
							</div>
						</div>
						<Box
							sx={{
								maxHeight: "400px",
								overflowY: "auto",
								marginTop: 2,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								width: "100%",
							}}
						>
							{encounterList.length === 0 ? (
								<Typography>
									No characters in encounter
								</Typography>
							) : (
								<List sx={{ width: "70%" }}>
									{encounterList.map((character, index) => (
										<ListItem
											sx={{
												border: 1,
												margin: 0.25,
												padding: "12px",
											}}
											button
											key={index}
										>
											<ListItemText
												primary={`${index + 1}. ${
													character.isMonster
														? character.name
														: character
												}`}
												sx={{ minWidth: "70%" }}
											/>
											{character.isMonster && ( // Check if it's a monster
												<ListItemSecondaryAction
													sx={{
														minWidth: "70%",
														width: "50px",
													}}
												>
													<TextField
														sx={{
															width: "15%",
															marginLeft: "auto",
														}}
														label="HP"
														type="number"
														size="small"
														value={
															character.initialHP ||
															""
														}
														onChange={(e) =>
															handleHPChange(
																e,
																index
															)
														}
													/>
												</ListItemSecondaryAction>
											)}
											<ListItemSecondaryAction
												sx={{ minWidth: "20%" }}
											>
												<Button
													sx={{ margin: 0.5 }}
													onClick={() =>
														handleMoveDown(index)
													}
													type="submit"
													variant="contained"
													edge="end"
												>
													<KeyboardArrowDownIcon />
												</Button>
												<Button
													sx={{ margin: 0.5 }}
													onClick={() =>
														handleMoveUp(index)
													}
													type="submit"
													variant="contained"
													edge="end"
												>
													<KeyboardArrowUpIcon />
												</Button>
												<Button
													sx={{ margin: 0.5 }}
													onClick={() =>
														handleRemoveEncounter(
															character
														)
													}
													type="submit"
													variant="contained"
													color="error"
													edge="end"
												>
													<CloseIcon />
												</Button>
											</ListItemSecondaryAction>
										</ListItem>
									))}
									<Button
										sx={{ margin: 0.5 }}
										onClick={handleRotateList}
										type="button"
										variant="contained"
									>
										Next Turn
									</Button>
								</List>
							)}
						</Box>
					</CustomTabPanel>
				</Box>
				<Grid container spacing={102}>
					<Grid item xs={6}>
						<Button
							onClick={backClick}
							type="submit"
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Back
						</Button>
					</Grid>
				</Grid>
			</Container>
			<Dialog
				open={open2}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Add player characters to encounter"}
				</DialogTitle>
				<DialogContent>
					{characterList.length === 0 ? (
						<Typography>No characters available</Typography>
					) : (
						<List sx={{ width: "100%" }}>
							{characterList.map((character, index) => (
								<ListItem
									sx={{ border: 1, margin: 0.25 }}
									button
									onClick={() =>
										addCharToEncounter(character)
									}
									key={index}
								>
									<ListItemText
										primary={character}
										sx={{ minWidth: "70%" }} // Adjust the width as needed
									/>
								</ListItem>
							))}
						</List>
					)}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
