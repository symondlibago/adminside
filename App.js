// App.js

import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from './sidebar';
import NavBar from './nav';
import MyEventScreen from './myevent';
import EditScreen from './edit';
import Profile from './profile';
import Notifications from './notification';
import Settings from './settings';

const Drawer = createDrawerNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Burger icon to open sidebar */}
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Main Screen Content</Text>
      </View>
      <NavBar />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="MyEventScreen" component={MyEventScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="EditScreen" component={EditScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Drawer.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
        <Drawer.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
});

export default App;
