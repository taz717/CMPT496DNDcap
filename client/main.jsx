import React from "react";
import { createRoot } from "react-dom/client";
import { Meteor } from "meteor/meteor";

import { App } from "/imports/ui/App";
// import { RenderRoutes } from "/imports/ui/router";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

Meteor.startup(() => {
	const container = document.getElementById("react-target");
	const root = createRoot(container);

	root.render(
		<Router>
			<App />
		</Router>
	);
});
