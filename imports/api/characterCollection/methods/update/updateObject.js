///////////////////////////////////////////////////////////////////////////////
// Purpose   : update a stat to an object in char
// Parameters: characterId - the id of the character to delete\
//             objectName - the name of the object to add to
//             statName - the name of the stat to add
//             statValue - the value of the stat to add
// Returns   : 0 on success
// Throws    : invalid-character-id
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

// this will work for
// - saving throws
// - background
// - details
// - death saves
// - skills

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../..";

Meteor.methods({
	"character.addToObject"(characterID, objectName, statName, statValue) {
		// check the ID
		check(characterID, String);
		check(objectName, String);
		check(statName, String);

		// get the character
		const character = CharacterCollection.findOneAsync(characterID);

		// check the character
		if (!character) {
			throw new Meteor.Error("invalid-character-id");
		}

		// different but should work for ALL objects rather than
		// having 1 for every use case

		character[objectName][statName] = statValue;

		// update
		CharacterCollection.updateAsync(characterID, character);

		return 0;
	},
});
