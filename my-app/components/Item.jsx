import { View, Text,ScrollView,StyleSheet,Image,TouchableOpacity,} from "react-native";
  import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import { Button } from "react-native-web";

  const fruits = [
    { id: '1', name: 'Apple',category:'fruits', image: require('../assets/images/apple.jpg'),price:150},
    { id: '2', name: 'Banana',category:'fruits', image: require('../assets/images/banana.jpg'),price:100 },
    { id: '3', name: 'Cherry',category:'fruits', image: require('../assets/images/cherry.jpg'),price:25 },
    { id: '4', name: 'Dates',category:'fruits', image:require('../assets/images/dates.jpg') ,price:78},
    { id: '5', name: 'Pine Apple',category:'fruits',image: require('../assets/images/pineapple.jpg'),price:69 },
  ];
  const Item = () => {
    const [loading, setLoading] = useState(false);
    // const dispatch = useDispatch();
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          padding: 15,
        }}
     >
        {fruits?.map((fruit, index) => (  
          <Link
             href={{
    pathname: "/FruitsDetails",
    params: {
      id: fruit.id,
      name: fruit.name,
      image: fruit.image,
      price: fruit.price
    },
  }}
  key={index}
  asChild
>
            <TouchableOpacity>
              <View style={styles.categoryCard}>
                <Image
                  source={fruit.image}
                  style={styles.image}
                  alt={fruit.name}
                />
                <View style={styles.categoryBox}>
                  <Text style={styles.categoryText}>{fruit.name}</Text>
                  <Text >{fruit.category}</Text>
    
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </ScrollView>
    );
  };
  const styles = StyleSheet.create({
    categoryCard: {
      width: 200,
      height: 250,
      backgroundColor: "#fff",
      marginEnd: 10,
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.06,
      borderRadius: 4,
    },
    categoryText: {
      paddingVertical: 5,
      fontSize: 14,
      fontWeight: "bold",
    },
    image: {
      flex: 5,
      width: undefined,
      height: undefined,
    },
    categoryBox: {
      flex: 2,
      padding: 10,
    },
   
    customizeLabel: {
      position: "absolute",
      bottom: 90,
      left: 10,
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    customizeText: {
      color: "black",
      fontSize: 14,
    },
  });
  
  export default Item;