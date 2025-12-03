import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {StatusBar} from 'expo-status-bar'
import {Stack} from 'expo-router'



const Authlayout = () => {
  return (
    <>
    <StatusBar style="auto" />
    <Stack screenOptions={{headerShown:false,animation:"none"}} />
    </>
  )
}

export default Authlayout

const styles = StyleSheet.create({})