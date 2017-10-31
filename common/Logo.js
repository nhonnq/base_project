import React, { Component } from 'react';
import commonStyle from '../styles/common_style';
import {
  StyleSheet,
  Image
} from 'react-native';

export default class Logo extends Component {
  render() {
    return (
        <Image style={commonStyle.logo} source={require('../images/logo.png')} />
    );
  }
}
