import React, { useState } from 'react';
import { Image } from 'react-native';

import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { useLocalSearchParams } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import HeartIcon from '../components/HeartIcon';
import { MaterialIcons } from '@expo/vector-icons';

import Counter from '../components/Counter';
import { addToCart } from '../store/slice';

// export default function App() {
//   return (
  
//   );
// }

export default function FruitsDetails({ navigation }) {

  const { id, name, image, price } = useLocalSearchParams(); 
  const [quantity,setQuantity]=useState(1);
  const dispatch = useDispatch(); 

  const processAddToCard=()=>{
    console.log('calling')
    const item={
      id:id,
      desciption:name,
      price:price,
      image:image,
      quantity:quantity,
      total:quantity * price
      
    }
    dispatch(addToCart(item))
  }
  return (
    <>
      <View style={styles.container1}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 5, left: 10 }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <MaterialIcons name="location-pin" size={24} color="red" />
        <Text style={styles.address}>Richmond, VA</Text>
        <HeartIcon style={{ paddingHorizontal: 0, marginLeft: 150, fontSize: 30 }} />
      </View>

      <View style={styles.container}>
        <Image source={image} style={styles.fruitImage} />
        <Text>  {id}{" "}item</Text>
        <Text style={styles.name}> {name}</Text>
        <Text style={styles.price} >  $.{price}</Text>
        {/* {console.log(quantity)} */}
        <Counter style={styles.counter1} quantity={quantity} setQuantity={setQuantity}/>
        
      </View>

      <View style={styles.container2}>
        <Text style={styles.descriptionText}>
          Crushed {name} is used in Yogurt, Jam, Sweets, and Ice cream.
        </Text>
        <Text style={styles.descriptionText1}>
          The Juice is used as the main ingredient in Pina Colada cocktail.
        </Text>

        <TouchableOpacity style={styles.customButton} onPress={() => processAddToCard()}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'left',
    justifyContent: 'center',
    top: 0
  },
  address:{
    fontSize:20,
    justifyContent: 'center',
    alignItems:'center',
    paddingRight:-150
  },
  name:{
    fontSize:25,
    fontWeight:'500',
  },
  price:{
    fontWeight:'900',
    color:'orange',
    fontSize:17
  },
  container1: {
    marginHorizontal: 10,
    flex: 1,
    padding: 10,
    alignItems: 'space-between',
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  container2: {
    flex: 1,
    top: 0,
    alignItems: 'center'
  },
  fruitImage: {
    width: 362,
    height: 300,
    marginTop: 100,
    borderRadius: 10,
    alignItems: 'center'
  },
  customButton: {
    width: 250,
    height: 60,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding:10,
    marginTop:30
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  descriptionText: {
    height: 60,
    width: 370,
    fontSize: 15,
    padding: 10,
    margin: 40
  },
  descriptionText1: {
    height: 60,
    width: 370,
    fontSize: 15,
    padding: 10,
    margin: 0
  },
  counter :{
    alignItems:'right',
    justifyContent:'right',
    
  }
});
