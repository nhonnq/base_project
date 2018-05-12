import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import GLOBAL from '../Globals'

import { TabNavigator } from 'react-navigation';

import Vocabulary from './Vocabulary';
import Home from './Home';
import Profile from './Profile';
import Exercise from './Exercise';

var TabBar = TabNavigator({
    Vocabulary: { screen: Vocabulary },
    Profile: { screen: Profile },
    Exercise: { screen: Exercise },
}, {
        initialRouteName: 'Vocabulary',
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: false,
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: 'white',
            activeBackgroundColor: 'darkgreen',
            inactiveTintColor: 'black',
            inactiveBackgroundColor: 'green',
            labelStyle: {
                fontSize: 12,
                padding: 0
            },
            indicatorStyle: {
                backgroundColor: 'transparent'
            },
            style: {
                height: 50,
                backgroundColor: GLOBAL.COLOR.PRIMARY,
            }
        }
    }
);

export default TabBar;