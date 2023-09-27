import React from "react";
import { insertCharacter } from "../api/CharacterCollection";

export const App = () => {
	const addCharacter = () => {
		Meteor.subscribe("characters");
		Meteor.call("character.insert", { name: "Test", class: "fighter" });
	};

	return (
		<div>
			<h1>Welcome to Meteor!</h1>
			<button onClick={addCharacter}>Add Character</button>
		</div>
	);
};
