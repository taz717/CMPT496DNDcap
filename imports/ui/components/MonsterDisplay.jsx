import React from "react";
import Typography from "@mui/material/Typography";

const MonsterDisplay = ({ monsterInfo }) => {
	return (
		<div>
			<Typography variant="h4">{monsterInfo.name}</Typography>
			<Typography variant="subtitle1">
				Strength: {monsterInfo.strength}
			</Typography>
			<Typography variant="subtitle1">
				Dexterity: {monsterInfo.dexterity}
			</Typography>
			<Typography variant="subtitle1">
				Constitution: {monsterInfo.constitution}
			</Typography>
			<Typography variant="subtitle1">
				Intelligence: {monsterInfo.intelligence}
			</Typography>
			<Typography variant="subtitle1">
				Wisdom: {monsterInfo.wisdom}
			</Typography>
			<Typography variant="subtitle1">
				Charisma: {monsterInfo.charisma}
			</Typography>
			<Typography variant="subtitle1">
				Hit Points: {monsterInfo.hit_points}
			</Typography>
			<Typography variant="subtitle1">
				Armor Class Type: {monsterInfo.armor_class.type}
			</Typography>
			<Typography variant="subtitle1">
				Armor Class Value: {monsterInfo.armor_class.value}
			</Typography>
			<Typography variant="subtitle1">
				Challenge Rating: {monsterInfo.challenge_rating}
			</Typography>
			<Typography variant="subtitle1">XP: {monsterInfo.xp}</Typography>
			<Typography variant="subtitle1">
				Alignment: {monsterInfo.alignment}
			</Typography>
			<Typography variant="subtitle1">
				Size: {monsterInfo.size}
			</Typography>
			<Typography variant="subtitle1">
				Type: {monsterInfo.type}
			</Typography>
			{monsterInfo.speed.walk && (
				<Typography variant="subtitle1">
					Walk Speed: {monsterInfo.speed.walk}
				</Typography>
			)}
			{monsterInfo.speed.fly && (
				<Typography variant="subtitle1">
					Fly Speed: {monsterInfo.speed.fly}
				</Typography>
			)}
			{monsterInfo.speed.swim && (
				<Typography variant="subtitle1">
					Swim Speed: {monsterInfo.speed.swim}
				</Typography>
			)}

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
					passive_perception: {monsterInfo.senses.passive_perception}
				</Typography>
			)}
			{monsterInfo.damage_vulnerabilities.map((vulnerability) => (
				<Typography variant="subtitle1">
					Damage Vulnerabilities: {vulnerability}
				</Typography>
			))}
			{monsterInfo.damage_resistances.map((resistance) => (
				<Typography variant="subtitle1">
					Damage Resistances: {resistance}
				</Typography>
			))}
			{monsterInfo.damage_immunities.map((immunity) => (
				<Typography variant="subtitle1">
					Damage Immunities: {immunity}
				</Typography>
			))}
			{monsterInfo.condition_immunities.map((condition) => (
				<Typography variant="subtitle1">
					Condition Immunities: {condition}
				</Typography>
			))}
			{monsterInfo.special_abilities.map((ability) => (
				<Typography variant="subtitle1">
					Special Abilities: {ability.name}
				</Typography>
			))}
			{monsterInfo.actions.map((action) => (
				<Typography variant="subtitle1">
					Actions: {action.name}
				</Typography>
			))}
			{monsterInfo.legendary_actions.map((action) => (
				<Typography variant="subtitle1">
					Legendary Actions: {action.name}
				</Typography>
			))}
		</div>
	);
};

export default MonsterDisplay;
