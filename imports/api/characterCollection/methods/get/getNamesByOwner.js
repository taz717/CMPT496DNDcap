///////////////////////////////////////////////////////////////////////////////
// Purpose   : Get a list of characters from the database by owner
// Parameters: owner - the name of the owner
// Returns   : list of character names with specified owner
// Throws    : invalid-character-id
// Blame     : Andrew
///////////////////////////////////////////////////////////////////////////////

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../..";

Meteor.methods({
	"character.getNamesByOwner"(owner) {
		// chec the name
		check(owner, String);

		// get
		return CharacterCollection.find({ ownerID: owner }, {fields: {name: 1} }).fetch();
	},
});