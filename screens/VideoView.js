import React, { Component } from 'react';

import strings from "../strings/strings"
import commonStyle from '../styles/common_style';
import GLOBAL from '../Globals'

import NavBar from './components/NavBar';
import Video from 'react-native-video';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

export default class VideoView extends Component {

    constructor(props) {
        super(props)

        navigation = props.navigation
        videoItem = props.navigation.state.params.videoItem;
        url = 'https://www.youtube.com/watch?v=' + videoItem.resourceId.videoId

        this.state = { videoItem: videoItem, url: url }
    }

    static navigationOptions = {
        header:
        <NavBar title='' onCallBack={() => this.navigation.goBack()} />
    };



    render() {

        return (
            <View style={styles.view_item}>
                {/* <Video source={{ url: this.state.url, mainVer: 1, patchVer: 0 }} // Looks for .mp4 file (background.mp4) in the given expansion version. 
                    rate={1.0}                   // 0 is paused, 1 is normal. 
                    volume={1.0}                 // 0 is muted, 1 is normal. 
                    muted={false}                // Mutes the audio entirely. 
                    paused={false}               // Pauses playback entirely. 
                    resizeMode="cover"           // Fill the whole screen at aspect ratio. 
                    repeat={true}                // Repeat forever. 
                    onLoadStart={this.loadStart} // Callback when video starts to load 
                    onLoad={this.setDuration}    // Callback when video loads 
                    onProgress={this.setTime}    // Callback every ~250ms with currentTime 
                    onEnd={this.onEnd}           // Callback when playback finishes 
                    onError={this.videoError}    // Callback when video cannot be loaded 
                    style={styles.backgroundVideo} /> */}
                <WebView style={styles.view_item}
                    source={{ uri: this.state.url }}
                />
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
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
