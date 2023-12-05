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
    "rooms.leaveRoom": function (roomName, charName) {
      // Check the parameters
      check(roomName, String);
      check(charName, String);
  
      const room = RoomsCollection.findOne({ name: roomName });
  
      if (!room) {
        throw new Meteor.Error("invalid-room-name");
      } else {
        // Leave the room and remove the character name from the list
        RoomsCollection.update(room._id, {
          $pull: { characters: charName },
        });
  
        return room._id;
      }
    },
  });