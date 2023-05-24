import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const ProductsScreen = ({navigation}) => {
  return (
    <View>
      <Text>ProductsScreen</Text>
      <Button title='Navegar a Detail' onPress={()=> navigation.navigate('Details')}/>
    </View>
  )
}

export default ProductsScreen