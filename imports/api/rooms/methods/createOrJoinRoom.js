///////////////////////////////////////////////////////////////////////////////
// Purpose   : Create a room if it doesnt exist, or join if it does
// Parameters: roomName - the name entered, charName - name of character currently on screen
// Returns   : room id
// Throws    : Dunno
// Blame     : Andrew
///////////////////////////////////////////////////////////////////////////////

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { RoomsCollection } from "../";

Meteor.methods({
	"rooms.createOrJoinRoom": function (roomName, charName) {
		const room = RoomsCollection.findOne({ name: roomName });

		if (!room) {
			// Create a new room if it doesn't exist
			const roomId = RoomsCollection.insert({
				name: roomName,
				characters: [charName],
			});
			return roomId;
		} else {
			
			// Join an existing room
			RoomsCollection.update(room._id, {
				$addToSet: { characters: charName },
			});
			return room._id;
		}
	},
});