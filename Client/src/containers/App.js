import React, { Component } from 'react';
import Login from '../components/Login';
import ProfileContainer from './ProfileContainer';
import TESTDATA from '../../TESTDATA.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: TESTDATA,
    };
  }
  render() {
    return this.state.user ?
      <ProfileContainer user={this.state.user} /> :
      <Login user={this.state.user} />
  }
}

export default App;
