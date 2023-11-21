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
