import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import MainScreen from "@/screens/main.tsx";
import Sidebar from "@/components/sidebar.tsx";
import {NavigatorScreenParams} from "@react-navigation/native";
import DetailScreen from "@/components/detail.tsx";

export type HomeDrawerParamList = {
  Main: {}
}

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeDrawerParamList>
  Detail: {
    noteId: string
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<HomeDrawerParamList>()

function HomeScreen() {
  return <Drawer.Navigator
   initialRouteName="Main"
   screenOptions={{
     drawerType: 'back',
     swipeEdgeWidth: 200,
   }}
   drawerContent={props => <Sidebar {...props} />}
  >
    <Drawer.Screen
     name="Main"
     component={MainScreen}
     options={{headerShown: false}}
    />
  </Drawer.Navigator>
}

export default function Navigations(){
  return <Stack.Navigator
   initialRouteName="Home"
  >
    <Stack.Screen
     name="Home"
     component={HomeScreen}
     options={{headerShown: false}}
    />
    <Stack.Screen
      name="Detail"
      component={DetailScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
}
