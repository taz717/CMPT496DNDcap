///////////////////////////////////////////////////////////////////////////////
// Purpose   : Create a list of all character names in room
// Parameters: roomName - the name entered
// Returns   : list of character names
// Throws    : invalid-room-name
// Blame     : Andrew
///////////////////////////////////////////////////////////////////////////////

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { RoomsCollection } from "../";

Meteor.methods({
	"rooms.accessRoom": function (roomName) {
        // check the name
        check(roomName, String);

		const room = RoomsCollection.findOne({ name: roomName });

		if (!room) {
            //Throw error if room doesnt exist
			throw new Meteor.Error("invalid-room-name");

		} else {
			//Get list of characters in the room
            return RoomsCollection.findOne(
                { name: roomName },
                { fields: { characters: 1, _id: 0 } }
            )?.characters || [];
		}
	},
});