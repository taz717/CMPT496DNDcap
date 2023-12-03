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

export const DM = () => {
  
  navigate = useNavigate();

  const backClick = (event) => {
    navigate('/choice');
  }


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


  return (
    <div>
      <Container component="main" maxWidth="lg">
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Lookup" {...a11yProps(0)} />
          <Tab label="Encounter Tracker" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Lookup
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Encounter
      </CustomTabPanel>
    </Box>
    <Grid container spacing={102}>
      <Grid item xs={6}>
        <Button
            onClick={backClick}
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Back
        </Button>
        </Grid>
	  </Grid>
    </Container>
    </div>
  );
};