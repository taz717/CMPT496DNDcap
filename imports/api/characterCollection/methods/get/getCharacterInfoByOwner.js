///////////////////////////////////////////////////////////////////////////////
// Purpose   : Get a list of characters name, race, and class from the database by owner
// Parameters: owner - the name of the owner
// Returns   : list of character names race and class with specified owner
// Throws    : invalid-character-id
// Blame     : Andrew
///////////////////////////////////////////////////////////////////////////////

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../..";

Meteor.methods({
	"character.getCharacterInfoByOwner"(owner) {
		// chec the name
		check(owner, String);

		if (!owner) {
			throw new Meteor.Error("invalid-character-owner");
		}

		// get
		return CharacterCollection.find(
			{ ownerID: owner },
			{ fields: { name: 1, race: 1, class: 1 } }
		).fetch();
	},
});