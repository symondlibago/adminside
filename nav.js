// nav.js

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

const NavBar = () => {
  const [selectedTab, setSelectedTab] = useState('Home');

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  const tabs = [
    { name: 'Home', icon: 'home' },
    { name: 'Events', icon: 'calendar' },
    { name: 'Services', icon: 'construct' },
    { name: 'Schedule', icon: 'time' },
    { name: 'About', icon: 'information-circle' },
    { name: 'Contact Us', icon: 'call' },
  ];

  return (
    <View style={styles.bottomNav}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={[styles.iconContainer, selectedTab === tab.name && styles.selectedContainer]}
          onPress={() => handleTabPress(tab.name)}
        >
          <Ionicons
            name={tab.icon}
            size={24}
            color={selectedTab === tab.name ? 'black' : 'white'}
          />
          {/* Ensure the tab name is wrapped in a Text component */}
          <Text style={[styles.iconText, { color: selectedTab === tab.name ? 'black' : 'white' }]}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavBar;
