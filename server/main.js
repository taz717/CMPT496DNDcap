import { Meteor } from "meteor/meteor";
import { CharacterCollection } from "../imports/api/characterCollection";

Meteor.startup(async () => {
	// If the Character collection is empty, add some data.
	if ((await CharacterCollection.find().countAsync()) === 0) {
		await Meteor.call("character.insert", {
			name: "Arya Stark",
			house: "House Stark",
			age: 11,
			alive: true,
			created: new Date(),
		});

		console.log("Server started with some data!");

		// We publish the entire collection to all clients.
		// In order to be fetched in real-time to the clients
		Meteor.publish("CharacterCollection", function () {
			return CharacterCollection.find();
		});
	}
});
