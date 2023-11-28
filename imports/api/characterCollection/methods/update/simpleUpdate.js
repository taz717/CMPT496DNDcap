///////////////////////////////////////////////////////////////////////////////
// Purpose   : Updates String, Boolean, Number type values in chars
// Parameters: characterID - the id of the character to update
//             characterStat - the stat to update
//             characterValue - the value to update the stat to
// Returns   : 0 on success
// Throws    : invalid-character-object
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

// *** WARNING *** ///
// DO NOT USE THIS ON OBJECT OR ARRAY TYPE FIELDS
// *** WARNING *** ///

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
	// Method to update a character's stat
	"character.simpleUpdate"(characterID, characterStat, characterValue) {
		// check the Object
		check(characterID, String);
		check(characterStat, String);

		// verify value through schema
		const characterStatSchema =
			CharacterCollection.schema._schema[characterStat];

		if (!characterStatSchema) {
			throw new Meteor.Error("invalid-character-stat");
		}

		// verifty value of the characterStat
		if (
			!characterStatSchema.type.singleType.name.toLowerCase() ===
			typeof characterValue
		) {
			throw new Meteor.Error("invalid-character-value");
		}

		// update
		CharacterCollection.updateAsync(characterID, {
			$set: { [characterStat]: characterValue },
		});

		return 0;
	},
});
