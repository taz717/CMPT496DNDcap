import { Meteor } from "meteor/meteor";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export const Hello = () => {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter(counter + 1);
	};

	const BilboID = Meteor.call("CharacterCollection.getId", {
		name: "Bilbo Baggins",
	});

	const addWeapon = () => {
		Meteor.call(
			"CharacterCollection.addEquipment",
			BilboID,
			"weapons",
			"Sting"
		);
	};

	return (
		<div>
			<TextField id="standard-basic" label="Weapon" variant="standard" />
			<Button variant="contained" onClick={console.log("Yeet")}>
				Add
			</Button>
		</div>
	);
};
