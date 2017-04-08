import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      selectedTab: 'login',
      error: null,
      loading: false,
    };
  }

  onLogin() {
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({
        error: 'Please enter your username and password',
      });
    }
  }
  render() {
    const { selectedTab } = this.state;
    return (
      <View style={s.container}>
        <View style={s.header}>
          <Text style={s.title}>GameWatch</Text>
        </View>
        <View style={s.content}>
          <View style={s.tabbar}>
            <TouchableOpacity
              onPress={() => this.setState({ selectedTab: 'login' })}
              style={selectedTab === 'login' ? s.activeTab : null}
            >
              <Text style={s.tabLink}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ selectedTab: 'signup' })}
              style={selectedTab === 'signup' ? s.activeTab : null}
            >
              <Text style={s.tabLink}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '90%', alignSelf: 'center', paddingTop: 25 }}>
            <Text style={s.label}>Username:</Text>
            <TextInput
              style={s.input}
              value={this.state.username}
              onChangeText={
                username => this.setState({ username, error: null })
              }
            />
            <Text style={s.label}>Password:</Text>
            <TextInput style={s.input}
              secureTextEntry
              value={this.state.password}
              onChangeText={
                password => this.setState({ password, error: null })
              }
            />
            <TouchableOpacity
              style={s.button}
              onPress={() => this.onLogin()}
            >
              <Text style={[s.label, { textAlign: 'center', paddingTop: 5 }]}>
                {selectedTab === 'login' ? 'Log in' : 'Sign up'}
              </Text>
            </TouchableOpacity>
          </View>
          {this.state.error &&
            <Text style={s.error}>
              {this.state.error}
            </Text>
          }
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0299C7'
  },
  title: {
    fontSize: 28,
    backgroundColor: '#0299C7',
    alignSelf: 'center',
  },
  content: {
    flex: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    height: 35,
    borderColor: '#CCC',
    borderWidth: 1,
    marginBottom: 15,
    padding: 5,
    paddingLeft: 10,
    borderRadius: 10,
  },
  button: {
    height: 35,
    marginTop: 10,
    backgroundColor: 'goldenrod',
    borderRadius: 15,
  },
  error: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
    color: 'red',
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 20,
    borderBottomColor: '#CCC',
    borderBottomWidth: 2,
  },
  tabLink: {
    fontSize: 18,
  },
  activeTab: {
    borderBottomColor: '#0299C7',
    paddingBottom: 5,
    borderBottomWidth: 3,
  },
});
