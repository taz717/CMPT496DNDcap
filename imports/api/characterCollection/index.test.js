import { Meteor } from "meteor/meteor";
import assert from "assert";
import { CharacterCollection } from "./";
import StubCollections from "meteor/hwillson:stub-collections";

// importing methods
import "./methods";

describe("CharacterCollection", function () {
	const bilboBaggins = {
		name: "Bilbo Baggins",
		ownerID: "EruIlluvatar",
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

	beforeEach(function () {
		// Stub the collection (so we don't make a real db call)
		StubCollections.stub(CharacterCollection);
	});

	afterEach(function () {
		// Restore the database after each test
		StubCollections.restore();
	});

	it("Character insert into the DB", function () {
		// Call the method
		Meteor.call("character.insert", bilboBaggins);

		const character = CharacterCollection.findOne({
			name: "Bilbo Baggins",
		});

		// Verify that the method does what we expected
		assert.strictEqual(character.name, "Bilbo Baggins");

		// Restore the collection
		StubCollections.restore();
	});

	it("Character update in the DB", function () {
		// Call insert for set up
		Meteor.call("character.insert", bilboBaggins);

		// Get the character
		const character = CharacterCollection.findOne({
			name: "Bilbo Baggins",
		});

		// Call the method we are testing
		Meteor.call(
			"character.simpleUpdate",
			character._id,
			"name",
			"Frodo Baggins"
		);

		// Verify that the method does what we expected
		const updatedCharacter = CharacterCollection.findOne({
			name: "Frodo Baggins",
		});
		assert.strictEqual(updatedCharacter.name, "Frodo Baggins");
	});

	it("Character delete from the DB", function () {
		// Call insert for set up
		Meteor.call("character.insert", bilboBaggins);

		// Get the character
		const character = CharacterCollection.findOne({
			name: "Bilbo Baggins",
		});

		// Call the method we are testing
		Meteor.call("character.delete", character._id);

		// Verify that the method does what we expected
		const deletedCharacter = CharacterCollection.findOne({
			name: "Bilbo Baggins",
		});

		assert.strictEqual(deletedCharacter, undefined);
	});

	it("Character getOne from the DB", function () {
		// Call insert for set up
		Meteor.call("character.insert", bilboBaggins);

		// Get the character
		const character = CharacterCollection.findOne({
			name: "Bilbo Baggins",
		});

		// Call the method we are testing
		const foundCharacter = Meteor.call("character.getOne", character._id);

		// Verify that the method does what we expected
		assert.strictEqual(foundCharacter.name, "Bilbo Baggins");
	});

	// it("Character get character saving throw from the DB", function () {
	// 	// Stub the collection (so we don't make a real db call)
	// 	StubCollections.stub(CharacterCollection);

	// 	// Call insert for set up
	// 	Meteor.call("character.insert", bilboBaggins);

	// 	const character = CharacterCollection.findOne({
	// 		name: "Bilbo Baggins",
	// 	});

	// 	// Verify that the insert does what we expected
	// 	assert.strictEqual(character.name, "Bilbo Baggins");

	// 	// Call the method we are testing
	// 	const foundCharacter = Meteor.call(
	// 		"character.getSavingThrow",
	// 		character._id,
	// 		"strength"
	// 	);

	// 	// Verify that the method does what we expected
	// 	assert.strictEqual(foundCharacter.savingThrows.strength, -1);

	// 	// Restore the collection
	// 	StubCollections.restore();
	// });
});