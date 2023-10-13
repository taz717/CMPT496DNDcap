///////////////////////////////////////////////////////////////////////////////
// Purpose   : Get all characters from the database
// Parameters: none
// Returns   : the character objects
// Throws    : invalid-character-id
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../..";

Meteor.methods({
	"character.getAll"() {
		// get
		return CharacterCollection.findAsync();
	},
});
