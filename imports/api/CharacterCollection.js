import { Mongo } from "meteor/mongo";

// Create a new Mongo collection for characters
export const CharacterCollection = new Mongo.Collection("characters");

Meteor.methods({
	"character.insert"(characterObject) {
		CharacterCollection.insertAsync(characterObject);
	},
});
