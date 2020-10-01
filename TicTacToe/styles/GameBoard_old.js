import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  board: {
    width: 310,
    height: 310,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 100,
    height: 100,
    margin: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  itemImage: {
    width: 50,
    height: 50,
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
    width: 300,
    height: 60,
    marginTop: 65,
  },
  buttonView: {
    width: 250,
    height: 80,
    marginTop: 25,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'blue',
  },
  buttonText: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    color: "white",
  },
  
  containermain: {
    flex: 1,
    flexDirection: 'column',
    padding: 0,
    backgroundColor: 'white',
  },
  banner:{
    height: 50,
    backgroundColor: 'transparent',
   },

})
