import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
import * as Location from 'expo-location';

// Componentes
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

import api, { key } from '../../services/api';


export default function Home() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState({ name: 'cloud', color: '#FFF' });
  const [background, setBackground] = useState(['#5ADEFF', '#00CBFE', '#00BDFE', '#00AAE5']);

  useEffect(() => {
    (async () => {
      // Pedindo a permissão do usuário + armazenando dados na váriavel 'status'
      let { status } = await Location.requestPermissionsAsync();
      // Se o status (permissão) não for igual 'granted'...
      if (status !== 'granted') {
        // ...Mostrar a mensagem de erro
        setErrorMsg('Permissão negada para acessar a sua localização...');
        setLoading(false);
        return;
      }

      // Esperar, pegar a localização do dispositivo...
      // ...e colocar o retorno dentro da váriavel 'location'
      let location = await Location.getCurrentPositionAsync({});

      // Esperar a resposta, buscar API e Armazenar rota na váriavel 'response'
      const response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&${location.coords.longitude}`);
      // Setando e mudando os dados do estado 'weather'
      setWeather(response.data);

      // Verificação: se estiver de noite
      if(response.data.results.currently === 'noite') {
        setBackground(['rgb(45, 70, 130)', 'rgb(20, 25, 100)'])
      }

      // Verificação dos icones
      switch(response.data.results.condition_slug) {
        case 'clear_day':
          setIcon({ name: 'partly-sunny', color: '#FFD700' });
          break;
        
        case 'rain':
          setIcon({ name: 'rainy', color: '#FFF' });
          break;

        case 'storm':
          setIcon({ name: 'rainy', color: '#FFF' });
          break;
      }

      setLoading(false);
    })();
  }, []);

  // Verificando o loading
  if(loading) {
    return (
      <TouchableOpacity style={styles.contentLoading}>
        <Text style={styles.textLoading}>Carregando...</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <Menu />
      
      <Header background={background} weather={weather} icon={icon} />

      <Conditions weather={weather} />

      <View style={styles.contentForecast}>
        <Text style={styles.titleForecast}>Previsão da semana</Text>
      </View>
      
      <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal={true} 
        contentContainerStyle={{ paddingBottom: '5%' }}
        style={styles.list} 
        data={weather.results.forecast}
        keyExtractor={ item => item.date }
        renderItem={ ({ item }) => <Forecast data={item} /> }
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(18, 18, 20)',
  },
  list: {
    width: '90%',
    marginTop: 15,
    marginLeft: 0,
  },
  contentLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    color: '#FFF',
    backgroundColor: 'rgb(18, 18, 20)',
  },
  textLoading: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  contentForecast: {
    width: '90%',
    height: 'auto',
    marginTop: 15,
  },
  titleForecast: {
    width: '100%',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
  },
})