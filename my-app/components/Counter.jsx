import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementByAmount } from '../store/slice';
import { TouchableOpacity } from 'react-native';

const Counter = ({quantity,setQuantity}) => {

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <View style={styles.viewText}>
      <TouchableOpacity style={styles.customButton} onPress={() => setQuantity(prv=>prv-1)} disabled={quantity===1}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      
      <Text style={styles.countText}>{quantity}</Text>

      <TouchableOpacity style={styles.customButton1} onPress={() => setQuantity(prv => prv+1)}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      
      
      
      
    </View>
  );
};

export default Counter;
const styles=StyleSheet.create({
    customButton:{
        width: 50,
        height: 30,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderRadius: 30,
        marginHorizontal: 10,
       
      },
      customButton1:{
        width: 50,
        height: 30,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderRadius: 30,
        marginHorizontal: 10,
        
      },
      viewText:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'flex-end',
            marginTop:-50,
            marginRight:3
      }
    })