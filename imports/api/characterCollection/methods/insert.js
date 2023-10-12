///////////////////////////////////////////////////////////////////////////////
// Purpose   : insert a new character into the database
// Parameters: characterObject - the character object to insert
// Returns   : 0 on success
// Throws    : invalid-character-object
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../";

Meteor.methods({
	"character.insert"(characterObject) {
		// check the Object
		check(characterObject, Object);

		// Validate the Object against the schema
		if (!CharacterCollection.schema.validate(characterObject)) {
			console.log(CharacterCollection.isValid());
			console.log(CharacterCollection.validationErrors());
			throw new Meteor.Error("invalid-character-object");
		}

		// insert
		CharacterCollection.insertAsync(characterObject);

		return 0;
	},
});
