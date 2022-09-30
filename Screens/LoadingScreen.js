import { StyleSheet, View ,Image} from 'react-native'
import React from 'react'

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
    <Image
    source={require("../nvProject/Screens/Pics/MemoIcon.jpg")}
    style={styles.buttonImageIconStyle}
    />
  </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({

    container:{
      flex:1,
      alignItems:'center',
      backgroundColor:'#16354D',
      justifyContent:'center'
    },
    buttonImageIconStyle: {
      height:'40%',
      width:'40%',
      resizeMode:'center'
    }
  })