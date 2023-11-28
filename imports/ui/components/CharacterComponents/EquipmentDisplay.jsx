///////////////////////////////////////////////////////////////////////////////
// Purpose   : Display a character's equipment
// Parameters: equipment
// Returns   : EquipmentDisplay component
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

// React imports
import React from "react";

// Material UI imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";

export const EquipmentDisplay = ({ equipment }) => {
	// equipment is a list
	// going to be printed has a table
	return (
		<Box>
			<Typography variant="h6">Equipment</Typography>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Typography variant="body1">Item</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="body1">Description</Typography>
				</Grid>
				{equipment.map((item) => (
					// display in table
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Item</TableCell>
								<TableCell>Description</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>{item.item}</TableCell>
								<TableCell>Lorem Ipsum</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				))}
			</Grid>
		</Box>
	);
};
