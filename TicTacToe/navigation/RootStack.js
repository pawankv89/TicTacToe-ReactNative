import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

// For All Screen

import HomeScreen from '../component/HomeScreen';
import SinglePlayerScreen from '../component/SinglePlayerScreen';
import MultiPlayerScreen from '../component/MultiPlayerScreen';

//import all the screens we are going to switch 
const RootStack = createStackNavigator(
    {
      Home: { screen: HomeScreen },
      SinglePlayer: { screen: SinglePlayerScreen },
      MultiPlayer: { screen: MultiPlayerScreen }
    },
    {
        initialRouteName: 'Home',
    }
    
    );
    
    export default RootStack;