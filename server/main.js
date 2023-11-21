import { Meteor } from "meteor/meteor";
import { CharacterCollection } from "../imports/api/characterCollection";
import "../imports/api/characterCollection/methods";

const bilbobaggins = {
	name: "Bilbo Baggins",
	ownerID: "taz",
	class: ["rogue", "bard"],
	level: 2,
	xp: 12,
	race: "Hobbit",
	background: {
		name: "Burglar",
		description: "Stole from a dragon",
	},
	details: {
		age: 111,
		height: "3'6",
		weight: "60 lbs",
		eyes: "Blue",
		skin: "Tan",
		hair: "Brown",
	},
	alignment: "Chaotic Good",
	inspiration: false,
	ac: 12,
	initiative: 2,
	speed: 25,
	hp: 12,
	maxHP: 12,
	deathSaves: {
		successes: 0,
		failures: 0,
	},
	savingThrows: {
		strength: -1,
		dexterity: 8,
		constitution: 1,
		intelligence: 2,
		wisdom: 7,
		charisma: 5,
	},
	weaponProficiencies: ["simple", "martial"],
	armorProficiencies: ["light", "medium", "heavy"],
	feats: ["lucky", "halfling nimbleness"],
	skills: {
		acrobatics: 2,
		animalHandling: 2,
		arcana: 2,
		athletics: 2,
		deception: 2,
		history: 2,
		insight: 2,
		intimidation: 2,
		investigation: 2,
		medicine: 2,
		nature: 2,
		perception: 2,
		performance: 2,
		religion: 2,
		sleightOfHand: 2,
		stealth: 2,
		survival: 2,
	},
	equipped: {
		armor: [{}],
		weapons: [{}],
	},
	equipment: [{}],
	carryWeight: 0,
	maxCarryWeight: 10,
	knownSpells: [{}],
	preparedSpells: [{}],
	createdAt: new Date(),
};

Meteor.startup(async () => {
	console.log("Server started!");

	// If the Character collection is empty, add some data.
	if ((await CharacterCollection.find().countAsync()) === 0) {
		await Meteor.call("character.insert", bilbobaggins);

		console.log("Server started with some data!");

		// We publish the entire collection to all clients.
		// In order to be fetched in real-time to the clients
		Meteor.publish("CharacterCollection", function () {
			return CharacterCollection.find();
		});
	}
});
