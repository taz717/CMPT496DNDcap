import * as React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Textfield from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

import { getMonsters } from "../../api/DnDCalls";
import { useEffect } from "react";

export default function MonsterSearch() {
	const [monster, setMonster] = React.useState("");
	const [monsterData, setMonsterData] = React.useState([]);

	useEffect(() => {
		const monsterData = localStorage.getItem("monsterData");
		if (monsterData) {
			setMonsterData(JSON.parse(monsterData));
		}
		getMonsters().then((data) => {
			setMonsterData(data);
			localStorage.setItem("monsterData", JSON.stringify(data));
		});
	}, []);

	// const handleChange = (event) => {
	// 	setMonster(event.target.value);
	// };

	return (
		<Paper>
			<Autocomplete
				id="monster-search"
				options={monsterData.results.map((option) => option.name)}
				renderInput={(params) => (
					<Textfield
						{...params}
						label="Monster"
						variant="outlined"
						sx={{ margin: 1 }}
					/>
				)}
			/>
			{/* <Button variant="contained">Search</Button> */}
		</Paper>
	);
}
