import React, { Component } from 'react';

import commonStyle from '../../styles/common_style';
import GLOBAL from '../../Globals'

import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import {
    CachedImage,
    ImageCacheProvider
} from 'react-native-cached-image';

export default class MenuItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let itemHeight = this.props.itemHeight ? this.props.itemHeight : 80;
        return (
            <View style={[styles.view_item, { height: itemHeight }]}>
                <Image style={[styles.img_item]} source={this.props.rowData.data.image} />
                <Text style={[styles.title_item]}>{this.props.rowData.data.title}</Text>
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
        padding: 3,
        width: null,
    },
    img_item: {
        width: 30,
        height: 30,
    },
    title_item: {
        flex: 4,
        width: null,
        height: null,
        marginLeft: 10,
        fontSize: 14,
        fontWeight: '400',
        color: GLOBAL.COLOR.TEXT,
        alignSelf: 'center',
        alignItems: 'center',
    }
});