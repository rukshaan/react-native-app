import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

export default function AddCard() {
  const card = useSelector((state) => state.counter.cartItems);
  console.log(card);

  // Function to render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.cardItem}>
      <Image source={item.image} style={styles.fruitImage} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.description}</Text>
        <Text style={styles.price}>Price: ${item.price}</Text>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
        <Text style={styles.quantity}>Total Price: ${item.total}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {card.length > 0 ? (
        <FlatList
          data={card} // Pass the data prop
          renderItem={renderItem} // Pass the renderItem function
          keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
          contentContainerStyle={styles.scrollContainer}
        />
      ) : (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start', // Change to 'flex-start'
    justifyContent: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: '500',
    paddingRight: 20,
    paddingTop: 10,
  },
  price: {
    fontWeight: '900',
    color: 'orange',
    fontSize: 17,
  },
  quantity: {
    fontWeight: '600',
    fontSize: 15,
    paddingTop: 10,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  fruitImage: {
    width: 362,
    height: 300,
    borderRadius: 10,
  },
  emptyText: {
    fontSize: 20,
    textAlign: 'center',
  },
  cardItem: {
    marginBottom: 20, // Add spacing between items
  },
});
