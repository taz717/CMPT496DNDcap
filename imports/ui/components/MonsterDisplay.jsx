import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import makeStyles from "@mui/material/styles";

const denseItemList = {
	//Shrink margin between the list items to make the spell components more coherent
	marginBottom: "0px",
};

const MonsterDisplay = ({ monsterInfo }) => {
	console.log(monsterInfo.armor_class);

	return (
		<Card>
			<CardContent>
				<Typography variant="h3">{monsterInfo.name}</Typography>
				<Typography variant="h6" style={{ fonstSyle: "italic" }}>
					{monsterInfo.size} {monsterInfo.type},{" "}
					{monsterInfo.alignment}
				</Typography>
				<Divider />

				<List>
					<Typography variant="h6">
						Hit Points: {monsterInfo.hit_points}{" "}
					</Typography>
					<Typography variant="h6">
						AC: {monsterInfo.armor_class[0].value} (
						{monsterInfo.armor_class[0].type})
					</Typography>
					<Typography variant="h6" display="inline-block">
						Speed:{" "}
					</Typography>
					{monsterInfo.speed.walk && (
						<Typography
							variant="subtitle1"
							display="inline-block"
							marginLeft="10px"
						>
							{monsterInfo.speed.walk}
						</Typography>
					)}
					{monsterInfo.speed.fly && (
						<Typography variant="subtitle1" display="inline-block">
							, fly {monsterInfo.speed.fly}
						</Typography>
					)}
					{monsterInfo.speed.swim && (
						<Typography variant="subtitle1" display="inline-block">
							, swim {monsterInfo.speed.swim}
						</Typography>
					)}
					<Divider />
					<ListItem style={denseItemList}>
						<ListItemText>
							Strength: {monsterInfo.strength} (
							{monsterInfo.strength - 10 > 0 ? "+" : ""}
							{Math.trunc((monsterInfo.strength - 10) / 2)})
						</ListItemText>
						<ListItemText>
							Dexterity: {monsterInfo.dexterity} (
							{monsterInfo.dexterity - 10 > 0 ? "+" : ""}
							{Math.trunc((monsterInfo.dexterity - 10) / 2)})
						</ListItemText>
						<ListItemText>
							Constitution: {monsterInfo.constitution} (
							{monsterInfo.constitution - 10 > 0 ? "+" : ""}
							{Math.trunc((monsterInfo.constitution - 10) / 2)})
						</ListItemText>
						<ListItemText>
							Intelligence: {monsterInfo.intelligence} (
							{monsterInfo.intelligence - 10 > 0 ? "+" : ""}
							{Math.trunc((monsterInfo.intelligence - 10) / 2)})
						</ListItemText>
						<ListItemText>
							Wisdom: {monsterInfo.wisdom} (
							{monsterInfo.wisdom - 10 > 0 ? "+" : ""}
							{Math.trunc((monsterInfo.wisdom - 10) / 2)})
						</ListItemText>
						<ListItemText>
							Charisma: {monsterInfo.charisma} (
							{monsterInfo.charisma - 10 > 0 ? "+" : ""}
							{Math.trunc((monsterInfo.charisma - 10) / 2)})
						</ListItemText>
					</ListItem>
					<Divider />
					<Typography variant="body1">
						Challenge Rating: {monsterInfo.challenge_rating}
					</Typography>
					<Typography variant="subtitle1">
						XP: {monsterInfo.xp}
					</Typography>
					<Typography variant="subtitle1">
						Languages: {monsterInfo.languages}
					</Typography>
					{monsterInfo.senses.darkvision && (
						<Typography variant="subtitle1">
							Darkvision: {monsterInfo.senses.darkvision}
						</Typography>
					)}
					{monsterInfo.senses.passive_perception && (
						<Typography variant="subtitle1">
							Passive Perception:{" "}
							{monsterInfo.senses.passive_perception}
						</Typography>
					)}
					<Divider />
					{monsterInfo.damage_vulnerabilities.length > 0
						? "Vulnerabilities:"
						: ""}
					{monsterInfo.damage_vulnerabilities.map((vulnerability) => (
						<Typography variant="subtitle2" marginLeft="20px">
							- {vulnerability}
						</Typography>
					))}
					{monsterInfo.damage_resistances.length > 0
						? "Resistances:"
						: ""}
					{monsterInfo.damage_resistances.map((resistance) => (
						<Typography variant="subtitle2" marginLeft="20px">
							- {resistance}
						</Typography>
					))}
					{monsterInfo.damage_immunities.length > 0
						? "Immunities:"
						: ""}
					{monsterInfo.damage_immunities.map((immunity) => (
						<Typography variant="subtitle2" marginLeft="20px">
							- {immunity}
						</Typography>
					))}
					{monsterInfo.condition_immunities.length > 0
						? "Condition Immunities:"
						: ""}
					{monsterInfo.condition_immunities.map((condition) => (
						<Typography variant="subtitle2" marginLeft="20px">
							- {condition}
						</Typography>
					))}
					{monsterInfo.special_abilities.length > 0
						? "Special Abilities:"
						: ""}
					{monsterInfo.special_abilities.map((ability) => (
						<Typography variant="subtitle2" marginLeft="20px">
							- {ability.name}
						</Typography>
					))}
					{monsterInfo.actions.length > 0 ? "Actions:" : ""}
					{monsterInfo.actions.map((action) => (
						<Typography variant="subtitle2" marginLeft="20px">
							- {action.name}
						</Typography>
					))}
					{monsterInfo.legendary_actions.length > 0
						? "Special Abilities:"
						: ""}
					{monsterInfo.legendary_actions.map((action) => (
						<Typography variant="subtitle2" marginLeft="20px">
							- {action.name}
						</Typography>
					))}
				</List>
			</CardContent>
		</Card>
	);
};

export default MonsterDisplay;
