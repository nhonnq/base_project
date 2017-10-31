import React, { Component } from 'react'

import commonStyle from '../styles/common_style'
import Logo from '../common/Logo'
import GLOBAL from '../Globals'
import strings from "../strings/strings"

import NavBar from './components/NavBar';
import Register from '../screens/Register';
import Home from '../screens/Home';

import SweetAlert from './components/SweetAlert'
import AwesomeAlert from 'react-native-awesome-alerts'
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';

import {
  Platform,
  Keyboard,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native'

import {
  StackNavigator, NavigationActions
} from 'react-navigation'

export default class Login extends Component {

  constructor(props) {
    super(props)
    navigation = props.navigation
    this.state = { username: '', password: '', showAlert: { isShow: false, title: "", messages: "", type: "" } }
  }

  static navigationOptions = {
    header:
    <NavBar title={strings.login} onCallBack={() => this.navigation.goBack()} />
  };

  resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'TabBar' })
    ]
  })

  hideAlertDialog() {
    this.setState({
      showAlert: { isShow: false, title: "", messages: "", type: "" }
    })
  }

  doLogin() {
    var txtUsername = this.refs.username._lastNativeText
    var txtPassword = this.refs.password._lastNativeText

    if (!txtUsername || !txtPassword) {
      this.setState({
        showAlert: { isShow: true, title: "Error", messages: "Please enter data", type: "warning" }
      })
    } else {
      //goto Home
      Keyboard.dismiss()
      this.props.navigation.dispatch(this.resetAction)
    }
  }

  render() {
    const showAlert = this.state.showAlert

    return (
      <View style={commonStyle.container}>
        <View style={styles.view_logo}>
          <Logo />
        </View>
        <View style={styles.view_login}>
          <TextInput
            ref='username'
            value="nhonnq.dev@gmail.com"
            style={[commonStyle.single_input_text, styles.txt_username]}
            underlineColorAndroid="transparent"
            placeholder={strings.username_or_email}
            placeholderTextColor={GLOBAL.COLOR.TEXT_HOLDER}
            autoCapitalize="none" />
          <TextInput
            ref='password'
            value="admin123"
            style={[commonStyle.single_input_text, styles.txt_password]}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            placeholder={strings.password}
            placeholderTextColor={GLOBAL.COLOR.TEXT_HOLDER} />
          <View style={styles.action}>
            <TouchableOpacity style={commonStyle.contain_button} onPress={() => this.doLogin()}>
              <Text style={commonStyle.button}>{strings.login_with_email}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <SweetAlert showAlert={showAlert} action={(key) => this.hideAlertDialog()} />

      </View>
    )
  }
}

/** StyleSheet **/
const styles = StyleSheet.create({
  view_logo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  }, view_login: {
    flex: 4,
    alignItems: 'center',
    alignSelf: 'stretch',
  }, view_footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, action: {
    flexDirection: 'row',
    marginTop: 20,
  }, action_social: {
    flexDirection: 'row',
    marginTop: 10,
  },
  txt_username: {
    margin: 5,
  },
  txt_password: {
    margin: 5,
  }, button_login: {
    margin: 3
  }
})
