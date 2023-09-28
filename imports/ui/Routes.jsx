import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import RoomScreen from './RoomScreen';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/room/:roomId" component={RoomScreen} />
      </Switch>
    </Router>
  );
};