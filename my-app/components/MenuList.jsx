import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MenuList = ({ menuItems, onItemPress }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}
    horizontal 
      showsHorizontalScrollIndicator={false} 
    >
      {menuItems.map((item) => (
        <TouchableOpacity 
          key={item.id} 
          style={styles.menuItem} 
          onPress={() => onItemPress(item)}
        >
          <Image source={item.image} style={styles.image} />
          <Text style={styles.itemName}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  menuItem: {
    justifyContent:'center',
    // flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    marginRight: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10, // Android shadow
    width:70
   
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default MenuList;
