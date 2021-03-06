import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Alert} from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
    const [inputs, setInputs] = useState({
      n1: null,
      n2: null,
    });

    const speak = (text)=>{
      Speech.speak(`${text}`, {language: 'pt'})
    }
  

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputs}
          placeholder="Numero 1"
          onChangeText={text => setInputs({...inputs, n1: text})}
          value={inputs.n1}
        />
        <TextInput
          placeholder="Numero 2"
          style={styles.inputs}
          onChangeText={text => setInputs({...inputs, n2: text})}
          value={inputs.n2}
        />
        <View style={{marginBottom: 15}}>
            <Button title="Somar" onPress={()=> {
              const result = parseFloat(inputs.n1) + parseFloat(inputs.n2)
              Alert.alert(`Adição: ${result}`)
              speak(result)
              }}/>
        </View>
        <View style={{marginBottom: 15}}>
            <Button title="Subtrair" onPress={()=> {
              const result = parseFloat(inputs.n1) - parseFloat(inputs.n2)
              Alert.alert(`Subtração: ${result}`)
              speak(result)
            }}/>
        </View>
        <View style={{marginBottom: 15}}>
            <Button title="Dividir" onPress={()=>  {
              const result = parseFloat(inputs.n1) / parseFloat(inputs.n2)
              Alert.alert(`Divisão: ${result}`)
              speak(result)
          }}/>
        </View>
        <View style={{marginBottom: 15}}>
            <Button title="Multiplicar" onPress={()=> {
              const result = parseFloat(inputs.n1) * parseFloat(inputs.n2)
              Alert.alert(`Multiplicação: ${result}`)
              speak(result)
          }}/>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingTop: 50,
      backgroundColor: '#fff',
    },
  
    inputs: {
      borderColor: '#D5D5D5', 
      borderWidth: 1,
      padding: 10,
      paddingLeft: 15,
      marginBottom: 20,
      borderRadius: 15,
    }
  });