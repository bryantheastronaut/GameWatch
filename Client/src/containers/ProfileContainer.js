import React, { Component, PropTypes } from 'react';
import {Text} from 'react-native';
import Tabs from 'react-native-scrollable-tab-view';
import TabBar from '../components/TabBar';
import MyList from '../components/MyList';

export default class ProfileContainer extends Component {
  render() {
    return (
      <Tabs
        style={{ paddingTop: 15 }}
        renderTabBar={() => <TabBar />}
      >
        <Text tabLabel="user">Hello</Text>
        <MyList tabLabel="gamepad" games={this.props.user.watchedGames} />
        <Text tabLabel="search">Hello</Text>
      </Tabs>
    );
  }
}

ProfileContainer.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    systemsOwned: PropTypes.arrayOf(PropTypes.string),
    watchedGames: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
