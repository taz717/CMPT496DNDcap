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

export const EquippedDisplay = ({ equipped }) => {
	return (
		<Box>
			<Typography variant="h6">Equipped Items</Typography>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Typography variant="body1">Armour</Typography>
				</Grid>
				<Grid item xs={6}>
					{armour.map((armour) => (
						// display in table
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Armour</TableCell>
									<TableCell>AC</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell>{armour.armour}</TableCell>
									<TableCell>Lorem Ipsum</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					))}
				</Grid>
				<Grid item xs={6}>
					<Typography variant="body1">Weapon</Typography>
				</Grid>
				<Grid item xs={6}>
					{weapon.map((weapon) => (
						// display in table
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Weapon</TableCell>
									<TableCell>Damage</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell>{weapon.weapon}</TableCell>
									<TableCell>Lorem Ipsum</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					))}
				</Grid>
			</Grid>
		</Box>
	);
};
