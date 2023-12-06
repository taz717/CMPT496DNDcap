import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SaveIcon from "@mui/icons-material/Save";
import CasinoIcon from "@mui/icons-material/Casino";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import DiceHolder from "../DiceHolder";

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

export default function CharacterSpeedDial({charName, handleSave }) {
	const [openDice, setOpenDice] = React.useState(false);
	const [openConnectDialog, setOpenConnectDialog] = React.useState(false);
	const [roomName, setRoomName] = React.useState("");

	const handleClick = (operation) => {
		if (operation === "handleSave") {
			handleSave();
		}

		if (operation === "handleDice") {
			// pop up the dice roller
			console.log("Dice");
			setOpenDice(true);
		}

		if (operation === "handleConnect"){
			setOpenConnectDialog(true);
		}
	};

	const handleClose = () => {
		setOpenDice(false);
		setOpenConnectDialog(false);
	};

	const handleRoomJoin = () => {
		//setCharName(character.name);
		Meteor.call("rooms.createOrJoinRoom", roomName, charName, (error) => {
			if (error) {
				console.error(error.reason);
			} else {
				console.log("Room joined successfully");
			}
		});
	};

	const leaveRoom = () => {
		Meteor.call("rooms.leaveRoom", roomName, charName, (error, result) => {
			if (error) {
				console.error(error);
			} else {
				console.log("Left room successfully");
				// Handle any additional logic after leaving the room
			}
		});
	};

	return (
		<Box sx={{ height: 80, transform: "translateZ(0px)", flexGrow: 1 }}>
			{openDice && (
				<Dialog onClose={handleClose} open={openDice}>
					<DialogTitle>Dice Roller</DialogTitle>
					<DiceHolder />
				</Dialog>
			)}
			{openConnectDialog && (
				<Dialog onClose={handleClose} open={openConnectDialog}>
					<DialogTitle>Join/Leave Room</DialogTitle>
				
					<div style={{ display: "flex" }}>
						<TextField
							sx={{
								textAlign: "right",
								width: "50%", // Adjust the width as needed
							}}
							id="roomName"
							label="RoomName"
							name="roomName"
							value={roomName}
							onChange={(e) => setRoomName(e.target.value)}
						/>
						<Button onClick={handleRoomJoin}>Join Room</Button>
						<Button onClick={leaveRoom}>Leave Room</Button>
					</div>
				
				</Dialog>
			)}
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
