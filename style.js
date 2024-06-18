import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({


  // SIDEBAR
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 4,
  },
  navItems: {
    flexDirection: 'row',
  },
  navItem: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
 
  drawerContent: {
    flex: 1,
    backgroundColor: 'black',
  },
  drawerHeader: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  drawerSeparator: {
    height: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: -45,
    marginBottom: 20,
  },

  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  drawerItemText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 20,
  },
  logo: {
    width: 180, 
    resizeMode: 'contain', 
  },



  // NAV BAR STYLE

  
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'black',
      height: 60,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    iconContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
    },
    selectedContainer: {
      backgroundColor: '#FFC42B',
    },
    iconText: {
      marginTop: 4,
      fontSize: 12,
    },
    
});

export default styles;
