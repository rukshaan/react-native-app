import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { AntDesign, Foundation } from '@expo/vector-icons';
import FruitsDetails from '../app/FruitsDetails';

export default function TabBar({ state, descriptors, navigation }) {
  const primaryColor='red';
  const customColor='#222';

  const icons = {
    index: (props) => (<AntDesign name="home" size={26} color={customColor} {...props} />),
      Explore: (props) => (<AntDesign name="hearto" size={26} color={customColor} {...props} />),
        Profile: (props) => (<AntDesign name="user" size={26} color={customColor} {...props} />),
          Create: (props) => (<AntDesign name="setting" size={26} color={customColor} {...props} />),
         AddCard: (props) => (<AntDesign name="shoppingcart" size={26} color={customColor} {...props} />),
         
           
};

      

 
  return (
    <View style={styles.tabar }>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
          if(['_sitemap','+not-found','FruitsDetails'].includes(route.name)) return null;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
          key={route.name}
            accessibilityRole="button"
            style={styles.tabarItem}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            // style={{ flex: 1 }}
          >
       
          {
            icons[route.name] && icons[route.name]({
            color: isFocused ? primaryColor : customColor
            }) 
          }

            {/* <Text style={{ color: isFocused ? primaryColor : customColor }}>
              {label}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  )
}
const styles=StyleSheet.create({
tabar:{
  flexDirection:'row',
  position:'absolute',
  bottom:0,
  justifyContent:'space-between',
  alignItems:'center',
  backgroundColor:'white',
  marginHorizontal:15,
  paddingVertical:15,
  borderRadius:15,
  borderCurve:'continuous',
  shadowColor:'black',
  shadowOffset:{width:0,height:10},
  shadowRadius:10,
  shadowOpacity:0.1,
  elevation: 5,
},
tabarItem :{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
}
})