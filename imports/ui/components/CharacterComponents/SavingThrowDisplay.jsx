///////////////////////////////////////////////////////////////////////////////
// Purpose   : Display a character's saving throws
// Parameters: saving throws object
// Returns   : SavingThrowDisplay component
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

// React imports
import React from "react";

// Material UI imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const SavingThrowDisplay = ({ savingThrows }) => {
	return (
		<Box>
			<Typography variant="h6">Saving Throws</Typography>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Typography variant="body1">Strength</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="body1">
						{savingThrows.strength}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="body1">Dexterity</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="body1">
						{savingThrows.dexterity}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="body1">Constitution</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="body1">
						{savingThrows.constitution}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="body1">Intelligence</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="body1">
						{savingThrows.intelligence}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="body1">Wisdom</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="body1">
						{savingThrows.wisdom}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="body1">Charisma</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="body1">
						{savingThrows.charisma}
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};
