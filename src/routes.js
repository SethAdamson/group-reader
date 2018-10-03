import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './components/main/MainContainer';
import Profile from './components/profile/Profile';
import Dashboard from './components/dashboard/Dashboard';
import Group from './components/group/Group';

export default (
  <Switch>
    <Route component={MainContainer} path="/" exact />
    <Route component={Profile} path="/profile/:userid" />
    <Route component={Dashboard} path="/dashboard/:userid" />
    <Route component={Group} path="/group/:groupid" />
  </Switch>
);
