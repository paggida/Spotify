import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Browse from '../pages/Browse';
import Playlist from '../pages/Playlist';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route path="/playlist/:id" component={Playlist} />
  </Switch>
);

export default Routes;
