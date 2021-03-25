import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function ModalForecast({ weather }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.rowModal}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible}
          onDismiss={true}
          style={styles.centeredView}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{weather.results.city}</Text>
              <TouchableHighlight
                style={styles.closeButton}
                onPress={ () => {
                  setModalVisible(!modalVisible);
                }}
              >
                <MaterialCommunityIcons name="close-circle" style={{ color: '#00AAE5', fontSize: 32, }} />
              </TouchableHighlight>
              <View style={styles.modalBody}>
                <Text style={styles.textBody}>
                  <Ionicons name="calendar-sharp" style={styles.iconBody} /> <Text style={styles.textWeather}>{weather.results.date}</Text>
                </Text>
                <Text style={styles.textBody}>
                  <MaterialCommunityIcons name="update" style={styles.iconBody} /> {weather.results.time} H
                </Text>
              </View>
              <View style={styles.modalBody}>
                <Text style={styles.textBody}>
                  <Ionicons name="hourglass-outline" style={styles.iconBody} /> {weather.results.currently}
                </Text>
                <Text style={styles.textBody}>
                  <Ionicons name="thunderstorm-outline" style={styles.iconBody} /> {weather.results.description}
                </Text>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={ () => { setModalVisible(true)} }
        >
          <Text style={styles.textInformation}>
            <FontAwesome5 name="eye" size={17} color="white" /> Mais informações
          </Text>
        </TouchableHighlight>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  rowModal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
  modalBackground: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(18, 18, 20)',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '90%',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: 'rgba(35, 35, 50, 1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.85,
    elevation: 5,
  },
  openButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 50,
    marginTop: 25,
    paddingLeft: 45,
    paddingRight: 45,
    backgroundColor: '#5B86E5',
    borderRadius: 45,
    elevation: 2,
  },
  textInformation: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 15,
  },
  modalText: {
    width: '100%',
    fontWeight: '700',
    textAlign: 'left',
    fontSize: 17,
    color: '#00AAE5',
    borderBottomWidth: 1,
    borderColor: '#00AAE5',
    paddingBottom: 20,
    marginBottom: 15,
  },
  closeButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
    right: 20,
    width: 'auto',
    height: 'auto',
    backgroundColor: 'transparent',
  },
  modalBody: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
  },
  textBody: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    fontWeight: '400',
    textAlign: 'left',
    fontSize: 14,
    color: '#FFFFFF',
    marginRight: 30,
  },
  iconBody: {
    fontSize: 19,
    color: '#00AAE5',
  },
});