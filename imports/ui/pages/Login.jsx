import React, { useState } from 'react';
import { useFind, useSubscribe } from "meteor/react-meteor-data";
import Button from '@mui/material/Button';

export const Login = () => {

  return (
    <div style = {{ textAlign: "center" }}>

      <h1>Welcome to Digital DnD</h1>

      <p>Are you a Player or Game Master?</p>

      <Button variant="contained" color="info">Player</Button>

      <p></p>
      
      <Button variant="contained" color="error">Game Master</Button>

    </div>
  );
};