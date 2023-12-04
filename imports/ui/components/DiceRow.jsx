import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function DiceRow({ dieType, value }) {
	const [dieCount, setDieCount] = React.useState(0);
	const [modifier, setModifier] = React.useState(0);
	const [total, setTotal] = React.useState(0);

	const handleChange = (event) => {
		if (event.target.name.includes("Count")) {
			setDieCount(event.target.value);
		} else if (event.target.name.includes("Modifier")) {
			setModifier(event.target.value);
		}
	};

	const handleRoll = (event) => {
		console.log("Rolling dice");

		if (modifier === "") {
			setModifier(0);
		}

		if (dieCount === "") {
			setDieCount(0);
		}

		let total = 0;
		for (let i = 0; i < dieCount; i++) {
			console.log("Rolling die");
			total += Math.floor(Math.random() * value) + 1;
		}
		total += parseInt(modifier);

		setTotal(total);
	};

	const handleClear = (event) => {
		setDieCount(0);
		setModifier(0);
		setTotal(0);
	};

	return (
		<Box>
			<TextField
				id="outlined-number"
				label={dieType}
				type="number"
				InputLabelProps={{
					shrink: true,
				}}
				variant="outlined"
				name={dieType + "Count"}
				value={dieCount}
				onChange={(e) => handleChange(e)}
				sx={{ margin: 1 }}
			/>
			<TextField
				id="outlined-number"
				label="Modifier"
				type="number"
				InputLabelProps={{
					shrink: true,
				}}
				variant="outlined"
				name={dieType + "Modifier"}
				value={modifier}
				onChange={(e) => handleChange(e)}
				sx={{ margin: 1 }}
			/>
			<TextField
				disabled
				id="outlined-number"
				label="Total"
				type="number"
				InputLabelProps={{
					shrink: true,
				}}
				variant="outlined"
				name={dieType + "Total"}
				value={total}
				sx={{ margin: 1 }}
			/>
			<Button variant="contained" onClick={handleRoll} sx={{ margin: 1 }}>
				Roll
			</Button>
			<Button
				variant="contained"
				onClick={handleClear}
				sx={{ margin: 1 }}
			>
				Clear
			</Button>
		</Box>
	);
}
