import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SaveIcon from "@mui/icons-material/Save";
import CasinoIcon from "@mui/icons-material/Casino";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const actions = [
	{
		icon: <CasinoIcon />,
		name: "Dice",
		operation: "handleDice",
	},
	{
		icon: <SaveIcon />,
		name: "Save",
		operation: "handleSave",
	},
	{
		icon: <ConnectWithoutContactIcon />,
		name: "Connect",
		operation: "handleConnect",
	},
];

export default function CharacterSpeedDial({ handleSave }) {
	const handleClick = (operation) => {
		if (operation === "handleSave") {
			handleSave();
		}
	};

	return (
		<Box sx={{ height: 80, transform: "translateZ(0px)", flexGrow: 1 }}>
			<SpeedDial
				ariaLabel="Character Speed Dial"
				sx={{ position: "absolute", bottom: 16, right: 16 }}
				icon={<SpeedDialIcon />}
				direction="left"
			>
				{actions.map((action) => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						onClick={() => handleClick(action.operation)}
					/>
				))}
			</SpeedDial>
		</Box>
	);
}
