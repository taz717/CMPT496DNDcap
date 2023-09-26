import React from "react";
import { useFind, useSubscribe } from "meteor/react-meteor-data";
import { CharacterCollection } from "../api/character";

export const Info = () => {
	const isLoading = useSubscribe("characters");
	const characters = useFind(() => CharacterCollection.find());

	if (isLoading()) {
		return <div>Loading...</div>;
	}

	// display the characters
	return (
		<div>
			<ul>
				{characters.map((character) => (
					<li key={character._id}>{character.name}</li>
				))}
			</ul>
		</div>
	);
};
