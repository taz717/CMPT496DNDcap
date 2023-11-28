///////////////////////////////////////////////////////////////////////////////
// Purpose   : add a a stat to a list in char
// Parameters: characterId - the id of the character to delete\
//             listName - the name of the object to add to
//             stat - the name of the stat to add
//             optional: equipped - if the item is equipped
//             optional: if equipped - weapons or armour string
// Returns   : 0 on success
// Throws    : invalid-character-id
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../..";

Meteor.methods({
	"character.addToList"(
		characterID,
		listName,
		stat,
		equipped = false,
		equippedType = ""
	) {
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

		if (equipped) {
			// armour use case
			if (listName === "armour") {
				character.equipped.armour.push(stat);
			}

			// weapons use case
			if (listName === "weapons") {
				character.equipped.weapons.push(stat);
			}
		}

		// different but should work for ALL objects rather than
		// having 1 for every use case
		else {
			character[listName].push(stat);
		}

		return 0;
	},
});
