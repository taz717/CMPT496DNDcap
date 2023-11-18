import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const DM = () => {
  
  navigate = useNavigate();

  const backClick = (event) => {
    navigate('/choice');
  }

  return (
    <div>
        <Typography component="h2" variant="body1">
                DM Screen
        </Typography>
        <Button
              onClick={(backClick)}
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Back
      </Button> 
    </div>
  );
};