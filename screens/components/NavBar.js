import React, { Component } from 'react';

import commonStyle from '../../styles/common_style';
import GLOBAL from '../../Globals'

import IconIon from 'react-native-vector-icons/Ionicons';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class NavBar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={commonStyle.navigationbar}>
                <TouchableOpacity onPress={() => this.props.onCallBack()} style={commonStyle.navbar_back_button}>
                    <IconIon name="ios-arrow-round-back" alignSelf='center' backgroundColor='red' size={40} color={GLOBAL.COLOR.TEXT} />
                </TouchableOpacity>
                <Text style={commonStyle.navbar_title}>{this.props.title}</Text>
            </View>
        );
    }
}
