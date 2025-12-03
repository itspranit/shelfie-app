import { StyleSheet,useColorScheme} from 'react-native'
import {Stack} from 'expo-router'
import React from 'react'
import {Colors} from "../constants/Colors"
import {StatusBar} from 'expo-status-bar'

const RootLayout = () => {
    const colorScheme=useColorScheme()
    const theme= Colors[colorScheme] ?? Colors.light //fallback to light theme if not able to access device default theme
  return (
    <>
        <StatusBar value="auto"/> 
        <Stack screenOptions={{
            headerStyle:{backgroundColor:theme.navBackground},
            headerTintColor:theme.title,
        }}>
            <Stack.Screen name='(auth)' options={{headerShown:false}}/>
            <Stack.Screen name='(dashboard)' options={{headerShown:false}}/>
            <Stack.Screen name="index" options={{title:'Home'}}/>
            
        </Stack>
    </>
  ) 
}

export default RootLayout

const styles = StyleSheet.create({})
//<StatusBar value="auto"/>  to handle head bar to adapt to the theme