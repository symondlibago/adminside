import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './style'; 

const NavBar = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Home');

  const tabScreenMapping = {
    Home: 'Main',
    Event: 'Event',
    Services: 'Services',
    Schedule: 'Schedule',
    About: 'About',
    Contact: 'Contact'
  };

  const handleTabPress = (tab) => {
    if (selectedTab !== tab) {
      setSelectedTab(tab); 
      const screenName = tabScreenMapping[tab];
      if (screenName) {
        navigation.navigate(screenName); 
      }
    }
  };

  const tabs = [
    { name: 'Home', icon: 'home' },
    { name: 'Event', icon: 'calendar' },
    { name: 'Services', icon: 'construct' },
    { name: 'Schedule', icon: 'time' },
    { name: 'About', icon: 'information-circle' },
    { name: 'Contact', icon: 'call' },
  ];

  return (
    <View style={styles.bottomNav}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={[
            styles.iconContainer,
            selectedTab === tab.name && styles.selectedContainer,
          ]}
          onPress={() => handleTabPress(tab.name)}
        >
          <Ionicons
            name={tab.icon}
            size={24}
            color={selectedTab === tab.name ? 'black' : 'white'}
          />
          <Text
            style={[
              styles.iconText,
              { color: selectedTab === tab.name ? 'black' : 'white' },
            ]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavBar;
