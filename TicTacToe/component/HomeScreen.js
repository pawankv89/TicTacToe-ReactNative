import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Platform
  } from 'react-native';

  
import NetInfo from "@react-native-community/netinfo";

import styles from '../styles/GameBoard'
import StartAppAd from '../startapp/StartAppAd';
import Banner from '../startapp/StartAppBanner';
const logo_image = require('../assets/logo.png')
const tic_banner_image = require('../assets/tic_banner.png')

class HomeScreen extends React.Component{

  constructor(props)
  {
    super(props);
 
    this.state = { 
      connected: true,
      status: false,
      gameOver: false,
      button_0: "0",
      button_1: "1",
    };
  }

  componentDidMount() {
    
    //To get the network state once
    NetInfo.fetch().then(state => {
       //console.log('First, is ' + (state ? 'online' : 'offline'));
       console.log('Fetch Connection type: ' + state.type + ', Is connected?: ' + state.isConnected);
       var connected = state.isConnected;
       this.setState({ connected });
     });
     
   //Subscribe to network state updates
   const unsubscribe = NetInfo.addEventListener(state => {
       console.log(
          'Fetch Subscribe Connection type: ' + 
           state.type + 
          ', Is connected?: ' + 
           state.isConnected);
           var connected = state.isConnected;
           this.setState({ connected });
     }); 
  }

    // For Navigation Header
    static navigationOptions = {
      title: 'Home',
      //Sets Header text of Status Bar
      headerStyle: {
        backgroundColor: 'black',
        //Sets Header color
      },
      headerTintColor: '#fff',
      //Sets Header text color
      headerTitleStyle: {
        fontWeight: 'bold',
        //Sets Header text style
      }
    };


  /*
  render() {
    return (   
      <View style={styles.containermain}>
        <View style={styles.containerV}>
          <Image
          style={styles.bannerImage}
          source={tic_banner_image} />
          <Image
          style={styles.logoImage}
          source={logo_image} />
          <View style={styles.containerH}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText} onPress={() => this.buttonOnClickListener(this.state.button_0)}>Single Player</Text>
          </View>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText} onPress={() => this.buttonOnClickListener(this.state.button_1)}>Multi Player</Text>
          </View>
          </View>
        </View>
      {
         this.state.connected === false ? 
         null : (
            Platform.OS === 'android' ? 
              <Banner style={styles.banner}></Banner> : 
              <View style={styles.banner}></View>
           )
        }
      </View>
    );
  }*/

  render() {
    return (   
      <View style={styles.containermain}>
        <View style={styles.containerV}>
        <Image
          style={styles.bannerImage}
          source={tic_banner_image} 
          resizeMode='contain'/>
          <Image
          style={styles.logoImage}
          source={logo_image} 
          resizeMode='contain'/>
          <View style={styles.buttonViewContainerH}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText} onPress={() => this.buttonOnClickListener(this.state.button_0)}>Single Player</Text>
          </View>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText} onPress={() => this.buttonOnClickListener(this.state.button_1)}>Multi Player</Text>
          </View>
          </View>
          </View>
        {
         this.state.connected === false ? 
         null : (
            Platform.OS === 'android' ? 
              <Banner style={styles.banner}></Banner> : 
              null
           )
        }
      </View>
    );
  }

  buttonOnClickListener(button) {
    console.log("button type ", button);

    const { navigate } = this.props.navigation;

    switch(button) {
      case '0':
        if (Platform.OS === 'android') {
          console.log("StartAppAd", button)
          StartAppAd.showAd();  
        }
        navigate('SinglePlayer')
      break;
      case '1':
        if (Platform.OS === 'android') {
          console.log("StartAppAd", button)
          StartAppAd.showAd();  
        }
        navigate('MultiPlayer')
      break;
      default:
      console.log("Not found", button)
    } 
  }

}

export default HomeScreen;

