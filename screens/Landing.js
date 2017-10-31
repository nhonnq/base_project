import React, { Component } from 'react';

import commonStyle from '../styles/common_style';
import GLOBAL from '../Globals';
import Logo from '../common/Logo';
import strings from "../strings/strings"

import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import * as Progress from 'react-native-progress';
import IconFA from 'react-native-vector-icons/FontAwesome';

const timeOut = 100;

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { timeLoading: 0 };
    }

    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        // Toggle the state every second
        var intervalId = setInterval(() => {
            this.setState({
                timeLoading: this.state.timeLoading + 1
            })

            if (this.state.timeLoading > timeOut) {
                clearInterval(this.state.intervalId);
            }
        }, 1);

        this.setState({ intervalId: intervalId });
    }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
    }

    doLoginWithEmail() {
        this.props.navigation.navigate('Login')
    }

    doRegister() {
        this.props.navigation.navigate('Register')
    }

    render() {
        if (this.state.timeLoading > timeOut) {
            return (
                <View style={commonStyle.container_full}>
                    <View style={styles.header}>
                        <Image style={styles.img_header} source={require('../images/bg_header.jpg')} />
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.txt_welcome}>Welcome to react native</Text>
                        <Text style={styles.txt_description}>react native change my life</Text>

                        <View style={styles.view_action}>
                            <View style={{ marginTop: 5 }}>
                                <IconFA.Button onPress={() => this.doLoginWithEmail()} name="envelope-open" borderRadius={20} backgroundColor={GLOBAL.COLOR.BG_TEXT}>
                                    <Text style={commonStyle.text}>{strings.login_with_email}</Text>
                                </IconFA.Button>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <IconFA.Button name="facebook" borderRadius={20} backgroundColor='#5855d6'>
                                    <Text style={commonStyle.text_white}>{strings.login_facebook}</Text>
                                </IconFA.Button>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <IconFA.Button name="google" borderRadius={20} backgroundColor='#df4a32'>
                                    <Text style={commonStyle.text_white}>{strings.login_google}</Text>
                                </IconFA.Button>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <IconFA.Button name="twitter" borderRadius={20} backgroundColor='#50abf1'>
                                    <Text style={commonStyle.text_white}>{strings.login_twitter}</Text>
                                </IconFA.Button>
                            </View>

                            <TouchableOpacity onPress={() => this.doRegister()} style={{ marginTop: 10 }}>
                                <Text style={commonStyle.text}>{strings.dont_have_account}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            );
        } else {
            return (<View style={commonStyle.container}>
                <Logo />
                <Text style={{ marginTop: 20, fontSize: 20, fontWeight: 'bold' }}>React Native</Text>
                <Progress.Bar
                    style={{ marginTop: 20 }}
                    progress={this.state.timeLoading / 100} width={200} height={10} color={GLOBAL.COLOR.PRIMARY} />
            </View>);
        }
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    img_header: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    },
    body: {
        flex: 1,
        alignSelf: 'center',
    }, txt_welcome: {
        fontSize: 20,
        fontWeight: '400',
        margin: 5,
        alignSelf: 'center',
        color: GLOBAL.COLOR.TEXT
    }, txt_description: {
        fontSize: 12,
        alignSelf: 'center',
        marginBottom: 5,
        color: GLOBAL.COLOR.TEXT
    }, view_action: {
        flex: 1,
        alignSelf: 'center',
    }
});