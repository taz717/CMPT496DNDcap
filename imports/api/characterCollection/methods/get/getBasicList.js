///////////////////////////////////////////////////////////////////////////////
// Purpose   : get any list from a character
// Parameters: characterId - the character's id and listName - the name of the list
// Returns   : the list from the character or throw an error if not found
// Throws    : invalid-character-id
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

// this will work for
// - classes
// - weapon proficiencies
// - armour proficiencies
// - feats
// - equipment
// - known spells
// - prepared spells

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../..";

Meteor.methods({
	"character.getSavingThrow"(characterId, listName) {
		// chec the name
		check(characterId, String);

		// get the character
		const character = CharacterCollection.findOneAsync(characterId);

		// check the character
		if (!character) {
			throw new Meteor.Error("invalid-character-id");
		}

		return character[listName];
	},
});
