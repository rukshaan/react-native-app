
import { View, Text,TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MenuList from '../components/MenuList';
import Item from '../components/Item';
import BellPlusIcon from '../components/BellPlusIcon';

export default function Home() {
    const [text, setText] = useState('')
    const menuItems = [
      { id: '1', name: 'Nuts', image: require('../assets/images/nuts.jpg') },
      { id: '2', name: 'Vegetables', image: require('../assets/images/vegetables.jpg') },
      { id: '3', name: 'Fruits', image: require('../assets/images/fruits.jpg') },
      { id: '4', name: 'gluten free', image: require('../assets/images/apple.jpg') },
      { id: '5', name: 'Veg Leaf', image: require('../assets/images/vegleaf.jpg') },
    ];
    const fruits = [
      { id: '1', name: 'Apple',category:'fruits', image: require('../assets/images/apple.jpg'),price:150},
      { id: '2', name: 'Banana',category:'fruits', image: require('../assets/images/banana.jpg'),price:150 },
      { id: '3', name: 'Cherry',category:'fruits', image: require('../assets/images/cherry.jpg'),price:150 },
      { id: '4', name: 'Dates',category:'fruits', image: require('../assets/images/dates.jpg') ,price:150},
      { id: '5', name: 'Pine Apple',category:'fruits', image: require('../assets/images/pineapple.jpg'),price:150 },
    ];

    const handleItemPress = (item) => {
      console.log('Selected Item:', item);
    };
  return (<>
    <View style={{backgroundColor:'white',flexDirection:'row'}}>
      <Text style={{
            height:150,
            width:350,
            fontSize:28,
            padding:10,
            marginTop:50
      }}>
        Good For You.           Greate for Life.</Text>
        <BellPlusIcon  style={{
            marginTop:80,
            padding:0
        }}/>
    </View>
    <View style={styles.container}>
      {/* Basic Text Input */}
      <TextInput
        style={styles.input}
        placeholder="What are you looking for ?"
        value={text}
        onChangeText={setText}
        
      />
      <Text style={{
        fontSize:25,
        paddingTop:20
      }}>
      Categories</Text>
      <MenuList  
      style={{
        display:'flex',
        flexDirections:'row',
        height:20,
        width:30
      }}  menuItems={menuItems} onItemPress={handleItemPress}  />
        
        <Item />

      </View>

    
      </>
  )
}
const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 2,
      padding: 10,
      marginBottom: 25,
      borderRadius:20
    },
  });