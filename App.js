import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {useFonts} from 'expo-font';
import { useEffect, useState } from 'react';
import ShopNavigation from './src/Navigation/ShopNavigation';


export default function App() {

  const [isPortrait, setIsPortrait] = useState(true)

  const statePortrait = () => setIsPortrait(onPortrait)

  useEffect(() =>{
    Dimensions.addEventListener('change', statePortrait)
    return () => {
    Dimensions.removeEventListener('change', statePortrait)
    }
  },[])

  const onPortrait=()=>{
  const dim = Dimensions.get('screen')
  return dim.height > dim.width
  }
  const [loaded] = useFonts({
    nunito: require('./src/assets/Fonts/Nunito/Nunito-VariableFont_wght.ttf'),
    nunitoLandscape: require('./src/assets/Fonts/Nunito/Nunito-Italic-VariableFont_wght.ttf')
  })


  if(!loaded) return null

  return (
    // <View style={styles.container}>
    //   {
    //     isPortrait ? 
    //       <Text style={styles.text}>TiendaLija!</Text>
    //       :
    //       <Text style={styles.textLandscape}>TiendaLija!</Text>
    //   }
      
    //   <StatusBar style="auto" />
    // </View>


    <ShopNavigation style={styles.container}/>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontFamily: 'nunito'
  },
  textLandscape: {
    fontFamily: 'nunitoLandscape'
  }
});
