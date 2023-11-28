///////////////////////////////////////////////////////////////////////////////
// Purpose   : delete an item from a list in char
// Parameters: characterId - the character's id
//             listName - the name of the list
//             statName - the name of the stat to delete
// Returns   : the list from the character or throw an error if not found
// Throws    : invalid-character-id
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

// this will work for any list or equipped item

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../..";

Meteor.methods({
	"character.deleteListItem"(characterId, listName, statName) {
		// chec the name
		check(characterId, String);

		// get the character
		const character = CharacterCollection.findOneAsync(characterId);

		// check the character
		if (!character) {
			throw new Meteor.Error("invalid-character-id");
		}

		for (let i = 0; i < character[listName].length; i++) {
			if (character[listName][i] === statName) {
				character[listName][i].splice(i, 1);
			}
		}

		// update
		CharacterCollection.updateAsync(characterId, character);

		// if we get here, we didn't find the object
		throw new Meteor.Error("invalid-list-name");
	},
});
