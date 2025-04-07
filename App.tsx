import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {useFonts, DarkerGrotesque_900Black, DarkerGrotesque_400Regular } from '@expo-google-fonts/darker-grotesque'
import generatePass from './services/passwordService';
import * as Clipboard from 'expo-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaste } from '@fortawesome/free-regular-svg-icons/faPaste'

export default function App() {
  const [pass, setPass] = useState('')

  function handleGenerateButton() {
    let generateToken  = generatePass()
    setPass(generateToken)
  }
  let [fontsLoaded] = useFonts({
    DarkerGrotesque_400Regular,
    DarkerGrotesque_900Black
  });

  function handleCopyButton(){
    Clipboard.setStringAsync(pass)
  }

  if(!fontsLoaded){
    return null;
  }

  


  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image
        source={require('./assets/logo.png')}
        style={{right: 60}}
        />
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 48, fontFamily: 'DarkerGrotesque_900Black', color: '#231f20'}}>GERADOR</Text>
        <Text style={{fontSize: 58, fontFamily: 'DarkerGrotesque_400Regular', color: '#231f20', marginTop: -15}}>de senha</Text>
      </View>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 250}}>
        <TouchableOpacity style={styles.searchSection} onPress={handleCopyButton}>  
          <TextInput
              placeholder="Toque para copiar"
              textContentType='none'
              //onChangeText={setPassword}
              value={pass}
              placeholderTextColor="#c9c9c9"
              
            />
           <FontAwesomeIcon icon={faPaste} style={styles.searchIcon}/>
        </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleGenerateButton}>
          <Text style={styles.buttonTexto}>Gerar senha</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    top: 100,
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  titleContainer: {
    top: 80,
    right: 50,
    marginRight: 20,
  },
  button: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: '#231f20',
    width: 320,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonTexto: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#231f20',
    height: 45,
    width: 310,
    borderRadius: 50,
    margin: 10,
    textAlign: 'center',
    marginBottom: 20,
},
searchIcon: {
  padding: 10,
  margin: 5,
  resizeMode: 'stretch',
  alignItems: 'center',
  color: '#231f20',
  left: 80,
},
});
