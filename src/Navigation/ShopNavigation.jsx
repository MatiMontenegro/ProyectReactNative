import { StyleSheet} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CategoriesScreen from '../Screens/CategoriesScreen'
import ProductsScreen from '../Screens/ProductsScreen'
import DetailScreen from '../Screens/DetailScreen'
import { COLORS } from '../constants/colors'


const ShopNavigation = () => {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName='Home' 
      screenOptions={{
        headerStyle:{
          backgroundColor: COLORS.primary
          },
          headerTintColor: COLORS.secondary,
          headerTitleStyle:{
            fontWeight: 'bold',
          },
      }}>
        <Stack.Screen name='Home' component={CategoriesScreen} options={{
          title:'Categories'
        }}/>
        <Stack.Screen name='Products' component={ProductsScreen} />
        <Stack.Screen name='Details' component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  ); 
};

export default ShopNavigation

const styles = StyleSheet.create({
  flex:1,
  height:"100%"
})