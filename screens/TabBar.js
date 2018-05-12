import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { TabNavigator } from 'react-navigation';

import GLOBAL from '../Globals'

import Home from './Home';
import Profile from './Profile';



var TabBar = TabNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile },
}, {
        initialRouteName: 'Home',
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: false,
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: 'white',
            activeBackgroundColor: GLOBAL.COLOR.PRIMARY,
            inactiveTintColor: 'darkgray',
            inactiveBackgroundColor: GLOBAL.COLOR.PRIMARY,
            labelStyle: {
                fontSize: 12,
                padding: 0
            },
            indicatorStyle: {
                backgroundColor: 'transparent'
            },
            style: {
                height: 50
            }
        }
    }
);

export default TabBar;