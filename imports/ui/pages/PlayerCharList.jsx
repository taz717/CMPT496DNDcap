import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
//import { MongoClient } from "mongodb";

export const PlayerCharList = () => {
 
  const [characterList, setCharacterList] = useState([]);
  //Get current logged in username
  const navigate = useNavigate();

  loggedInUser = Meteor.user({fields: {'username': 1}}).username;

  // useEffect(() => {
  //   // Connect to MongoDB and fetch character names for the logged-in user
  //   const fetchCharacterData = async () => {
  //     try {
  //       const client = new MongoClient('<Your MongoDB Connection String>', {
  //         useNewUrlParser: true,
  //         useUnifiedTopology: true,
  //       });
  //       await client.connect();

  //       const db = client.db('meteor');
  //       const collection = db.collection('characterCollection');

  //       const characters = await collection.find({ ownerID: loggedInUser }).toArray();
  //       const characterNames = characters.map((character) => character.name);

  //       setCharacterList(characterNames);

  //       await client.close();
  //     } catch (error) {
  //       console.error('Error fetching character data:', error);
  //     }
  //   };

  //   fetchCharacterData();
  // }, [loggedInUser]);

  const backClick = (event) => {
    navigate('/choice');
  }


  return (
    <div>
      <Typography component="h2" variant="body1">
                Character list
      </Typography>
      <Button
              onClick={(backClick)}
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Back
      </Button>      
      <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Character
      </Button>
      <List>
        {characterList.map((characterName) => (
          <ListItem key={characterName}>{characterName}</ListItem>
        ))}
      </List>
    </div>
  );
};
