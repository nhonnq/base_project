/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import commonStyle from './styles/common_style';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

import Landing from './screens/Landing';
import Login from './screens/Login';
import Register from './screens/Register';
import TabBar from './screens/TabBar';
import Home from './screens/Home';
import VideoView from './screens/VideoView';

const Nav = StackNavigator({
  Landing: { screen: Landing },
  Login: { screen: Login },
  Register: { screen: Register },
  TabBar: { screen: TabBar },
  Home: { screen: Home },
  VideoView: { screen: VideoView },
});

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <Nav />
    );
  }
}
