import React, { useState } from 'react';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';

export const CharacterCreate = () => {
    
    const navigate = useNavigate();

    loggedInUser = Meteor.user({ fields: { username: 1 } })?.username;

    function CustomTabPanel(props) {
      const { children, value, index, ...other } = props;
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    // New character with logged in user set as owner
    const newCharacter = {
        name: "",
        ownerID: loggedInUser,
        class: [],
        level: 0,
        xp: 0,
        race: "",
        background: {
            name: "",
            description: "",
        },
        details: {
            age: 0,
            height: "",
            weight: "",
            eyes: "",
            skin: "",
            hair: "",
        },
        alignment: "",
        inspiration: false,
        ac: 0,
        initiative: 0,
        speed: 0,
        hp: 0,
        maxHP: 0,
        deathSaves: {
            successes: 0,
            failures: 0,
        },
        savingThrows: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        },
        weaponProficiencies: [],
        armorProficiencies: [],
        feats: [],
        skills: {
            acrobatics: 0,
            animalHandling: 0,
            arcana: 0,
            athletics: 0,
            deception: 0,
            history: 0,
            insight: 0,
            intimidation: 0,
            investigation: 0,
            medicine: 0,
            nature: 0,
            perception: 0,
            performance: 0,
            religion: 0,
            sleightOfHand: 0,
            stealth: 0,
            survival: 0,
        },
        equipped: {
            armor: [{}],
            weapons: [{}],
        },
        equipment: [{}],
        carryWeight: 0,
        maxCarryWeight: 0,
        knownSpells: [{}],
        preparedSpells: [{}],
        createdAt: new Date(),
    };

    // States and functions for back confirmation box
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const backClick = (event) => {
		navigate("/playerCharList");
	};

    
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


  const saveCharacter = () => {
      //Add checks to make sure all fields are filled        
      Meteor.call("character.insert", newCharacter);
  };

  return (
    <div>
      <Container component="main" maxWidth="lg">
            <Typography component="h1" variant="h4" align='center' >
                Create your new character!
            </Typography>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Attributes and Feats" {...a11yProps(0)} />
          <Tab label="Appearance and Background" {...a11yProps(1)} />
          <Tab label="Spells" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Box component="form" onSubmit={saveCharacter} noValidate sx={{ mt: 1 }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
            <TextField
              margin="normal"
              required
              style = {{width: 275, p: 5}}
              id="CharName"
              label="Character Name"
              name="CharName"
              autoFocus
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
              margin="normal"
              required
              style = {{width: 275}}
              name="CharClass"
              label="Class"
              id="CharClass"
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
              margin="normal"
              required
              style = {{width: 275}}
              name="CharLevel"
              label="Level"
              id="CharLevel"
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
              margin="normal"
              required
              style = {{width: 275}}
              name="CharRace"
              label="Race"
              id="CharRace"
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
              margin="normal"
              required
              style = {{width: 275}}
              name="CharAlign"
              label="Alignment"
              id="CharAlign"
            />
            </Grid>
        </Grid>
      </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
    <Grid container spacing={102}>
      <Grid item xs={6}>
        <Button
            onClick={handleClickOpen}
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Back
        </Button>
        </Grid>
        <Grid item xs={6}>
        <Button
            onClick={saveCharacter}
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Save Character
        </Button>
        </Grid>
	  </Grid>
    </Container>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Go back to character list without saving?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Going back now will not save the character data!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={backClick} autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};