import React, { Component } from 'react';

import commonStyle from '../styles/common_style';
import registerStyle from '../styles/register_style';
import Logo from '../common/Logo';

import GLOBAL from '../Globals'
import strings from "../strings/strings"

import NavBar from './components/NavBar';

import IconFA from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';

import {
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

export default class Register extends Component {

  constructor(props) {
    super(props)
    navigation = props.navigation
  }

  static navigationOptions = {
    header:
    <NavBar title={strings.register} onCallBack={() => this.navigation.goBack()}/>
  };

  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    return (
      <View style={commonStyle.container}>
        <ScrollView style={commonStyle.scrollView_full}>
          <View style={[registerStyle.view_logo, {height: 120}]}>
            <Logo />
          </View>
          <View style={registerStyle.view_register}>
            <TextInput
              ref='username'
              style={[commonStyle.single_input_text, styles.txt_input]}
              underlineColorAndroid="transparent"
              placeholder={strings.username_or_email}
              placeholderTextColor={GLOBAL.COLOR.TEXT_HOLDER}
              autoCapitalize="none" />
            <TextInput
              ref='display_name'
              style={[commonStyle.single_input_text, styles.txt_input]}
              underlineColorAndroid="transparent"
              placeholder={strings.display_name}
              placeholderTextColor={GLOBAL.COLOR.TEXT_HOLDER}
              autoCapitalize="none" />
            <TextInput
              ref='password'
              style={[commonStyle.single_input_text, styles.txt_input]}
              underlineColorAndroid="transparent"
              placeholder={strings.password}
              placeholderTextColor={GLOBAL.COLOR.TEXT_HOLDER}
              autoCapitalize="none" />
            <TextInput
              ref='re_password'
              style={[commonStyle.single_input_text, styles.txt_input]}
              underlineColorAndroid="transparent"
              placeholder={strings.re_password}
              placeholderTextColor={GLOBAL.COLOR.TEXT_HOLDER}
              autoCapitalize="none" />

            <View style={styles.action}>
              <TouchableOpacity style={[commonStyle.contain_button, {marginTop: 20}]}  onPress={() => ''}>
                <Text style={[commonStyle.button]}>{strings.register}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

/** StyleSheet **/
const styles = StyleSheet.create({
  view_logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  }, view_login: {
    flex: 2,
    alignItems: 'center',
    alignSelf: 'stretch',
  }, txt_input: {
    margin: 5,
  }
})
