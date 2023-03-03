import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import Button from './Button'
import * as WebBrowser from 'expo-web-browser'

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);


const Drawer = createDrawerNavigator();

export default function App() {
  function ChicagoScreen(){
    return(
      <View>
        <Image style={styles.image} source={require('./assets/art.png')} />
        <Button info style={styles.button} onPress={async () => handleButtonPress("https://www.artic.edu/")}>More Information</Button>
      </View>
    )
  };
  
  function WillisScreen(){
    return(
      <View>
        <Image style={styles.image} source={require('./assets/willis.png')} />
        <Button info style={styles.button} onPress={async () => handleButtonPress("https://www.themagnificentmile.com/")}>More Information</Button>
      </View>
    )
  };
  
  function MagnificentScreen(){
    return(
      <View>
        <Image style={styles.image} source={require('./assets/mile.png')} />
        <Button info style={styles.button} onPress={async () => handleButtonPress("https://www.willistower.com/")}>More Information</Button>
      </View>
    )
  };
  
  function NavyScreen(){
    return(
      <View>
        <Image style={styles.image} source={require('./assets/pier.png')} />
        <Button info style={styles.button} onPress={async () => handleButtonPress("https://navypier.org/")}>More Information</Button>
      </View>
    )
  };
  
  function WaterScreen(){
    return(
      <View>
        <Image style={styles.image} source={require('./assets/water.png')}/>
        <Button info style={styles.button} onPress={async () => handleButtonPress("https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html")}>More Information</Button>
      </View>
    )
  }

  const handleButtonPress = async (website) => {
    let result = await WebBrowser.openBrowserAsync(website);
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Art Institute of Chicago' component={ChicagoScreen}></Drawer.Screen>
        <Drawer.Screen name='Magnificent Mile' component={MagnificentScreen}></Drawer.Screen>
        <Drawer.Screen name='Navy Pier' component={NavyScreen}></Drawer.Screen>
        <Drawer.Screen name='Water Tower' component={WaterScreen}></Drawer.Screen>
        <Drawer.Screen name='Willis Tower' component={WillisScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
    width: 240,
    height: 360,
    alignSelf: 'center',
    bottom: '-20%'
  },

  button:{
    textAlign: 'center',
    alignSelf: 'center',
    bottom: '-25%'
  }
});
