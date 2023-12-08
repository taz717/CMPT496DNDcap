import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const denseItemList = {
	//Shrink margin between the list items to make the spell components more coherent
	marginBottom: "0px",
};

const SpellDisplay = ({ spellInfo }) => {
	return (
		<Card>
			<CardContent>
				<Typography variant="h5" component="div">
					{spellInfo.name}
				</Typography>
				<Typography color="textSecondary" gutterBottom>
					Level {spellInfo.level} {spellInfo.school.name}
				</Typography>
				<List>
					<ListItem style={denseItemList}>
						<ListItemText
							primary={`Casting Time: ${spellInfo.casting_time}`}
							style={denseItemList}
						/>
					</ListItem>
					<ListItem style={denseItemList}>
						<ListItemText
							primary={`Range: ${spellInfo.range}`}
							style={denseItemList}
						/>
					</ListItem>
					<ListItem style={denseItemList}>
						<ListItemText
							primary={`Components: ${spellInfo.components}`}
							style={denseItemList}
						/>
					</ListItem>
					{spellInfo.concentration ? (
						<ListItem style={denseItemList}>
							<ListItemText
								primary={`Duration: Concentration, up to ${spellInfo.duration}`}
								style={denseItemList}
							/>
						</ListItem>
					) : (
						<ListItem style={denseItemList}>
							<ListItemText
								primary={`Duration: ${spellInfo.duration}`}
								style={denseItemList}
							/>
						</ListItem>
					)}
					<ListItem style={denseItemList}>
						<ListItemText
							primary={`Description: ${spellInfo.desc}`}
							style={denseItemList}
						/>
					</ListItem>
					{/*Further data entries and logical evaluations will go here, down below*/}
				</List>
			</CardContent>
		</Card>
	);
};

export default SpellDisplay;
