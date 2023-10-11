import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";
import SimpleSchema from "simpl-schema";

// Create a new Mongo collection for characters
export const CharacterCollection = new Mongo.Collection("characters");

// Creating a Schema for the CharacterCollection
CharacterCollection.schema = new SimpleSchema({
	name: String,
	ownerID: String,
	// One to many
	///////////////////////////////////////////////////////////////////////////
	class: Array,
	"class.$": String,
	///////////////////////////////////////////////////////////////////////////
	level: Number,
	race: String,
	alignment: String,
	background: String,
	inspiration: Boolean,
	xp: Number,
	ac: Number,
	maxHP: Number,
	currentHP: Number,
	initiative: Number,
	speed: Number,
	// first number is success, second is failure
	// One to many (2)
	///////////////////////////////////////////////////////////////////////////
	deathSaves: Object,
	"deathSaves.successes": Number,
	"deathSaves.failures": Number,
	// One to many (6)
	///////////////////////////////////////////////////////////////////////////
	savingThrows: Object,
	"savingThrows.strength": Number,
	"savingThrows.dexterity": Number,
	"savingThrows.constitution": Number,
	"savingThrows.intelligence": Number,
	"savingThrows.wisdom": Number,
	"savingThrows.charisma": Number,
	// One to many (18)
	///////////////////////////////////////////////////////////////////////////
	skills: Object,
	"skills.acrobatics": Number,
	"skills.animalHandling": Number,
	"skills.arcana": Number,
	"skills.athletics": Number,
	"skills.deception": Number,
	"skills.history": Number,
	"skills.insight": Number,
	"skills.intimidation": Number,
	"skills.investigation": Number,
	"skills.medicine": Number,
	"skills.nature": Number,
	"skills.perception": Number,
	"skills.performance": Number,
	"skills.religion": Number,
	"skills.sleightOfHand": Number,
	"skills.stealth": Number,
	"skills.survival": Number,
	// one to many (6) to many
	///////////////////////////////////////////////////////////////////////////
	equipment: Object,
	"equipment.wealth": { type: Number, optional: true },
	"equipment.weapons": { type: Array, optional: true },
	"equipment.weapons.$": { type: String, optional: true },
	"equipment.armor": { type: Array, optional: true },
	"equipment.armor.$": { type: String, optional: true },
	"equipment.tools": { type: Array, optional: true },
	"equipment.tools.$": { type: String, optional: true },
	"equipment.other": { type: Array, optional: true },
	"equipment.other.$": { type: String, optional: true },
	// one to many (2) to many
	///////////////////////////////////////////////////////////////////////////
	// spells are an object with two objects inside a list of objects which are
	// are the spell names and ids
	knownSpells: {
		type: Array,
		blackbox: true,
	},
	"knownSpells.$": {
		type: Object,
		optional: true,
	},
	"knownSpells.$.name": {
		type: String,
	},
	"knownSpells.$.id": {
		type: String,
	},
	preparedSpells: {
		blackbox: true,
		type: Array,
	},
	"preparedSpells.$": {
		type: Object,
		optional: true,
	},
	"preparedSpells.$.name": {
		type: String,
		optional: true,
	},
	"preparedSpells.$.id": {
		type: String,
		optional: true,
	},
	///////////////////////////////////////////////////////////////////////////
	createdAt: { type: Date },
}).newContext();

Meteor.methods({
	// Method to insert a new character into the database
	"character.insert"(characterObject) {
		// check the Object
		if (!CharacterCollection.schema.validate(characterObject)) {
			console.log(CharacterCollection.isValid());
			console.log(CharacterCollection.validationErrors());
			throw new Meteor.Error("invalid-character-object");
		}

		// insert
		CharacterCollection.insertAsync(characterObject);
	},

	// Method to update a character in the database
	"character.update"(characterID, characterStat, characterValue) {
		// check the Object
		check(characterID, String);
		check(characterStat, String);

		// verify value through schema
		const characterStatSchema =
			CharacterCollection.schema._schema[characterStat];

		if (!characterStatSchema) {
			throw new Meteor.Error("invalid-character-stat");
		}

		// verifty value of the characterStat
		if (
			!characterStatSchema.type.singleType.name.toLowerCase() ===
			typeof characterValue
		) {
			throw new Meteor.Error("invalid-character-value");
		}

		// update
		CharacterCollection.updateAsync(characterID, {
			$set: { [characterStat]: characterValue },
		});
	},

	// Method to delete a character from the database
	"character.delete"(characterID) {
		// check the ID
		check(characterID, String);

		// delete
		CharacterCollection.removeAsync(characterID);
	},

	// Method to get a character from the database
	"character.get"(characterID) {
		// check the ID
		check(characterID, String);

		// get
		return CharacterCollection.findOneAsync(characterID);
	},

	// Method to get all characters from the database
	"character.getAll"() {
		// get
		return CharacterCollection.find({}).fetch();
	},
});
