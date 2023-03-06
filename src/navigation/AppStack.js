import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import DrawerComponent from '../components/DrawerComponent';
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen';
import MomentsScreen from '../screens/MomentsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import { GlobalStyle } from '../utils/globalstyle';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerComponent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: GlobalStyle.primaryColor,
        drawerActiveTintColor: GlobalStyle.foregroundColor,
        drawerInactiveTintColor: GlobalStyle.foregroundColor,
        drawerLabelStyle: { marginLeft: 5 }
      }}>
      <Drawer.Screen
        component={HomeScreen}
        name="Home"
        options={{
          drawerIcon: ({ color }) => {
            <MaterialIcons name="home" size={22} color={color} />;
          }
        }}
      />
      <Drawer.Screen
        component={ProfileScreen}
        name="Profile"
        options={{
          drawerIcon: ({ color }) => {
            <MaterialIcons name="person" size={22} color={color} />;
          }
        }}
      />
      <Drawer.Screen
        component={MessageScreen}
        name="Messages"
        options={{
          drawerIcon: ({ color }) => {
            <MaterialIcons name="chat" size={22} color={color} />;
          }
        }}
      />
      <Drawer.Screen
        component={MomentsScreen}
        name="Moments"
        options={{
          drawerIcon: ({ color }) => {
            <MaterialIcons name="theaters" size={22} color={color} />;
          }
        }}
      />
      <Drawer.Screen
        component={SettingScreen}
        name="Settings"
        options={{
          drawerIcon: ({ color }) => {
            <MaterialIcons name="settings" size={22} color={color} />;
          }
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
