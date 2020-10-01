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

class SinglePlayerScreen extends React.Component{

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
    title: 'Single Player',
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

//   render() {
//     return (  
//       <View style={styles.containermain}>
//     <View style={styles.container}>
//       <Image
//           style={styles.bannerImage}
//           source={tic_banner_image}
//           />
//       <View style={styles.container}>
//         {
//           this.state.gameOver ? (
//             <View style={styles.gameOver}>
//               <Text style={styles.gameOverText} >Game Over</Text>
//               <Text style={styles.gameReesultText} >{this.state.gameResult}</Text>
//               <TouchableHighlight onPress={() => this.gameOver()}>
//           <Image
//           style={styles.gameOverImage}
//           source={tryagain_image}
//           />
//           </TouchableHighlight>
//             </View>
//           ) : (
//           <View style={styles.board}>
//         <View style={styles.itemHList}>
//         <View style={styles.itemView} >
//         <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_0)}>
//           <Image
//           style={styles.itemImage}
//           source={this.state.button_0_image}
//           />
//           </TouchableHighlight>
//         </View>
//         <View style={styles.itemView}>
//         <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_1)}>
//           <Image
//           style={styles.itemImage}
//           source={this.state.button_1_image}
//           />
//           </TouchableHighlight>
//         </View>
//         <View style={styles.itemView}>
//         <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_2)}>
//           <Image
//           style={styles.itemImage}
//           source={this.state.button_2_image}
//         />
//         </TouchableHighlight>
//       </View>
//     </View>
//     <View style={styles.itemHList}>
//     <View style={styles.itemView}>
//     <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_3)}>
//       <Image
//       style={styles.itemImage}
//       source={this.state.button_3_image}
//       />
//       </TouchableHighlight>
//     </View>
//     <View style={styles.itemView}>
//     <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_4)}>
//       <Image
//       style={styles.itemImage}
//       source={this.state.button_4_image}
//       />
//       </TouchableHighlight>
//     </View>
//     <View style={styles.itemView}>
//     <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_5)}>
//       <Image
//       style={styles.itemImage}
//       source={this.state.button_5_image}
//     />
//     </TouchableHighlight>
//   </View>
// </View>
// <View style={styles.itemHList}>
//         <View style={styles.itemView}>
//         <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_6)}>
//           <Image
//           style={styles.itemImage}
//           source={this.state.button_6_image}
//           />
//           </TouchableHighlight>
//         </View>
//         <View style={styles.itemView}>
//         <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_7)}>
//           <Image
//           style={styles.itemImage}
//           source={this.state.button_7_image}
//           />
//           </TouchableHighlight>
//         </View>
//         <View style={styles.itemView}>
//         <TouchableHighlight onPress={() => this.buttonItemPrassed(this.state.button_8)}>
//           <Image
//           style={styles.itemImage}
//           source={this.state.button_8_image}
//         />
//         </TouchableHighlight>
//       </View>
//     </View>
//         </View>
//           )
//           }
//       </View>
//       </View>
//       {
//          this.state.connected === false ? 
//            null : (
//             Platform.OS === 'android' ? 
//               <Banner style={styles.banner}></Banner> : 
//               null
//            )
//         }
//       </View>
//     );
//   }

  buttonItemPrassed (item) {  
    
    switch(item) {
      case '0':
        if (this.state.board[0] == ""){
          this.state.board[0] = "X"
            var chance = "X"
            this.setState({ chance });
            var button_0_image = coronavirus_image;    
            this.setState({ button_0_image }); 

            if(!this.isBoardFull(this.state.board) && !this.result(this.state.board, "X")) {
                let position = this.getComputerMove(this.state.board)
                this.state.board[position] = "O"
                this.displayComputerButton(position)
            }
        }
      this.resultOut(this.state.board)
      break;
      case '1':
        if (this.state.board[1] == ""){
          this.state.board[1] = "X"
            var chance = "X"
            this.setState({ chance });
            var button_1_image = coronavirus_image;    
            this.setState({ button_1_image }); 

            if((!this.isBoardFull(this.state.board)) && (!this.result(this.state.board, "X"))) {
                let position = this.getComputerMove(this.state.board)
                this.state.board[position] = "O"
                this.displayComputerButton(position)
            }
        }
      this.resultOut(this.state.board)
      break;
      case '2':
        if (this.state.board[2] == ""){
          this.state.board[22] = "X"
            var chance = "X"
            this.setState({ chance });
            var button_2_image = coronavirus_image;    
            this.setState({ button_2_image }); 

            if((!this.isBoardFull(this.state.board)) && (!this.result(this.state.board, "X"))) {
                let position = this.getComputerMove(this.state.board)
                this.state.board[position] = "O"
                this.displayComputerButton(position)
            }
        }
      this.resultOut(this.state.board)
      break;
      case '3':
        if (this.state.board[3] == ""){
          this.state.board[3] = "X"
            var chance = "X"
            this.setState({ chance });
            var button_3_image = coronavirus_image;    
            this.setState({ button_3_image }); 

            if((!this.isBoardFull(this.state.board)) && (!this.result(this.state.board, "X"))) {
                let position = this.getComputerMove(this.state.board)
                this.state.board[position] = "O"
                this.displayComputerButton(position)
            }
        }
      this.resultOut(this.state.board)
      break;
      case '4':
        if (this.state.board[4] == ""){
          this.state.board[4] = "X"
            var chance = "X"
            this.setState({ chance });
            var button_4_image = coronavirus_image;    
            this.setState({ button_4_image }); 

            if((!this.isBoardFull(this.state.board)) && (!this.result(this.state.board, "X"))) {
                let position = this.getComputerMove(this.state.board)
                this.state.board[position] = "O"
                this.displayComputerButton(position)
            }
        }
      this.resultOut(this.state.board)
      break;
      case '5':
        if (this.state.board[5] == ""){
          this.state.board[5] = "X"
            var chance = "X"
            this.setState({ chance });
            var button_5_image = coronavirus_image;    
            this.setState({ button_5_image }); 

            if((!this.isBoardFull(this.state.board)) && (!this.result(this.state.board, "X"))) {
                let position = this.getComputerMove(this.state.board)
                this.state.board[position] = "O"
                this.displayComputerButton(position)
            }
        }
      this.resultOut(this.state.board)
      break;
      case '6':
        if (this.state.board[6] == ""){
          this.state.board[6] = "X"
            var chance = "X"
            this.setState({ chance });
            var button_6_image = coronavirus_image;    
            this.setState({ button_6_image }); 

            if((!this.isBoardFull(this.state.board)) && (!this.result(this.state.board, "X"))) {
                let position = this.getComputerMove(this.state.board)
                this.state.board[position] = "O"
                this.displayComputerButton(position)
            }
        }
      this.resultOut(this.state.board)
      break;
      case '7':
        if (this.state.board[7] == ""){
          this.state.board[7] = "X"
            var chance = "X"
            this.setState({ chance });
            var button_7_image = coronavirus_image;    
            this.setState({ button_7_image }); 

            if((!this.isBoardFull(this.state.board)) && (!this.result(this.state.board, "X"))) {
                let position = this.getComputerMove(this.state.board)
                this.state.board[position] = "O"
                this.displayComputerButton(position)
            }
        }
      this.resultOut(this.state.board)
      break;
      case '8':
        if (this.state.board[8] == ""){
          this.state.board[8] = "X"
            var chance = "X"
            this.setState({ chance });
            var button_8_image = coronavirus_image;    
            this.setState({ button_8_image }); 

            if((!this.isBoardFull(this.state.board)) && (!this.result(this.state.board, "X"))) {
                let position = this.getComputerMove(this.state.board)
                this.state.board[position] = "O"
                this.displayComputerButton(position)
            }
        }
      this.resultOut(this.state.board)
      break;
      default:
      console.log("Not found", item)
    } 
  }

  displayComputerButton(position){
    if(position == 0){
        var chance = "0"
        this.setState({ chance });
        var button_0_image = mask_image;
        this.setState({ button_0_image }); 
    }
    else if(position == 1){
        var chance = "0"
        this.setState({ chance });
        var button_1_image = mask_image;
        this.setState({ button_1_image }); 
    }
    else if(position == 2){
        var chance = "0"
        this.setState({ chance });
        var button_2_image = mask_image;
        this.setState({ button_2_image }); 
    }
    else if(position == 3){
        var chance = "0"
        this.setState({ chance });
        var button_3_image = mask_image;
        this.setState({ button_3_image }); 
    }
    else if(position == 4){
        var chance = "0"
        this.setState({ chance });
        var button_4_image = mask_image;
        this.setState({ button_4_image }); 
    }
    else if(position == 5){
        var chance = "0"
        this.setState({ chance });
        var button_5_image = mask_image;
        this.setState({ button_5_image }); 
    }
    else if(position == 6){
        var chance = "0"
        this.setState({ chance });
        var button_6_image = mask_image;
        this.setState({ button_6_image }); 
    }
    else if(position == 7){
        var chance = "0"
        this.setState({ chance });
        var button_7_image = mask_image;
        this.setState({ button_7_image }); 
    }
    else if(position == 8){
        var chance = "0"
        this.setState({ chance });
        var button_8_image = mask_image;
        this.setState({ button_8_image }); 
    }
}
  getComputerMove(board) {

    //check if computer can win in this move
    for(let i = 0; i < board.length - 1; i++){
        var copy = this.getBoardCopy(board)
        if(copy[i] == "")
        {
            copy[i] = "O";
        } 
        if(this.result(copy, "O") == true) 
        {
          return i;
        }
    }
    //check if player can win in this move
    for(let i = 0; i < board.length - 1; i++){
        var copy = this.getBoardCopy(board)
        if(copy[i] == "")
        {
            copy[i] = "X";
        } 
        if(this.result(copy, "X") == true) 
        {
          return i;
        }
    }

    //try to take corners if its free
    var move = this.choseRandomMove(board, [0, 2, 6, 8])
    if(move != -1){
      return move
    }
        
    //try to take center if its free
    if(board[4] == "")
    {
        return 4
    } 

    //move on one of the sides
    var chosemove = this.choseRandomMove(board,[1, 3, 5, 7])
    return chosemove
}

  choseRandomMove(board, list) {
    var possibleMoves = []

    for(let i = 0; i < list.length; i++){
     const item = list[i];
        if(board[item] == ""){
            possibleMoves.push(item)
        }
    }

    console.log("possibleMoves ", possibleMoves)

    if(possibleMoves.length == 0){
        return -1
    }else {
        const index = Math.round(Math.random() * possibleMoves.length)
        return possibleMoves[index]
    }
}

getBoardCopy(board) {
  var bd = ["", "", "", "", "", "", "", "", ""]
  for(let i = 0; i < board.length - 1; i++){
      bd[i] = board[i]
  }
  return bd
}
  result(bd, s) {
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
    console.log("isBoardFull ", "[",i,"] ", board[i])
    if(board[i] == ""){
      found = false;
      break;
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

export default SinglePlayerScreen;

