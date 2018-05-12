import React, { Component } from 'react';

import strings from "../strings/strings"
import commonStyle from '../styles/common_style';
import GLOBAL from '../Globals'

import NavBar from './components/NavBar';

import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Exercise extends Component {

    constructor(props) {
        super(props)

        navigation = props.navigation

        //this.state = { videoItem: videoItem, url: url }
    }

    static navigationOptions = {
        header:
        <NavBar title='' onCallBack={() => this.navigation.goBack()} />
    };



    render() {

        return (
            <View style={styles.view_item}>
              <Text>This's exercise screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view_item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
});
