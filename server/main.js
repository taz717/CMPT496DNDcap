import { Meteor } from "meteor/meteor";
import { PlayerCollection } from "../imports/api/player";
import { CharacterCollection } from "../imports/api/character";

async function insertPlayer(playerObject) {
	await PlayerCollection.insertAsync(playerObject);
}

async function insertCharacter(characterObject) {
	await CharacterCollection.insertAsync(characterObject);
}

Meteor.startup(async () => {
	// if the Player collection is empty, add some data
	if ((await PlayerCollection.find().countAsync()) === 0) {
		await insertPlayer({
			name: "JohnDoe",
			email: "john@doe.com",
			password: "123456",
			characters: [],
			campaigns: [],
			createdAt: new Date(),
		});
	}

	// If the Character collection is empty, add some data.
	if ((await CharacterCollection.find().countAsync()) === 0) {
		await insertCharacter({
			name: "Bilbo Baggins",
			ownerID: PlayerCollection.findOne({ name: "JohnDoe" })._id,
			class: "Rogue",
			level: 3,
			race: "Hobbit",
			alignment: "Chaotic Good",
			background: "Burglar",
			xp: "milestone",
			ac: 15,
			maxHP: 25,
			currentHP: 25,
			initiative: 3,
			speed: 25,
			inspiration: false,
			deathSaves: {
				successes: 0,
				failures: 0,
			},
			savingThrows: {
				strength: 0,
				dexterity: 0,
				constitution: 0,
				intelligence: 0,
				wisdom: 0,
				charisma: 0,
			},
			skills: {
				acrobatics: 0,
				animalHandling: 0,
				arcana: 0,
				athletics: 0,
				deception: 0,
				history: 0,
				insight: 0,
				intimidation: 0,
				investigation: 0,
				medicine: 0,
				nature: 0,
				perception: 0,
				performance: 0,
				persuasion: 0,
				religion: 0,
				sleightOfHand: 0,
				stealth: 0,
				survival: 0,
			},
			equipment: {
				weapons: [],
				armor: [],
				items: [],
			},
			spells: {
				cantrips: [],
				firstLevel: [],
				secondLevel: [],
				thirdLevel: [],
				fourthLevel: [],
				fifthLevel: [],
				sixthLevel: [],
				seventhLevel: [],
				eighthLevel: [],
				ninthLevel: [],
			},
			createdAt: new Date(),
		});

		// update this character to be in JohnDoe's characters array
		await PlayerCollection.updateAsync(
			{ name: "JohnDoe" },
			{
				$push: {
					characters: CharacterCollection.findOne({
						name: "Bilbo Baggins",
					})._id,
				},
			}
		);
	}

	// We publish the entire collection to all clients.
	// In order to be fetched in real-time to the clients
	Meteor.publish("characters", function () {
		return CharacterCollection.find();
	});
	Meteor.publish("players", function () {
		return PlayerCollection.find();
	});
});
