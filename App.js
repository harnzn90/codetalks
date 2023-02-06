import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/pages/login/login';
import Sign from './src/pages/sign/sign';
import Room from './src/pages/rooms/room';
import Message from './src/pages/message/message';
import FlashMessage from "react-native-flash-message";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="RoomPage" component={Room} />
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
        <Stack.Screen name="MsgPage" component={Message} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
