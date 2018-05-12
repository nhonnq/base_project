import React, { Component } from 'react';

import GLOBAL from '../Globals'
import commonStyle from '../styles/common_style';
import MenuItem from './components/MenuItem';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import {
    StackNavigator, NavigationActions
} from 'react-navigation'

export default class Profile extends React.Component {

    static navigationOptions = {
        header: null,
        tabBarLabel: null,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/icon/ic-user.png')}
                style={[commonStyle.tabbar_icon, { tintColor: tintColor }]} />
        ),
    };

    resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Login' })
        ]
    })

    goDetail(menu) {
        if (menu.key == 'edit_profile') {

        } else if (menu.key == 'settings') {

        } else if (menu.key == 'logout') {
            this.props.navigation.dispatch(this.resetAction)
        }
    }

    render() {

        const menus = [
            {
                key: 'edit_profile',
                data: {
                    title: 'Edit profile',
                    image: require('../images/icon/ic-profile.png'),
                }
            },
            {
                key: 'settings',
                data: {
                    title: 'Settings',
                    image: require('../images/icon/ic-setting.png'),
                }
            },
            {
                key: 'logout',
                data: {
                    title: 'Logout',
                    image: require('../images/icon/ic-logout.png'),
                }
            }
        ]

        return (
            <View style={[commonStyle.container, { paddingLeft: 30, paddingRight: 30 }]}>
                <View style={styles.view_header}>
                    <Image
                        source={require('../images/icon/avatar-user.png')}
                        style={styles.avatar} />
                    <View style={styles.info}>
                        <Text style={styles.info_username}>
                            Nhon Nguyen
                            </Text>
                        <Text style={styles.info_email}>
                            nhonnq.dev@gmail.com
                            </Text>
                    </View>
                </View>
                <View style={styles.view_content}>
                    <FlatList
                        data={menus}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => this.goDetail(item)}>
                                <MenuItem rowData={item} itemHeight={60} />
                            </TouchableOpacity>
                        } />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view_header: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    avatar: {
        flex: 1.5,
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    info: {
        flex: 2,
        alignItems: 'stretch',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    info_username: {
        fontSize: 18,
        fontWeight: '500',
        color: GLOBAL.COLOR.TEXT,
    },
    info_email: {
        fontSize: 14,
        fontWeight: '300',
        color: GLOBAL.COLOR.TEXT,
    },
    view_content: {
        flex: 2,
        alignSelf: 'stretch',
        alignItems: 'stretch',
    },
});