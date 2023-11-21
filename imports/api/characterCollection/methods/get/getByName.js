///////////////////////////////////////////////////////////////////////////////
// Purpose   : Get a single character from the database by name
// Parameters: characterName - the name of the character to get
// Returns   : the character object
// Throws    : invalid-character-name
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../..";

Meteor.methods({
	"character.getByName"(characterName) {
		// check the name
		check(characterName, String);

		if (!characterName) {
			throw new Meteor.Error("invalid-character-name");
		}

		// get
		return CharacterCollection.findOneAsync({ name: characterName });
	},
});
