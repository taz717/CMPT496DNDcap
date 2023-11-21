///////////////////////////////////////////////////////////////////////////////
// Purpose   : Get a single character from the database
// Parameters: characterId - the id of the character to delete
// Returns   : the character object
// Throws    : invalid-character-id
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../..";

Meteor.methods({
	"character.getOne"(characterID) {
		// check the ID
		check(characterID, String);

		if (!characterID) {
			throw new Meteor.Error("invalid-character-id");
		}

		// get
		return CharacterCollection.findOneAsync(characterID);
	},
});
