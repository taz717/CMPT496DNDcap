///////////////////////////////////////////////////////////////////////////////
// Purpose   : Display a character's Equipped items
// Parameters: equipped items object
// Returns   : EquippedDisplay component
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

// React imports
import React from "react";

// Material UI imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const EquippedDisplay = ({ characterData }) => {
	equipped = characterData.equipped;

	console.log("Equipped:", equipped);

	return (
		<Paper>
			<Box sx={{ flexGrow: 1, margin: 1.5 }}>
				<Typography variant="h6" textAlign="center">
					Equipped Items
				</Typography>
				<Grid container>
					{Object.entries(equipped).map(([key, value]) => {
						return (
							<Grid item xs={4} key={key}>
								<Table>
									<TableHead>
										<TableRow>
											<TableCell>{key}</TableCell>
											<TableCell>{value}</TableCell>
										</TableRow>
									</TableHead>
								</Table>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</Paper>
	);
};
