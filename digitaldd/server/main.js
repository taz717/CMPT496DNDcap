import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { PlayersCollection } from '../imports/api/players';

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

async function insertPlayer({ name, race, DNDclass }) {
  await PlayersCollection.insertAsync({ name, race, DNDclass, createdAt: new Date() });
}

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if (await LinksCollection.find().countAsync() === 0) {
    await insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app',
    });

    await insertLink({
      title: 'Follow the Guide',
      url: 'https://guide.meteor.com',
    });

    await insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com',
    });

    await insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com',
    });
  }

  if (await PlayersCollection.find().countAsync() === 0) {
    await insertPlayer({
      name: 'Bilbo Baggins',
      race: 'Hobbit',
      DNDclass: 'Rogue',
    });
  };
    


  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("links", function () {
    return LinksCollection.find();
  });

  Meteor.publish("players", function () {
    return PlayersCollection.find();
  });
});
