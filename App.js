import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home.js';
import Menu from './Components/Menu.js';
import CompartmentList from './Components/CompartmentList.js';
import AddCompartment from './Components/AddCompartment.js';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="CompartmentList" component={CompartmentList}/>
        <Stack.Screen name="AddCompartment" component={AddCompartment}/>

      </Stack.Navigator>
    </NavigationContainer>


  );
}

