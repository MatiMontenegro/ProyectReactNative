import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const CategoriesItem = ({item, onSelected}) => {
  return (
    <View style={[styles.categoriesItem, {backgroundColor:item.color}]}>
      <TouchableOpacity style = {styles.container} onPress={onSelected(item)}>
        <View style={styles.container}>
          <Text style={styles.textContainer}>
            {item.title}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source = {{uri:item.img}} style={styles.img}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CategoriesItem