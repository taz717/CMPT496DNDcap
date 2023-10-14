import React, { useState } from "react";
import RoomsCollection from "../api/rooms";
import { useNavigate } from 'react-router-dom';

export const Home = () => {
	const [roomName, setRoomName] = useState("");
	const [userName, setUserName] = useState("");

	const handleRoomNameChange = (e) => {
		setRoomName(e.target.value);
	};

	const handleUserNameChange = (e) => {
		setUserName(e.target.value);
	};

	const navigate = useNavigate();

	const handleConfirmClick = () => {
		Meteor.subscribe("rooms");
		Meteor.call(
			"rooms.createOrJoinRoom",
			roomName,
			userName,
			(error) => {
				if (error) {
					console.error(error.reason);
				} else {
					navigate(`/room/${roomName}`);
				}
			}
		);
	};

	return (
		<div>
			<h1>Enter Room Name and User Name</h1>
			<form>
				<div>
					<label htmlFor="roomName">Room Name:</label>
					<input
						type="text"
						id="roomName"
						value={roomName}
						onChange={handleRoomNameChange}
					/>
				</div>
				<div>
					<label htmlFor="userName">User Name:</label>
					<input
						type="text"
						id="userName"
						value={userName}
						onChange={handleUserNameChange}
					/>
				</div>
				<div>
					<button type="button" onClick={handleConfirmClick}>
						Confirm
					</button>
				</div>
			</form>
		</div>
	);
};
