import { Meteor } from "meteor/meteor";
import assert from "assert";
import { CharacterCollection } from "./";
import StubCollections from "meteor/hwillson:stub-collections";

// importing methods
import "./methods";

describe("CharacterCollection", function () {
	beforeEach(function () {
		// Stub the collection (so we don't make a real db call)
		StubCollections.stub(CharacterCollection);
	});

	afterEach(function () {
		// Restore the database after each test
		StubCollections.restore();
	});

	it("Character insert into the DB", function () {
		// create a character object
		const BilboBaggins = {
			ownderID: "taz",
			name: "Bilbo Baggins",
			createdAt: new Date(),
		};

		// Call the method
		Meteor.call("character.insertSimple", BilboBaggins);

		const character = CharacterCollection.findOne({
			name: "Bilbo Baggins",
		});

		// Verify that the method does what we expected
		assert.strictEqual(character.name, "Bilbo Baggins");

		// Restore the collection
		StubCollections.restore();
	});

	it("Character update in the DB", function () {
		// create a character object
		const BilboBaggins = {
			ownderID: "taz",
			name: "Bilbo Baggins",
			createdAt: new Date(),
		};

		// insert the character into the db
		const characterID = CharacterCollection.insert(BilboBaggins);

		// create a new character object
		const FrodoBaggins = {
			ownderID: "taz",
			name: "Frodo Baggins",
			createdAt: new Date(),
		};

		// Call the method
		Meteor.call("character.update", characterID, FrodoBaggins);

		const character = CharacterCollection.findOne({
			name: "Frodo Baggins",
		});

		// Verify that the method does what we expected
		assert.strictEqual(character.name, "Frodo Baggins");

		// Restore the collection
		StubCollections.restore();
	});

	it("Character get by owner", function () {
		// create a character object
		const BilboBaggins = {
			ownderID: "taz",
			name: "Bilbo Baggins",
			createdAt: new Date(),
		};

		// insert the character into the db
		const characterID = CharacterCollection.insert(BilboBaggins);

		// Call the method
		Meteor.call("character.getCharacterInfoByOwner", "taz", (err, res) => {
			if (err) {
				console.log(err);
			} else {
				assert.strictEqual(res[0].name, "Bilbo Baggins");
			}
		});

		// Restore the collection
		StubCollections.restore();
	});

	it("Character get by id", function () {
		// create a character object
		const BilboBaggins = {
			ownderID: "taz",
			name: "Bilbo Baggins",
			createdAt: new Date(),
		};

		// insert the character into the db
		const characterID = CharacterCollection.insert(BilboBaggins);

		// Call the method
		Meteor.call("character.getOne", characterID, (err, res) => {
			if (err) {
				console.log(err);
			} else {
				assert.strictEqual(res.name, "Bilbo Baggins");
			}
		});

		// Restore the collection
		StubCollections.restore();
	});

	it("Character delete by id", function () {
		// create a character object
		const BilboBaggins = {
			ownderID: "taz",
			name: "Bilbo Baggins",
			createdAt: new Date(),
		};

		// insert the character into the db
		const characterID = CharacterCollection.insert(BilboBaggins);

		// Call the method
		Meteor.call("character.delete", characterID, (err, res) => {
			if (err) {
				console.log(err);
			} else {
				assert.strictEqual(res, 0);
			}
		});

		// Restore the collection
		StubCollections.restore();
	});

	it("Character get all", function () {
		// create a character object
		const BilboBaggins = {
			ownderID: "taz",
			name: "Bilbo Baggins",
			createdAt: new Date(),
		};

		// insert the character into the db
		const characterID = CharacterCollection.insert(BilboBaggins);

		// Call the method
		Meteor.call("character.getAll", (err, res) => {
			if (err) {
				console.log(err);
			} else {
				assert.strictEqual(res[0].name, "Bilbo Baggins");
			}
		});

		// Restore the collection
		StubCollections.restore();
	});
});
