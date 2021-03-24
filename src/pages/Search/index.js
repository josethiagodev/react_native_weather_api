import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Keyboard, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

import { useNavigation } from '@react-navigation/native';

import api, { key } from '../../services/api';
import { LinearGradient } from 'expo-linear-gradient';
import Conditions from '../../components/Conditions';

export default function Search() {
  const navigation = useNavigation();

  const [input, setInput] = useState('');
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  // Buscando dados da API através da 'key' e do 'input'
  async function handleSearch({ weather }) {
    const response = await api.get(`/weather?key=${key}&city_name=${input}`);

    // Verificação do input: Se ñ encontrar a cidade, retorna uma cidade por padrão
    if(response.data.by === 'default') {
      // Mostrra 'erro' depois que a cidade não for encontrada
      setError('Ops, a cidade não foi encontrada!');
      setInput(''); // Limpando e deixando o campo vázio
      setCity(null); 
      Keyboard.dismiss(); // Fechando o teclado automático
      return;
    }

    setCity(response.data); //Passando os dados da resposta e setando o 'city'
    setInput(''); // Limpando e deixando o campo vázio
    Keyboard.dismiss(); // Fechando o teclado automático
  }

  // Se existir uma 'city'
  if(city) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={ () => navigation.navigate('Home') }
        >
          <Ionicons
            name="arrow-back-sharp" 
            style={styles.iconBack}
          />
          <Text style={styles.titleSearch}>Minha cidade</Text>
        </TouchableOpacity>

        <View style={styles.searchBox}>
          <TextInput 
            value={input} 
            onChangeText={ (valor) => setInput(valor) }
            placeholder="Digite sua cidade aqui..."
            style={styles.inputSearch}
          />
          <TouchableOpacity style={styles.iconButton} onPress={handleSearch}>
            <Ionicons
              name="search-sharp" 
              style={styles.iconSearch}
            />
          </TouchableOpacity>
        </View>

        <LinearGradient style={styles.searchResult} colors={['#5ADEFF', '#00CBFE', '#00BDFE', '#00AAE5']}>
          <Text style={styles.textDate}>{city.results.date}</Text>
          <Text style={styles.textCity}>{city.results.city_name}</Text>
          <Text style={styles.textTemp}>{city.results.temp}°</Text>
          <Conditions weather={city} />
        </LinearGradient>
      </SafeAreaView>
    )
  }


  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity 
        style={styles.backButton} 
        onPress={ () => navigation.navigate('Home') }
      >
        <Ionicons
          name="arrow-back-sharp" 
          style={styles.iconBack}
        />
      </TouchableOpacity>

      <View style={styles.searchBox}>
        <TextInput 
          value={input} 
          onChangeText={ (valor) => setInput(valor) }
          placeholder="Digite sua cidade aqui..."
          style={styles.inputSearch}
        />
        <TouchableOpacity style={styles.iconButton} onPress={handleSearch}>
          <Ionicons
            name="search-sharp" 
            style={styles.iconSearch}
          />
        </TouchableOpacity>
      </View>

      {/* Se o 'error' não for 'null', mostrar alguma coisa */}
      {
        error && <Text style={styles.messageError}>{error}</Text>
      }

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    width: '100%',
    paddingTop: '8%',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'rgb(18, 18, 20)',
  },
  backButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconBack: {
    fontSize: 30,
    color: '#FFF',
  },
  titleSearch: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '600',
    marginLeft: 15,
  },
  searchBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 55,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#FFF',
    fontSize: 28,
    backgroundColor: '#5B86E5',
    borderRadius: 55,
  },
  inputSearch: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: 55,
    paddingLeft: 20,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 55,
    borderBottomLeftRadius: 55,
  },
  iconSearch: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    height: 45,
    lineHeight: 45,
    color: '#FFF',
    fontSize: 26,
    fontWeight: '500',
    borderRadius: 50,
    textAlign: 'center',
  },
  messageError: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 45,
    lineHeight: 45,
    marginTop: 25,
    marginBottom: 20,
    fontSize: 14,
    textAlign: 'center',
    borderRadius: 4,
    color: '#FF4D4D',
    backgroundColor: 'rgba(35, 35, 50, 1)',
  },
  searchResult: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
    paddingTop: 30,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 25,
    borderRadius: 8,
  },
  textDate: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  textCity: {
    color: '#FFF',
    fontSize: 21,
    fontWeight: 'bold',
  },
  textTemp: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    fontSize: 85,
    fontWeight: 'bold',
  }
});