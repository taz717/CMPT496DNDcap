import React from 'react';
import { Home } from './Home.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Routes } from './Routes.jsx';
import { RoomScreen } from './RoomScreen.jsx';

export const App = () => (
  <div>
    <h1>Welcome to DND</h1>
    <Router>
      <Home/>
      
    </Router>
  </div>
);
