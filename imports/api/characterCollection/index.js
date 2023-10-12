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
	class: Array,
	"class.$": String,
	level: Number,
	xp: Number,
	race: String,

	// One to many
	background: Object,
	"background.name": String,
	"background.description": String,

	// One to many (7)
	details: { type: Object, optional: true },
	"details.age": Number,
	"details.height": String,
	"details.weight": String,
	"details.eyes": String,
	"details.skin": String,
	"details.hair": String,

	alignment: String,
	inspiration: Boolean,
	ac: Number,
	initiative: Number,
	speed: Number,
	hp: Number,
	maxHP: Number,
	// One to many (2)
	deathSaves: Object,
	"deathSaves.successes": Number,
	"deathSaves.failures": Number,

	// One to many (6)
	savingThrows: Object,
	"savingThrows.strength": Number,
	"savingThrows.dexterity": Number,
	"savingThrows.constitution": Number,
	"savingThrows.intelligence": Number,
	"savingThrows.wisdom": Number,
	"savingThrows.charisma": Number,

	// One to many
	weaponProficiencies: Array,
	"weaponProficiencies.$": String,

	// One to many
	armorProficiencies: Array,
	"armorProficiencies.$": String,

	feats: Array,
	"feats.$": String,

	// One to many (18)
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

	// one to many (2) to many
	equipped: Object,
	"equipped.weapons": { type: Array },
	"equipped.weapons.$": { type: Object },
	"equipped.armor": { type: Array },
	"equipped.armor.$": { type: Object },

	// one to one to many
	equipment: Array,
	"equipment.$": {
		type: Object,
	},

	carryWeight: Number,
	maxCarryWeight: Number,

	// one to many
	knownSpells: {
		type: Array,
	},
	"knownSpells.$": {
		type: Object,
	},

	// one to many
	preparedSpells: {
		type: Array,
	},
	"preparedSpells.$": {
		type: Object,
	},

	createdAt: { type: Date },
}).newContext();

Meteor.methods({
	// update a character's equipment
	"character.updateEquipment"(characterID, equipmentPiece) {
		// check the object
		check(characterID, String);
		check(equipmentPiece, Object);

		// verify through schema
		const equipmentPieceSchema =
			CharacterCollection.schema._schema["equipment.$"];

		if (!equipmentPieceSchema) {
			throw new Meteor.Error("invalid-equipment-piece");
		}

		// update
		CharacterCollection.updateAsync(characterID, {
			$push: { equipment: equipmentPiece },
		});

		// update carry weight
		const character = CharacterCollection.findOneAsync(characterID);

		// update
		CharacterCollection.updateAsync(characterID, {
			$set: {
				carryWeight: character.carryWeight + equipmentPiece.weight,
			},
		});
	},

	"character.getSavingThrow"(characterID, savingThrow) {
		// check the ID
		check(characterID, String);
		check(savingThrow, String);

		// get
		return CharacterCollection.findOneAsync(characterID, {
			[savingThrow]: 1,
		});
	},

	"character.getSkill"(characterID, skill) {
		// check the ID
		check(characterID, String);
		check(skill, String);

		// get
		return CharacterCollection.findOneAsync(characterID, {
			[skill]: 1,
		});
	},

	"character.getEquipment"(characterID, equipment) {
		// check the ID
		check(characterID, String);
		check(equipment, String);

		// get
		return CharacterCollection.findOneAsync(characterID, {
			[equipment]: 1,
		});
	},

	"Character.findEquipementByName"(characterID, type, equipmentName) {
		// check the ID
		check(characterID, String);
		check(type, String);
		check(equipmentName, String);

		// get
		return CharacterCollection.findOneAsync(characterID, {
			[type]: { $elemMatch: { name: equipmentName } },
		});
	},

	"character.getKnownSpells"(characterID) {
		// check the ID
		check(characterID, String);

		// get
		return CharacterCollection.findOneAsync(characterID, {
			knownSpells: 1,
		});
	},

	"character.getPreparedSpells"(characterID) {
		// check the ID
		check(characterID, String);

		// get
		return CharacterCollection.findOneAsync(characterID, {
			preparedSpells: 1,
		});
	},

	"character.getDeathSaves"(characterID) {
		// check the ID
		check(characterID, String);

		// get
		return CharacterCollection.findOneAsync(characterID, {
			deathSaves: 1,
		});
	},
});
