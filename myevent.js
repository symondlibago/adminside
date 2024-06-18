import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavBar from './nav'; // Import NavBar component

const MyEventScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Header with burger icon */}
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>
      
      {/* Main content */}
      <View style={styles.content}>
        <Text style={styles.text}>My Event Screen</Text>
      </View>
      
      {/* Bottom navigation */}
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MyEventScreen;
