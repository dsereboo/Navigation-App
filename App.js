import React from 'react';
import AddToCartScreen from './src/screens/AddToCartScreen';
import OnlineShoppingScreen from './src/screens/OnlineShoppingScreen';
import PaymentSuccesfullScreen from './src/screens/PaymentSuccesfullScreen';
import {NavigationContainer} from  "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';



const Stack= createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AddToCart" component={AddToCartScreen}/>
        <Stack.Screen name="OnlineShopping" component={OnlineShoppingScreen}/>
        <Stack.Screen name="PaymentSuccessful" component={PaymentSuccesfullScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

