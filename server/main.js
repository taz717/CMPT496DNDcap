import { Meteor } from "meteor/meteor";
import { CharacterCollection } from "../imports/api/characterCollection";
import { RoomsCollection } from "../imports/api/rooms";
import "../imports/api/characterCollection/methods";
import "../imports/api/rooms/methods";

Meteor.startup(async () => {
	console.log("Server started!");

	// We publish the entire collection to all clients.
	// In order to be fetched in real-time to the clients
	Meteor.publish("CharacterCollection", function () {
		return CharacterCollection.find();
	});

	Meteor.publish("rooms", function () {
		return RoomsCollection.find();
	});


	// publish a single character
	Meteor.publish("Character", function (characterID) {
		Meteor.call("character.getOne", characterID, (err, res) => {
			if (err) {
				console.log(err);
			} else {
				return res;
			}
		});
	});
});
