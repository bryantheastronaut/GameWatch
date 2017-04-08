import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ListItem = props => (
  <TouchableOpacity
    style={s.listItem}
  >
    <Text>{props.name}</Text>
  </TouchableOpacity>
);

const s = StyleSheet.create({
  listItem: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#999',
  },
});

export default ListItem;
