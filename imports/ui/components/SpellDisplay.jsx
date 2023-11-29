import React from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

const denseItemList = {
    //Shrink margin between the list items to make the spell components more coherent
    marginBottom: '0px',
};

const Spelldisplay = ({ spell }) => {
<<<<<<< Updated upstream
    let levelText;

    if (spell.level === 0) {
        levelText = `${spell.school} Cantrip`;
    } else {
        levelText = `Level ${spell.level} ${spell.school}`;
    }

=======
>>>>>>> Stashed changes
    return (
        <Card>
            <CardContent>
                <Typography variant='h5' component='div'>
                    {spell.name}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
<<<<<<< Updated upstream
                    {levelText}
=======
                    Level {spell.level} {spell.school}
>>>>>>> Stashed changes
                </Typography>
                <List>
                    <ListItem style = {denseItemList}>
                        <ListItemText primary={`Casting Time: ${spell.castingTime}`} style = {denseItemList} />
                    </ListItem>
                    <ListItem style = {denseItemList}>
                        <ListItemText primary={`Range: ${spell.range}`} style = {denseItemList} />
                    </ListItem>
                    <ListItem style = {denseItemList}>
                        <ListItemText primary={`Components: ${spell.components}`} style = {denseItemList} />
                    </ListItem>
                    {spell.concentration ? (
                        <ListItem style = {denseItemList}>
                            <ListItemText primary={`Duration: Concentration, up to ${spell.duration}`} style = {denseItemList} />
                        </ListItem>
                    ) : (
                        <ListItem style = {denseItemList}>
                            <ListItemText primary={`Duration: ${spell.duration}`} style = {denseItemList} />
                        </ListItem>
                    )}
                    <ListItem style = {denseItemList}>
<<<<<<< Updated upstream
                        <ListItemText primary={`Description: ${spell.desc}`} style = {denseItemList} />
=======
                        <ListItemText primary={`Description: ${spell.description}`} style = {denseItemList} />
>>>>>>> Stashed changes
                    </ListItem>
                {/*Further data entries and logical evaluations will go here, down below*/}
                </List>
            </CardContent>
        </Card>
    );
};

export default Spelldisplay;