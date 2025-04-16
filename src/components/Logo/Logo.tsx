import React from 'react';
import { View, Image, Text } from 'react-native';
import {useFonts, DarkerGrotesque_900Black, DarkerGrotesque_400Regular } from '@expo-google-fonts/darker-grotesque';

import { styles } from './LogoStyle';
import logo from '../../../assets/logo.png';

export function Logo() {
  let [fontsLoaded] = useFonts({
    DarkerGrotesque_400Regular,
    DarkerGrotesque_900Black
  });
  if(!fontsLoaded){
    return null;
  }


  return (
    <View style={styles.header}>
          <Image
            source={ logo }
            style={{right: 60}}
            />
          <View style={styles.titleContainer}>
            <Text style={{fontSize: 48, fontFamily: 'DarkerGrotesque_900Black', color: '#231f20'}}>GERADOR</Text>
            <Text style={{fontSize: 58, fontFamily: 'DarkerGrotesque_400Regular', color: '#231f20', marginTop: -15}}>de senha</Text>
          </View>
          </View>
  );
}

export default Logo