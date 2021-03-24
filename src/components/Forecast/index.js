import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { condition } from '../../Utils/condition';

export default function Forecast({ data }) {
  let icon = condition(data.condition)

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{data.date}</Text>
      <Ionicons name={icon.name} color={icon.color} style={styles.icon} />

      <View style={styles.temperature}>
        <Text style={styles.textMin}>{data.min}°</Text>
        <Text style={styles.textMax}>{data.max}°</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 14,
    paddingTop: 0,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 0,
    borderRadius: 8,
    backgroundColor: 'rgba(35, 35, 50, 1)',
  },
  date: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  icon: {
    fontSize: 26,
  },
  temperature: {
    alignItems: 'center',
  },
  textMin: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  textMax: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
})