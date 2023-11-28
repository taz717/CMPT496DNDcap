import React, { useState, useEffect, setState } from "react";

// Material UI imports
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import Container from "@mui/material/Container";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// Component imports

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
		// get owner id
		const ownerID = Meteor.user({ fields: { username: 1 } })?.username;

		// default character
		let character = {};
		// add owner id to character
		character.ownerID = ownerID;
		// add created date to character
		character.created = new Date();

		// insert char with owner id into collection
		// via promise to make sure we wait till we have char id
		new Promise((resolve, reject) => {
			// Call the Meteor method to insert the character
			Meteor.call(
				"character.insertSimple",
				character,
				(error, result) => {
					if (error) return reject(error);
					resolve(result);
				}
			);
		})
			// Navigate to the new character page
			.then((result) => {
				console.log("Character Data:", result);
				navigate(`/character/${result}`);
			})
			// Log any errors
			.catch((error) => {
				console.error("Error fetching character data:", error);
			});
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
											key={character._id}
										>
											<ListItemIcon>
												<PersonIcon />
											</ListItemIcon>
											<ListItem>
												<ListItemText
													primary={character.name}
													secondary={`${character.race} ${character.classLevel}`}
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
		</Container>
	);
};
