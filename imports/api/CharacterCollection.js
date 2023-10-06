import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

// Create a new Mongo collection for characters
export const CharacterCollection = new Mongo.Collection("characters");

// Creating a Schema for the CharacterCollection
CharacterCollection.schema = new SimpleSchema({
	name: { type: String },
	ownerID: { type: String },
	class: { type: [String] },
	level: { type: Number },
	race: { type: String },
	alignment: { type: String },
	background: { type: String },
	inspiration: { type: Boolean },
	xp: { type: Number },
	ac: { type: Number },
	maxHP: { type: Number },
	currentHP: { type: Number },
	initiative: { type: Number },
	speed: { type: Number },
	// first number is success, second is failure
	deathSaves: {
		type: {
			success: { type: Number },
			failure: { type: Number },
		},
	},
	savingThrows: {
		type: {
			strength: { type: Number },
			dexterity: { type: Number },
			constitution: { type: Number },
			intelligence: { type: Number },
			wisdom: { type: Number },
			charisma: { type: Number },
		},
	},
	skills: {
		type: {
			acrobatics: { type: Number },
			animalHandling: { type: Number },
			arcana: { type: Number },
			athletics: { type: Number },
			deception: { type: Number },
			history: { type: Number },
			insight: { type: Number },
			intimidation: { type: Number },
			investigation: { type: Number },
			medicine: { type: Number },
			nature: { type: Number },
			perception: { type: Number },
			performance: { type: Number },
			religion: { type: Number },
			sleightOfHand: { type: Number },
			stealth: { type: Number },
			survival: { type: Number },
		},
	},
	equipment: {
		type: {
			armor: { type: [String] },
			weapons: { type: [String] },
			tools: { type: [String] },
			other: { type: [String] },
		},
	},
	// spells are an object with two objects inside a list of objects which are
	// are the spell names and ids
	spells: {
		type: {
			known: {
				type: [
					{
						name: String,
						_id: String,
					},
				],
			},
			prepared: {
				type: [
					{
						name: String,
						_id: String,
					},
				],
			},
		},
	},
	createdAt: { type: Date, denyUpdate: true },
});

Meteor.methods({
	// Method to insert a new character into the database
	"character.insert"(characterObject) {
		// check the Object
		if (!CharacterCollection.schema.validate(characterObject)) {
			throw new Meteor.Error("invalid-character-object");
		}

		CharacterCollection.insertAsync(characterObject);
	},

	// Method to update a character in the database
	"character.update"(characterObject) {
		// check the Object
		if (!CharacterCollection.schema.validate(characterObject)) {
			throw new Meteor.Error("invalid-character-object");
		}

		CharacterCollection.updateAsync(characterObject);
	},

	// Method to delete a character from the database
	"character.delete"(characterID) {
		// check the ID
		check(characterID, String);

		CharacterCollection.removeAsync(characterID);
	},

	// Method to get a character from the database
	"character.get"(characterID) {
		// check the ID
		check(characterID, String);

		return CharacterCollection.findOneAsync(characterID);
	},

	// Method to get all characters from the database
	"character.getAll"() {
		return CharacterCollection.findAsync({});
	},
});
