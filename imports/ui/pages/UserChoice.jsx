import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export const UserChoice = () => {

    //Get current logged in username
    loggedInUser = Meteor.user({fields: {'username': 1}}).username;

    const navigate = useNavigate();

    // Go to the list of characters
    const playerChoice = (event) => {
        navigate('/playerCharList');
    }

    // Go to the DM screen
    const DMChoice = (event) => {
        navigate('/DM');
    }

    // Logout user
    const logout = (event) => {
        // Log user out and navigate back to sign in page
        Meteor.logout(function(err){
            if (err){
                console.log(err);
            }else{
                console.log("successful logout");
                navigate('/');
            }
        });
    }

    return (
        <Container component="main" maxWidth="sm">
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Typography component="h1" variant="h4">
                Logged in as {loggedInUser}
            </Typography>
            <Typography variant="title" color="inherit" noWrap>
                &nbsp;
            </Typography>
            <Typography component="h2" variant="body1">
                Are you a Dungeon Master or a Player?
            </Typography>
            <Grid container spacing={2}>
            <   Grid item xs={6}>
                    <Button
                        onClick={DMChoice}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="error"
                        size="large"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Dungeon Master
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                    onClick={playerChoice}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="success"
                    size="large"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Player
                    </Button>
                </Grid>
            </Grid>
                <Button
                    onClick={logout}
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Log out
                </Button>
            </Box>
        </Container>
    );
    };
