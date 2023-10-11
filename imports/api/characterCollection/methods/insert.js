///////////////////////////////////////////////////////////////////////////////
// Purpose   : insert a new character into the database
// Parameters: characterObject - the character object to insert
// Returns   : nothing
// Throws    : invalid-character-object
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

Meteor.methods({
	// Method to insert a new character into the database
	"character.insert"(characterObject) {
		// check the Object
		check(characterObject, Object);

		// Validate the Object against the schema
		if (!CharacterCollection.schema.validate(characterObject)) {
			console.log(CharacterCollection.schema.isValid());
			console.log(CharacterCollection.schema.validationErrors());
			throw new Meteor.Error("invalid-character-object");
		}

		// insert
		CharacterCollection.insertAsync(characterObject);
	},
});
