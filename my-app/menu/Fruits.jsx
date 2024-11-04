import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
export default function Fruits() {
  return (
    <View>
    <Link href={'/FruitsDetails'}>
      <Text style={{alignItems:'center',justifyContent:'center'}}></Text>
      </Link>
    </View>
  )
}