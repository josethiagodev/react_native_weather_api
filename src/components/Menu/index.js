import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={ () => navigation.openDrawer() }
    >
      <AntDesign 
        name="menu-fold" 
        style={styles.menu}
        size={25} 
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9,
    top: 40,
    left: 20,
    width: 55,
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: 'rgba(35, 35, 40, 1)',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  menu: {
    color: '#FFF',
  },
});