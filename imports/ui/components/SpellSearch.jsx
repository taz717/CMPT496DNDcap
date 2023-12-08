import * as React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Textfield from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

import { getSpells, getSpell } from "../../api/DnDCalls";
import { useEffect } from "react";

import SpellDisplay from "./SpellDisplay";

export default function SpellSearch() {
	const [spell, setSpell] = React.useState("");
	const [spellData, setSpellData] = React.useState([]);
	const [spellInfo, setSpellInfo] = React.useState([]);

	useEffect(() => {
		getSpells().then((data) => {
			console.log(data.results);
			setSpellData(data.results);
		});
	}, []);

	const handleSearch = () => {
		spellData.forEach((item) => {
			if (item.name === monster) {
				getSpell(item.url).then((data) => {
					setSpellInfo(data);
					console.log(data);
				});
			}
		});
	};

	return (
		<Paper>
			<Autocomplete
				id="spell-search"
				value={spell}
				onChange={(event, newValue) => {
					setSpell(newValue);
				}}
				options={spellData.map((option) => option.name)}
				renderInput={(params) => (
					<Textfield
						{...params}
						label="Spell"
						variant="outlined"
						sx={{ margin: 1, width: "98%" }}
					/>
				)}
			/>
			<Button variant="contained" onClick={handleSearch}>
				Search
			</Button>

			{Object.keys(spellInfo).length > 0 && (
				<Box paddingTop='15px'>
					<SpellDisplay spellInfo={spellInfo} />
				</Box>
			)}
		</Paper>
	);
}
