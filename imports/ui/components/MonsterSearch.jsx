import * as React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Textfield from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

import { getMonsters, getMonster } from "../../api/DnDCalls";
import { useEffect } from "react";

import MonsterDisplay from "./MonsterDisplay";

export default function MonsterSearch() {
	const [monster, setMonster] = React.useState("");
	const [monsterData, setMonsterData] = React.useState([]);
	const [monsterInfo, setMonsterInfo] = React.useState([]);

	useEffect(() => {
		getMonsters().then((data) => {
			console.log(data.results);
			setMonsterData(data.results);
		});
	}, []);

	const handleSearch = () => {
		monsterData.forEach((item) => {
			if (item.name === monster) {
				getMonster(item.url).then((data) => {
					setMonsterInfo(data);
					console.log(data);
				});
			}
		});
	};

	return (
		<Paper>
			<Autocomplete
				id="monster-search"
				value={monster}
				onChange={(event, newValue) => {
					setMonster(newValue);
				}}
				options={monsterData.map((option) => option.name)}
				renderInput={(params) => (
					<Textfield
						{...params}
						label="Monster"
						variant="outlined"
						sx={{ margin: 1 }}
					/>
				)}
			/>
			<Button variant="contained" onClick={handleSearch}>
				Search
			</Button>

			{Object.keys(monsterInfo).length > 0 && (
				<Box>
					<MonsterDisplay monsterInfo={monsterInfo} />
				</Box>
			)}
		</Paper>
	);
}
