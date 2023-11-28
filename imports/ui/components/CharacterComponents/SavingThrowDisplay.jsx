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
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

export const SavingThrowDisplay = ({ characterData }) => {
	savingThrows = characterData.savingThrows;

	return (
		<Paper sx={{ maxWidth: 1000, maxHeight: 1000 }}>
			<Box sx={{ flexGrow: 1, margin: 1.5 }}>
				<Typography variant="h6" textAlign="center">
					Saving Throws
				</Typography>
				<Grid container>
					{Object.entries(savingThrows).map(([key, value]) => {
						return (
							<Grid item xs={4} key={key}>
								<TextField
									id={key}
									label={key}
									value={value}
									variant="outlined"
									size="small"
									disabled={true}
									sx={{ margin: 1.5 }}
								/>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</Paper>
	);
};
