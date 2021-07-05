import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./src/assets/biscoito.png'));

  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.img}
      />

      <Text style={styles.textoFrase}>" Está é minha primeira frase do biscoito "</Text>

      <TouchableOpacity style={styles.button} onPress={() => alert('Clicou')}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>
            Quebrar Biscoito
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { marginTop: 15, borderColor: '#121212' }]} onPress={() => alert('Clicou')}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})