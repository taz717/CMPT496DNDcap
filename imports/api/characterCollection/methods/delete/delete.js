///////////////////////////////////////////////////////////////////////////////
// Purpose   : Delete a character from the database
// Parameters: characterId - the id of the character to delete
// Returns   : 0 on success
// Throws    : invalid-character-id
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../..";

Meteor.methods({
	"character.delete"(characterID) {
		// check the ID
		check(characterID, String);

		// delete
		CharacterCollection.removeAsync(characterID);

		return 0;
	},
});
