///////////////////////////////////////////////////////////////////////////////
// Purpose   : Get a single character from the database by name
// Parameters: characterName - the name of the character to get
// Returns   : the character object
// Throws    : invalid-character-id
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../";

Meteor.methods({
	"character.getByName"(characterName) {
		// chec the name
		check(characterName, String);

		// get
		return CharacterCollection.findOneAsync({ name: characterName });
	},
});
