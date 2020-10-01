import { StyleSheet } from 'react-native'

export default StyleSheet.create({
 
  board: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '70%',
  },
  itemHList: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 0,
    backgroundColor: '#FFF',
    elevation: 3,
    backgroundColor: 'transparent', 
  },
  itemView: {
    width: '40%',
    height: '90%',
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  itemImage: {
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
  },
  
  gameOver: {
    width: 310,
    height: 310,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  gameOverText: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 25,
  },
  gameReesultText: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 45,
    color: "green",
  },
  gameOverImage: {
    width: 120,
    height: 120,
    marginTop: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  bannerImage: {
    width: '60%',
    height: '10%',
    margin: 20,
  },
  
  // fixed
  logoImage: {
    width: '30%',
    height: '20%',
    margin: 20,
  },
   
//-------------------------------

// fixed
containermain: {
  flex: 1,
  padding: 0,
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  backgroundColor: '#FFFFF0',
},

// fixed
banner:{
  height: 50,
  backgroundColor: 'transparent',
 },

// fixed
containerV: {
  flex: 1,
  flexDirection: 'column',
  borderColor: '#000',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
},

containerH: {
  flex: 1,
  flexDirection: 'column',
  borderColor: '#000',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
},

//--------------------------------------------------------------

// fixed
buttonViewContainerH: {
  width: '60%',
  height: '20%',
  flexDirection: 'row',
  borderColor: '#000',
  justifyContent: 'center',
  backgroundColor: 'transparent',
},

// fixed
buttonView: {
  width: '46%',
  height: '90%',
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#000',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: 'blue',
  margin: 10,
},

// fixed
buttonText: {
  backgroundColor: 'transparent',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: 25,
  color: "white",
},

})
