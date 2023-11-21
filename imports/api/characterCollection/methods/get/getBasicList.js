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
	"character.getSavingThrow"(characterId, objectname) {
		// chec the name
		check(characterId, String);

		// get the character
		const character = CharacterCollection.findOneAsync(characterId);

		// check the character
		if (!character) {
			throw new Meteor.Error("invalid-character-id");
		}

		// classes
		if (objectname === "classes") {
			return character.classes;
		}

		// weapon proficiencies
		if (objectname === "weaponProficiencies") {
			return character.weaponProficiencies;
		}

		// armour proficiencies
		if (objectname === "armourProficiencies") {
			return character.armourProficiencies;
		}

		// feats
		if (objectname === "feats") {
			return character.feats;
		}

		// equipment
		if (objectname === "equipment") {
			return character.equipment;
		}

		// known spells
		if (objectname === "knownSpells") {
			return character.knownSpells;
		}

		// prepared spells
		if (objectname === "preparedSpells") {
			return character.preparedSpells;
		}

		// if we get here, we didn't find the object
		throw new Meteor.Error("invalid-list-name");
	},
});
