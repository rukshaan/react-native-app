import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../components/TabBar'
import store from '../store/store'; 
import { Provider } from 'react-redux';
export default function _layout() {
  return (
   <Provider store={store}>
    
  
    
 
  
    <Tabs tabBar={props=> <TabBar {...props}/>}
    >
    
        <Tabs.Screen 
              name='index'
              options={{title:'home',headerShown:false}}
        />
        <Tabs.Screen 
              name='Explore'
              options={{title:'Explore',headerShown:false}}
        />
        <Tabs.Screen 
              name='Profile'
              options={{title:'Profile',headerShown:false}}
        />
        <Tabs.Screen 
              name='Create'
              options={{title:'Create',headerShown:false}}
        />
         
        
    </Tabs>
    </Provider>
  
  )
}