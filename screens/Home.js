import React, { Component } from 'react';

import GLOBAL from '../Globals'
import commonStyle from '../styles/common_style';

import VideoView from './VideoView';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import {
  CachedImage,
  ImageCacheProvider
} from 'react-native-cached-image';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  static navigationOptions = {
    header: null,
    tabBarLabel: null,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/icon/ic-home.png')}
        style={[commonStyle.tabbar_icon, { tintColor: tintColor }]}
      />
    ),
  };

  componentDidMount() {
    return fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b&key=AIzaSyC7yRW9VL9SlfR8zZ6U_WrFkICThSUCiyU')
      .then((response) => response.json())
      .then((responseJson) => {

        let items = responseJson.items;
        let data = Array();
        items.forEach(function (item) {
          data.push({key: item.id, value: item.snippet});
        }, this);

        this.setState({
          isLoading: false,
          error: false,
          dataSource: data,
          refreshing: false,
          time: 30,
        }, function () {
          // do something with new state

        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  goDetail(videoItem) {
    this.props.navigation.navigate('VideoView', { videoItem: videoItem })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: Platform.OS == "ios" ? 20 : 0 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => this.goDetail(item.value)}>
              <View style={styles.view_item}>
                <CachedImage style={styles.img_item} source={{ uri: item.value.thumbnails.default.url }} />
                <Text style={styles.title_item}>{item.value.title}</Text>
              </View>
            </TouchableOpacity>
          } />
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
    height: 80,
  },
  img_item: {
    width: 100,
    height: 70,
  },
  title_item: {
    flex: 1,
    width: null,
    height: null,
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '300',
    color: GLOBAL.COLOR.TEXT,
    alignSelf: 'center',
    alignItems: 'center',
  }
});