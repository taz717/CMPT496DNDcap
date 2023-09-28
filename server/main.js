import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';



async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if (await Rooms.find().countAsync() === 0) {
    await Rooms.insertAsync({name: roomName, users: [userName] })
    };

  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("links", function () {
    return LinksCollection.find();
  });

  Meteor.publish("rooms", function () {
    return Rooms.find();
  });

});
