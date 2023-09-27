import { Meteor } from "meteor/meteor";
import {
	PlayerCollection,
	insertPlayer,
} from "../imports/api/PlayerCollection";
import {
	CharacterCollection,
	insertCharacter,
} from "../imports/api/CharacterCollection";

// export async function insertCharacter(characterObject) {
// 	await CharacterCollection.insertAsync(characterObject);
// }

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
			class: "Rogue",
			createdAt: new Date(),
		});

		// TODO get rid of
		// update this character to be in JohnDoe's characters array
		// await PlayerCollection.updateAsync(
		// 	{ name: "JohnDoe" },
		// 	{
		// 		$push: {
		// 			characters: CharacterCollection.findOne({
		// 				name: "Bilbo Baggins",
		// 			})._id,
		// 		},
		// 	}
		// );
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
