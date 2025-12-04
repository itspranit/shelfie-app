import { View,useColorScheme } from 'react-native'
import React from 'react'
import {Colors} from "../constants/Colors"
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Themedview = ({style, safe = false ,...props}) => {
    const colorScheme=useColorScheme()
    const theme=Colors[colorScheme] ?? Colors.light

    if(!safe) return (
    <View style={[{
        backgroundColor:theme.background
    },style]}
    {...props}/>
       
  )
  const insets=useSafeAreaInsets()
  return (
    <View style={[{
        backgroundColor:theme.background,
        paddingTop:insets.top,
        paddingBottom:insets.bottom,
    },style]}
    {...props}/>
  )

}

export default Themedview
//const Themedview = ({style,children,...props}) => {
//     const colorScheme=useColorScheme()
//     const theme=Colors[colorScheme] ?? Colors.light
//   return (
//     <View style={[{
//         backgroundColor:theme.background
//     },style]}
//     {...props}>
//         {children}