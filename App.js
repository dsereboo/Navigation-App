import React from 'react';
import AddToCartScreen from './src/screens/AddToCartScreen';
import OnlineShoppingScreen from './src/screens/OnlineShoppingScreen';
import PaymentSuccessfullScreen from './src/screens/PaymentSuccessfullScreen';
import {NavigationContainer} from  "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';



const Stack= createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
         initialRouteName="OnlineShopping" 
         screenOptions={{
           headerTitleAlign:"center"
          }}
      >
        <Stack.Screen 
          name="OnlineShopping" 
          component={OnlineShoppingScreen}
          options={{
            headerStyle:{backgroundColor:"#fff"},
            headerTintColor:"#5D3FD3"
          }}
        />
        <Stack.Screen name="AddToCart" component={AddToCartScreen} />
        <Stack.Screen
          name="PaymentSuccessful"
          component={PaymentSuccessfullScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

