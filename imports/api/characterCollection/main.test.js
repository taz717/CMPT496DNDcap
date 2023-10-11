import assert from "assert";
import { CharacterCollection } from "./main.js";
import StubCollections from "meteor/hwillson:stub-collections";

describe("CharacterCollection", function () {
	const bilboBaggins = {
		name: "Bilbo Baggins",
		ownerID: "EruIlluvatar",
		class: ["rogue", "bard"],
		level: 2,
		race: "Hobbit",
		alignment: "Chaotic Good",
		background: "Burglar",
		inspiration: false,
		xp: 0,
		ac: 12,
		maxHP: 12,
		currentHP: 12,
		initiative: 2,
		speed: 25,
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
		equipment: {},
		knownSpells: [],
		preparedSpells: [],
		createdAt: new Date(),
	};

	it("Character insert into the DB", function () {
		// Stub the collection (so we don't make a real db call)
		StubCollections.stub(CharacterCollection);

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
		// Stub the collection (so we don't make a real db call)
		StubCollections.stub(CharacterCollection);

		// Call insert for set up
		Meteor.call("character.insert", bilboBaggins);

		const character = CharacterCollection.findOne({
			name: "Bilbo Baggins",
		});

		// Verify that the insert does what we expected
		assert.strictEqual(character.name, "Bilbo Baggins");

		// Call the method we are testing
		Meteor.call("character.update", character._id, "name", "Frodo Baggins");

		// Verify that the method does what we expected
		const updatedCharacter = CharacterCollection.findOne({
			name: "Frodo Baggins",
		});
		assert.strictEqual(updatedCharacter.name, "Frodo Baggins");

		// Restore the collection
		StubCollections.restore();
	});
});
