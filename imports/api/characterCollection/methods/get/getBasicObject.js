///////////////////////////////////////////////////////////////////////////////
// Purpose   : get object from a character
// Parameters: characterId - the character's id and objectname - the name of the object
// Returns   : the object from the character or throw error if not found
// Throws    : invalid-character-id
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

// this will work for
// - saving throws
// - background
// - details
// - death saves
// - skills
// - equipped

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../..";

Meteor.methods({
	"character.getSavingThrow"(characterId, objectname) {
		// chec the name
		check(characterId, String);

		// get the character
		const character = CharacterCollection.findOneAsync(characterId);

		// check the character
		if (!character) {
			throw new Meteor.Error("invalid-character-id");
		}

		// saving throws
		if (objectname === "savingThrows") {
			return character.savingThrows;
		}

		// background
		if (objectname === "background") {
			return character.background;
		}

		// details
		if (objectname === "details") {
			return character.details;
		}

		// death saves
		if (objectname === "deathSaves") {
			return character.deathSaves;
		}

		// skills
		if (objectname === "skills") {
			return character.skills;
		}

		// equipped
		if (objectname === "equipped") {
			return character.equipped;
		}

		// if we get here, we didn't find the object
		throw new Meteor.Error("invalid-object-name");
	},
});
