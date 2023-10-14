import React from "react";
import { CharacterCollection } from "../api/characterCollection";
import { useFind, useSubscribe } from "meteor/react-meteor-data";

export const CharacterCreator = () => {
	// State
	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setState((prevState) => ({ ...prevStatestate, [name]: value }));
	};
};
