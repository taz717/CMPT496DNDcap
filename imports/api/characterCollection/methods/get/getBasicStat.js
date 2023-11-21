///////////////////////////////////////////////////////////////////////////////
// Purpose   : get any non-nested string/int from a character
// Parameters: characterId - the character's id and stat - the name of the stat
// Returns   : the stat from the character or throw error if not found
// Throws    : invalid-character-id
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

// this will work for
// - name
// - ownerID
// - level
// - xp
// - race
// - alignment
// - inspiration
// - ac
// - initiative
// - speed
// - hp
// - maxHp
// - carryWeight
// - maxCarryWeight

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../..";

Meteor.methods({
	"character.getSavingThrow"(characterId, statName) {
		// chec the name
		check(characterId, String);

		// get the character
		const character = CharacterCollection.findOneAsync(characterId);

		// check the character
		if (!character) {
			throw new Meteor.Error("invalid-character-id");
		}

		if (character[statName]) {
			return stat;
		}

		// if we get here, we didn't find the object
		throw new Meteor.Error("invalid-stat-name");
	},
});
