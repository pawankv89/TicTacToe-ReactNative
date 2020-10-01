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
    TouchableOpacity
  } from 'react-native';

import NetInfo from "@react-native-community/netinfo";

import styles from '../styles/GameBoard'
import StartAppAd from '../startapp/StartAppAd';
import Banner from '../startapp/StartAppBanner';

const tic_banner_image = require('../assets/tic_banner.png')
const logo_image = require('../assets/logo.png')
const empty_image = require('../assets/empty_image.png')
//const coronavirus_image = require('../assets/coronavirus_image.png')
//const mask_image = require('../assets/mask_image.png')
const coronavirus_image = require('../assets/cross_image.png')
const mask_image = require('../assets/zero_image.png')
const tryagain_image = require('../assets/tryagain.png')

class MultiPlayerScreen extends React.Component{

  constructor(props)
  {
    super(props);
 
    this.state = { 
      connected: true,
      board: ["", "", "", "", "", "", "", "", ""],
      gameOver: false,
      gameResult: "",
      chance: "X",
      button_0: "0",
      button_1: "1",
      button_2: "2",
      button_3: "3",
      button_4: "4",
      button_5: "5",
      button_6: "6",
      button_7: "7",
      button_8: "8",
      button_0_image: empty_image,
      button_1_image: empty_image,
      button_2_image: empty_image,
      button_3_image: empty_image,
      button_4_image: empty_image,
      button_5_image: empty_image,
      button_6_image: empty_image,
      button_7_image: empty_image,
      button_8_image: empty_image,
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
    title: 'Multi Player',
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

  render() {
    return (  
      <View style={styles.containermain}>
        <View style={styles.containerV}>
          <Image
          style={styles.bannerImage}
          source={tic_banner_image}
          resizeMode='contain'
          />
          <View style={styles.containerV}>
            {
              this.state.gameOver ? (
                 <View style={styles.gameOver}>
                   <Text style={styles.gameOverText} >Game Over</Text>
                   <Text style={styles.gameReesultText} >{this.state.gameResult}</Text>
                   <TouchableHighlight onPress={() => this.gameOver()}>
                     <Image
                     style={styles.gameOverImage}
                     source={tryagain_image}
                     resizeMode='contain'
                     />
                  </TouchableHighlight>
                  </View>
          ) : (
          <View style={styles.board}>
            <View style={styles.itemHList}>
              <View style={styles.itemView} >
                <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_0)}>
                  <Image
                  style={styles.itemImage}
                  source={this.state.button_0_image}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.itemView}>
                <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_1)}>
                  <Image
                  style={styles.itemImage}
                  source={this.state.button_1_image}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.itemView}>
                <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_2)}>
                  <Image
                  style={styles.itemImage}
                  source={this.state.button_2_image}
                  />
                </TouchableHighlight>
              </View>
            </View>
            <View style={styles.itemHList}>
              <View style={styles.itemView}>
                <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_3)}>
                  <Image
                  style={styles.itemImage}
                  source={this.state.button_3_image}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.itemView}>
              <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_4)}>
                <Image
                style={styles.itemImage}
                source={this.state.button_4_image}
                />
              </TouchableHighlight>
              </View>
             <View style={styles.itemView}>
              <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_5)}>
                <Image
                style={styles.itemImage}
                source={this.state.button_5_image}
                />
              </TouchableHighlight>
              </View>
            </View>
            <View style={styles.itemHList}>
              <View style={styles.itemView}>
                <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_6)}>
                  <Image
                  style={styles.itemImage}
                  source={this.state.button_6_image}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.itemView}>
                <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_7)}>
                  <Image
                  style={styles.itemImage}
                  source={this.state.button_7_image}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.itemView}>
                <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_8)}>
                  <Image
                  style={styles.itemImage}
                  source={this.state.button_8_image}
                  />
                </TouchableHighlight>
              </View>
            </View>
          </View>
          )
          }
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

  buttonItemPrassed (item) {  
    console.log("Found", item)

    switch(item) {
      case '0':
        if (this.state.board[0] != ""){}
        else if (this.state.chance == "X") {
        var button_0_image = coronavirus_image;
        this.setState({ button_0_image });
        this.state.board[0] = "X"
          var chance = "O"
          this.setState({ chance });
      } else {
          var button_0_image = mask_image;
          this.setState({ button_0_image });  
          this.state.board[0] = "O"
          var chance = "X"
          this.setState({ chance });
      }
      this.resultOut(this.state.board)
      break;
      case '1':
        if (this.state.board[1] != ""){}
        else if (this.state.chance == "X") {
        var button_1_image = coronavirus_image;
        this.setState({ button_1_image });
        this.state.board[1] = "X"
          var chance = "O"
          this.setState({ chance });
      } else {
          var button_1_image = mask_image;
          this.setState({ button_1_image });  
          this.state.board[1] = "O"
          var chance = "X"
          this.setState({ chance });
      }
      this.resultOut(this.state.board)
      break;
      case '2':
        if (this.state.board[2] != ""){}
        else if (this.state.chance == "X") {
        var button_2_image = coronavirus_image;
        this.setState({ button_2_image });
        this.state.board[2] = "X"
          var chance = "O"
          this.setState({ chance });
      } else {
          var button_2_image = mask_image;
          this.setState({ button_2_image });  
          this.state.board[2] = "O"
          var chance = "X"
          this.setState({ chance });
      }
      this.resultOut(this.state.board)
      break;
      case '3':
        if (this.state.board[3] != ""){}
        else if (this.state.chance == "X") {
        var button_3_image = coronavirus_image;
        this.setState({ button_3_image });
        this.state.board[3] = "X"
          var chance = "O"
          this.setState({ chance });
      } else {
          var button_3_image = mask_image;
          this.setState({ button_3_image });  
          this.state.board[3] = "O"
          var chance = "X"
          this.setState({ chance });
      }
      this.resultOut(this.state.board)
      break;
      case '4':
        if (this.state.board[4] != ""){}
        else if (this.state.chance == "X") {
        var button_4_image = coronavirus_image;
        this.setState({ button_4_image });
        this.state.board[4] = "X"
          var chance = "O"
          this.setState({ chance });
      } else {
          var button_4_image = mask_image;
          this.setState({ button_4_image });  
          this.state.board[4] = "O"
          var chance = "X"
          this.setState({ chance });
      }
      this.resultOut(this.state.board)
      break;
      case '5':
        if (this.state.board[5] != ""){}
        else if (this.state.chance == "X") {
        var button_5_image = coronavirus_image;
        this.setState({ button_5_image });
        this.state.board[5] = "X"
          var chance = "O"
          this.setState({ chance });
      } else {
          var button_5_image = mask_image;
          this.setState({ button_5_image });  
          this.state.board[5] = "O"
          var chance = "X"
          this.setState({ chance });
      }
      this.resultOut(this.state.board)
      break;
      case '6':
        if (this.state.board[6] != ""){}
        else if (this.state.chance == "X") {
        var button_6_image = coronavirus_image;
        this.setState({ button_6_image });
        this.state.board[6] = "X"
          var chance = "O"
          this.setState({ chance });
      } else {
          var button_6_image = mask_image;
          this.setState({ button_6_image });  
          this.state.board[6] = "O"
          var chance = "X"
          this.setState({ chance });
      }
      this.resultOut(this.state.board)
      break;
      case '7':
        if (this.state.board[7] != ""){}
        else if (this.state.chance == "X") {
        var button_7_image = coronavirus_image;
        this.setState({ button_7_image });
        this.state.board[7] = "X"
          var chance = "O"
          this.setState({ chance });
      } else {
          var button_7_image = mask_image;
          this.setState({ button_7_image });  
          this.state.board[7] = "O"
          var chance = "X"
          this.setState({ chance });
      }
      this.resultOut(this.state.board)
      break;
      case '8':
        if (this.state.board[8] != ""){}
        else if (this.state.chance == "X") {
        var button_8_image = coronavirus_image;
        this.setState({ button_8_image });
        this.state.board[8] = "X"
          var chance = "O"
          this.setState({ chance });
      } else {
          var button_8_image = mask_image;
          this.setState({ button_8_image });  
          this.state.board[8] = "O"
          var chance = "X"
          this.setState({ chance });
      }
      this.resultOut(this.state.board)
      break;
      default:
      console.log("Not found", item)
    } 
  }

  result(bd, s) {
    console.log("Board item", bd, s)
    if(bd[0] == s && bd[1] == s && bd[2] == s){ return true}
    else if(bd[3] == s && bd[4] == s && bd[5] == s){ return true}
    else if(bd[6] == s && bd[7] == s && bd[8] == s){ return true}
    else if(bd[0] == s && bd[3] == s && bd[6] == s){ return true}
    else if(bd[1] == s && bd[4] == s && bd[7] == s){ return true}
    else if(bd[2] == s && bd[5] == s && bd[8] == s){ return true}
    else if(bd[0] == s && bd[4] == s && bd[8] == s){ return true}
    else if(bd[2] == s && bd[4] == s && bd[6] == s){ return true}
    else { return false}
  }
  
  resultOut(board){
    console.log("Board", board)
    if(this.result(board, "X") == true){
      var gameOver = true;
      this.setState({ gameOver });
      var gameResult = "YOU WON"
      this.setState({ gameResult });
      console.log("player Result Out", "YOU")
    }else if(this.result(board, "O") == true){
      var gameOver = true;
      this.setState({ gameOver });
      var gameResult = "COMPUTER WON"
      this.setState({ gameResult });
      console.log("player Result Out", "COMPUTER")
    }else if(this.isBoardFull(board) == true){
      var gameOver = true;
      this.setState({ gameOver });
      var gameResult = "TIE"
      this.setState({ gameResult });
      console.log("player Result Out", "TIE")
    }
}

isBoardFull(board) {

  var found = true;
  for(let i = 0; i < board.length; i++){
    console.log("board", "[",i,"] ", board[i])
    if(board[i] == ""){
      found = false;
    } 
  }
  return found
}

gameOver() {
  //Game Over
  // Reset all data
  var board = ["", "", "", "", "", "", "", "", ""]
  this.setState({ board });

  var chance = "X"
  this.setState({ chance });

  var gameResult = ""
  this.setState({ gameResult });

  var button_0_image = empty_image;
  var button_1_image = empty_image;
  var button_2_image = empty_image;
  var button_3_image = empty_image;
  var button_4_image = empty_image;
  var button_5_image = empty_image;
  var button_6_image = empty_image;
  var button_7_image = empty_image;
  var button_8_image = empty_image;
  this.setState({ button_0_image });
  this.setState({ button_1_image });
  this.setState({ button_2_image });
  this.setState({ button_3_image });
  this.setState({ button_4_image });
  this.setState({ button_5_image });
  this.setState({ button_6_image });
  this.setState({ button_7_image });
  this.setState({ button_8_image });

  var gameOver = false;
  this.setState({ gameOver });
  if (Platform.OS === 'android') {
    StartAppAd.showAd();  
  }
}

}

export default MultiPlayerScreen;

