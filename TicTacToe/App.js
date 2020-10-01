/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RootStack from './navigation/RootStack';
//Import react-navigation
import { createAppContainer } from 'react-navigation';
export default createAppContainer(RootStack);

 /*
 class App extends React.Component {
  render() {
      return (
        <HomeScreen></HomeScreen>
      );
  }
}

export default App;
*/

