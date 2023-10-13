///////////////////////////////////////////////////////////////////////////////
// Purpose   : update a piece of a character's equipment in the database
// Parameters: characterId - the id of the character to delete
// Returns   : 0 on success
// Throws    : invalid-character-id
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "..";

Meteor.methods({
	"character.updateEquipment"(characterID, equipmentName, newEquipment) {
		// check the parameters
		check(characterID, String);
		check(equipmentName, String);
		check(newEquipment, Object);

		// update
		CharacterCollection.updateAsync(characterID, {
			$set: { [equipmentName]: newEquipment },
		});
	},
});
