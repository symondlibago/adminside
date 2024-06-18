// App.js

import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from './sidebar'; // Assuming sidebar.js is in the same directory
import NavBar from './nav'; // Assuming nav.js is in the same directory
import MyEventScreen from './myevent'; // Import MyEventScreen component
import EditScreen from './edit'; // Import EditScreen component

const Drawer = createDrawerNavigator();

// Main Screen component with Drawer Menu button and Bottom Navigation
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
        {/* Main screen */}
        <Drawer.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        {/* My Event screen */}
        <Drawer.Screen name="MyEventScreen" component={MyEventScreen} options={{ headerShown: false }} />
        {/* Edit Screen */}
        <Drawer.Screen name="EditScreen" component={EditScreen} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// Styles for your screen components
const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
});

export default App;
