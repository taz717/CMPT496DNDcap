///////////////////////////////////////////////////////////////////////////////
// Purpose   : Updates a character
// Parameters: CharacterID - the id of the character to update
//             characterObject - the object to update the character to
// Returns   : 0 on success
// Throws    : invalid-character-object
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../..";

Meteor.methods({
	// Method to update a character's stat
	"character.update"(characterID, characterObject) {
		// check the Object
		check(characterID, String);
		check(characterObject, Object);

		// update
		CharacterCollection.updateAsync(characterID, characterObject);

		// return success
		return 0;
	},
});
