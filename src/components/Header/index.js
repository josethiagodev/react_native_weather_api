import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Entypo } from '@expo/vector-icons'; 

export default function Header({ background, weather, icon }) {
  return (
    <LinearGradient
      style={styles.header}
      colors={background}
    >
      <Text style={styles.date}>{weather.results.date}</Text>
      <Text style={styles.city}>{weather.results.city}</Text>

      <Entypo name="cloud" style={styles.iconCloud} />

      <Text style={styles.degrees}>
        {weather.results.temp}°
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '46%',
    marginTop: 20,
    borderRadius: 10,
  },
  date: {
    marginBottom: 5,
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  city: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconCloud: {
    color: '#FFF',
    fontSize: 125,
  },
  degrees: {
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold',
  }
});