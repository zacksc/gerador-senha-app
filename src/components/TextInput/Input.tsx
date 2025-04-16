import React, {useState} from 'react';
import { View, TouchableOpacity, TextInput, GestureResponderEvent } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaste } from '@fortawesome/free-regular-svg-icons/faPaste';
import { styles } from './TextInputStyle';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

interface InputProps{
  handleCopyButton: ((event: GestureResponderEvent) => void) | undefined;
  pass:string

  
}


export function Input(props : InputProps) {

 const [pass, setPass] = useState('')

 function handleGenerateButton() {
       let generateToken  = generatePass()
       setPass(generateToken)
     }
   

  function handleCopyButton(){
    Clipboard.setStringAsync(pass)
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 250}}>
            <TouchableOpacity style={styles.searchSection} onPress={props.handleCopyButton}>  
              <TextInput
                  placeholder='Toque para copiar'
                  textContentType='none'
                  //onChangeText={setPassword}
                  value={props.pass}
                  placeholderTextColor="#c9c9c9"
                  
                />
               <FontAwesomeIcon icon={faPaste} style={styles.searchIcon}/>
            </TouchableOpacity>
            </View>
  );
}