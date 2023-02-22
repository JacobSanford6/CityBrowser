import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';

function ChicagoScreen(){
  return(
    <View>
      <Image style={styles.image} source={require('./assets/art.png')} />
    </View>
  )
};

function WillisScreen(){
  return(
    <View>
      <Image style={styles.image} source={require('./assets/willis.png')} />
    </View>
  )
};

function MagnificentScreen(){
  return(
    <View>
      <Image style={styles.image} source={require('./assets/mile.png')} />
    </View>
  )
};

function NavyScreen(){
  return(
    <View>
      <Image style={styles.image} source={require('./assets/pier.png')} />
    </View>
  )
};

function WaterScreen(){
  return(
    <View>
      <Image style={styles.image} source={require('./assets/water.png')}/>
    </View>
  )
}




const Drawer = createDrawerNavigator();

export default function App() {
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
    width: 320,
    height: 480,
    alignSelf: 'center',
    bottom: '-20%'
  }
});
