import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/info">Info</Link>
				</li>
			</ul>
		</nav>
	);
};
