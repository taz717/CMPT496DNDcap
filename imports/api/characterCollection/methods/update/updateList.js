///////////////////////////////////////////////////////////////////////////////
// Purpose   : update a stat to a list in char
// Parameters: characterId - the id of the character to delete\
//             listName - the name of the object to add to
//             statName - the name of the stat to add
// Returns   : 0 on success
// Throws    : invalid-character-id
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

// this will work for
// - class
// - weaponProficiencies
// - armorProficiencies
// - feats
// - equipment
// - knownSpells
// - preparedSpells
// - // equipped
// - armour
// - weapons

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../..";

Meteor.methods({
	"character.addToObject"(characterID, listName, newList) {
		// check the ID
		check(characterID, String);
		check(listName, String);
		check(statName, String);

		// get the character
		const character = CharacterCollection.findOneAsync(characterID);

		// check the character
		if (!character) {
			throw new Meteor.Error("invalid-character-id");
		}

		// different but should work for ALL objects rather than
		// having 1 for every use case

		character[listName] = newList;

		// update
		CharacterCollection.updateAsync(characterID, character);

		return 0;
	},
});
