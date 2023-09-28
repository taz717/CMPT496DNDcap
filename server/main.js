import { Meteor } from "meteor/meteor";
import { LinksCollection } from "/imports/api/links";
import { RoomsCollection } from "/imports/api/rooms";

async function insertLink({ title, url }) {
	await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.startup(async () => {
	// If the Links collection is empty, add some data.
	if ((await RoomsCollection.find().countAsync()) === 0) {
		await RoomsCollection.insertAsync({
			name: roomName,
			users: [userName],
		});
	}

	// We publish the entire Links collection to all clients.
	// In order to be fetched in real-time to the clients
	Meteor.publish("links", function () {
		return LinksCollection.find();
	});

	Meteor.publish("rooms", function () {
		return RoomsCollection.find();
	});
});
