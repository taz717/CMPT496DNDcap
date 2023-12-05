import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import DiceRow from "./DiceRow.jsx";

export default function DiceHolder() {
	const die = [4, 6, 8, 10, 12, 20];

	return (
		<Paper>
			<Stack spacing={2}>
				{die.map((die) => (
					<DiceRow dieType={"d" + die} value={die} key={die} />
				))}
			</Stack>
		</Paper>
	);
}
