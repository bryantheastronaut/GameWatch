import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  ListView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import ListItem from './ListItem';

class MyList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      games: ds.cloneWithRows(this.props.games)
    };
  }
  render() {
    return (
      <View style={s.container}>
        <Text style={s.header}>Games I&apos;m Watching</Text>
        <ListView
          dataSource={this.state.games}
          renderRow={row => <ListItem name={row} />}
        />
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});

MyList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.string),
};

export default MyList;
