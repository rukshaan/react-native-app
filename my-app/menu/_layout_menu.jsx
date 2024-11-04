import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function _layout_menu() {
  return (
    <Tabs>
        <Tabs.Screen 
              name='nuts'
              options={{title:'home'}}
        />
        <Tabs.Screen 
              name='vegetables'
              options={{title:'Explore'}}
        />
        <Tabs.Screen 
              name='Fruits'
              options={{title:'Profile'}}
        />
        <Tabs.Screen 
              name='GlutenFree'
              options={{title:'Create'}}
        />
    </Tabs>
  )
}