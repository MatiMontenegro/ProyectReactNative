import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CategoriesItem from '../components/CategoriesItem'
import {CATEGORIES} from '../data/Categories'

const CategoriesScreen = ({ navigation }) =>{

const handleSelectedCategory = (item) =>{
  return()=>{
  navigation.navigate("Products",{
    categoryId: item.id,
    name: item.title
  });
};
}


  const renderCategoriesItem = ({item}) =>(
    <View style={styles.container}>
    <CategoriesItem item={item} onSelected={handleSelectedCategory} />
    </View>
    );



  return (
    <View style={styles.container}>
      <FlatList 
      data= {CATEGORIES}
      renderItem= {renderCategoriesItem}
      keyExtractor= {item => item.id}
      />
    </View>
  );
};

export default CategoriesScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:"100%",
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'white',

  }
})