import React, { useState, useEffect, setState } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import PersonIcon from "@mui/icons-material/Person";
import Container from "@mui/material/Container";
import ListItemIcon from "@mui/material/ListItemIcon";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import ListItemText from "@mui/material/ListItemText";

export const PlayerCharList = () => {
	const [characterList, setCharacterList] = useState([]);
	//Get current logged in username
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	loggedInUser = Meteor.user({ fields: { username: 1 } })?.username;

	useEffect(() => {
		// Connect to MongoDB and fetch character names for the logged-in user

		fetchCharacterData(); // Call the fetch function when the component mounts

		return () => {
			// Cleanup (optional): This function will be called when the component is unmounted
		};
	}, [loggedInUser]); // Fixed the placement of the closing bracket

	const backClick = (event) => {
		navigate("/choice");
	};

	// Moved outside useEffect so other methods can use it
	const fetchCharacterData = () => {
		Meteor.call(
			"character.getCharacterInfoByOwner",
			loggedInUser,
			(error, result) => {
				if (!error) {
					console.log("Character List:", result);
					setCharacterList(result);
				} else {
					console.error("Error fetching character data:", error);
				}
				setLoading(false);
			}
		);
	};

	// States and functions for back confirmation box
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleCreate = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const CharName = data.get("CharName");
		const CharClass = data.get("CharClass");
		const CharRace = data.get("CharRace");

		const newCharacter = {
			name: CharName,
			ownerID: loggedInUser,
			class: [CharClass],
			level: 0,
			xp: 0,
			race: CharRace,
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
			weaponProficiencies: [],
			armorProficiencies: [],
			feats: [],
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
			createdAt: new Date(),
		};

		Meteor.call("character.insert", newCharacter, (error, result) => {
			if (!error) {
				// Character created successfully, now update the character list
				fetchCharacterData();
			} else {
				console.error("Error creating character:", error);
			}
		});

		setOpen(false);
	};

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography component="h2" variant="21">
					Character list
				</Typography>
				<Box
					sx={{
						maxHeight: "400px",
						overflowY: "auto",
						marginTop: 2,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					{loading ? (
						<Typography>Loading...</Typography>
					) : (
						<>
							{characterList.length === 0 ? (
								<Typography>No characters available</Typography>
							) : (
								<List>
									{characterList.map((character) => (
										<ListItem
											button
											onClick={() =>
												navigate(
													`/character/${character._id}`
												)
											}
										>
											<ListItemIcon>
												<PersonIcon />
											</ListItemIcon>
											<ListItem key={character._id}>
												<ListItemText
													primary={character.name}
													secondary={`${character.race} ${character.class}`}
												/>
											</ListItem>
										</ListItem>
									))}
								</List>
							)}
						</>
					)}
				</Box>
				<Grid container spacing={2}>
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
					<Grid item xs={6}>
						<Button
							onClick={handleClickOpen}
							type="submit"
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Create Character
						</Button>
					</Grid>
				</Grid>
			</Box>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Create New Character"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Enter thier name, class, and race.
					</DialogContentText>
					<Box
						component="form"
						onSubmit={handleCreate}
						noValidate
						sx={{ mt: 1 }}
					>
						<Grid item xs={3}>
							<TextField
								margin="normal"
								required
								fullWidth
								style={{ width: 275, p: 5 }}
								id="CharName"
								label="Character Name"
								name="CharName"
								autoFocus
							/>
						</Grid>
						<Grid item xs={3}>
							<TextField
								margin="normal"
								required
								style={{ width: 275 }}
								name="CharClass"
								label="Class"
								id="CharClass"
							/>
						</Grid>
						<Grid item xs={3}>
							<TextField
								margin="normal"
								required
								style={{ width: 275 }}
								name="CharRace"
								label="Race"
								id="CharRace"
							/>
							<DialogActions>
								<Button onClick={handleClose}>Cancel</Button>
								<Button type="submit" autoFocus>
									Create
								</Button>
							</DialogActions>
						</Grid>
					</Box>
				</DialogContent>
			</Dialog>
		</Container>
	);
};
