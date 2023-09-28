import { Mongo } from "meteor/mongo";

export const RoomsCollection = new Mongo.Collection("rooms");

Meteor.methods({
	"rooms.createOrJoinRoom": function (roomName, userName) {
		const room = RoomsCollection.findOne({ name: roomName });

		if (!room) {
			// Create a new room if it doesn't exist
			const roomId = RoomsCollection.insert({
				name: roomName,
				users: [userName],
			});
			return roomId;
		} else {
			// Join an existing room
			RoomsCollection.update(room._id, {
				$addToSet: { users: userName },
			});
			return room._id;
		}
	},
});
