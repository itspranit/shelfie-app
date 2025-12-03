import { StyleSheet,Pressable } from 'react-native'
import React from 'react'
import {Colors} from "../constants/Colors"

const ThemedButton = ({style,...props}) => {
  return (
    <Pressable style={({pressed})=>[styles.btn,pressed && styles.pressed]} 
    {...props}/>
  )
}

export default ThemedButton

const styles= StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',//algin in center in x direction
      justifyContent:'center'//align in center in y axis
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    },
    link:{
        marginVertical:10,
        borderBottomWidth:1
    },
    btn:{
      backgroundColor:Colors.primary,
      padding:15,
      borderRadius:5
    },
    pressed:{
      opacity:0.8
    }
})