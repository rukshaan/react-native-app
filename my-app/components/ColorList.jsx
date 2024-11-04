import { View, Text,ScrollView,StyleSheet,Image } from 'react-native'
import React from 'react'
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'
const ColorList=({color})=>{
  return(
    <ScrollView contentContainerStyle={style.container}>
      {
        [1,0.8,0.5,0.25,0.3].map(opacity=>(
          
          <View key={opacity} style={[styles.color,{backgroundColor:color,opacity}]}/>
        ))
      }
    </ScrollView>
  )
}
const styles=StyleSheet.create({
  color:{
    width:'100%',
    height:150,
    borderRadius:25,
    borderCurve:'continuous',
    marginBottom:12

  },
  container: {
    paddingHorizontal:10,

  }
})