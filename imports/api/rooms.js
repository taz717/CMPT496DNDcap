import { Mongo } from 'meteor/mongo';

export const Rooms = new Mongo.Collection('rooms');

Meteor.methods({
    'rooms.createOrJoinRoom': function (roomName, userName){
      const room = Rooms.findOne({ name: roomName});
  
      if (!room) {
        // Create a new room if it doesn't exist
        const roomId = Rooms.insert({ name: roomName, users: [userName] });
        return roomId;
      } else {
        // Join an existing room
        Rooms.update(room._id, { $addToSet: { users: userName } });
        return room._id;
      }
    },  
  });