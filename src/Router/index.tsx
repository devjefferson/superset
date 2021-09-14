import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../page/Home';
import toJpg from "../page/toJpg";
import toHtml from "../page/toHtml";
import toCamera from "../page/toCamera";
import toDoc from "../page/toDoc";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="toJpg" component={toJpg} />
        <Stack.Screen name="toHtml" component={toHtml} />
        <Stack.Screen name="toCamera" component={toCamera} />
        <Stack.Screen name="toDoc" component={toDoc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}