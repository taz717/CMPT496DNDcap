///////////////////////////////////////////////////////////////////////////////
// Purpose   : insert a new character into the database with just ownderID
// Parameters: characterObject - the character object to insert
// Returns   : 0 on success
// Throws    : invalid-character-object
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

import { Meteor } from "meteor/meteor";

// import the collection
import { CharacterCollection } from "../..";

Meteor.methods({
	"character.insertSimple"(defaultCharacterObject) {
		// put owner id and date created into object

		// insert and return id
		return CharacterCollection.insertAsync(defaultCharacterObject);
	},
});
