import React, {useState} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';
import { Input } from '../../components/TextInput/Input'
import { styles } from './ButtonStyle';

export function Button() {
    
   const [pass, setPass] = useState('')
  
      function handleGenerateButton() {
      let generateToken  = generatePass()
      setPass(generateToken)
    }
  
      
  return (
    <>
    <Input pass={pass} handleCopyButton={undefined} />
    
    <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 250}}>
        
        <TouchableOpacity
          style={styles.button}
          onPress={handleGenerateButton}>

            <Text 
            style={styles.buttonTexto}>
                Gerar senha
            </Text>

        </TouchableOpacity>
    </View>
    </>
  );
}