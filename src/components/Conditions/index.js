import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Conditions({ weather }) {
  return (
    <View style={styles.content}>
      <View style={styles.condition}>
       <Feather name="wind" style={styles.iconCondition} />
       <Text style={styles.textCondition}>{weather.results.wind_speedy}</Text>
      </View>
      
      <View style={styles.condition}>
       <MaterialCommunityIcons name="weather-sunset-up" style={styles.iconCondition} />
       <Text style={styles.textCondition}>{weather.results.sunrise}</Text>
      </View>

      <View style={styles.condition}>
       <MaterialCommunityIcons name="weather-sunset-down" style={styles.iconCondition} />
       <Text style={styles.textCondition}>{weather.results.sunset}</Text>
      </View>

      <View style={styles.condition}>
       <Feather name="droplet" style={styles.iconCondition} />
       <Text style={styles.textCondition}>{weather.results.humidity}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'rgba(35, 35, 50, 1)',
    borderRadius: 8,
  },
  condition: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    paddingTop: 22,
    paddingBottom: 20,
  },
  iconCondition: {
    marginBottom: 2,
    fontSize: 28,
    color: '#5B86E5',
  },
  textCondition: {
    marginBottom: 5,
    color: '#FFF',
    fontSize: 13,
    fontWeight: '600',
  }
});