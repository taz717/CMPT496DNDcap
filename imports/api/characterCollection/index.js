import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";
import SimpleSchema from "simpl-schema";

// Create a new Mongo collection for characters
export const CharacterCollection = new Mongo.Collection("characters");

// TODO finish this later.  This is a stub for now.

// Creating a Schema for the CharacterCollection
CharacterCollection.schema = new SimpleSchema({
	name: {
		type: String,
		optional: true,
	},
}).newContext();
