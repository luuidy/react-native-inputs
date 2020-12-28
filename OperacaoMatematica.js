import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Alert} from 'react-native';

export default function App() {
    const [inputs, setInputs] = useState({
      n1: null,
      n2: null,
    });
  

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
            <Button title="Somar" onPress={()=> Alert.alert(`Adição: ${parseFloat(inputs.n1) + parseFloat(inputs.n2)}`)}/>
        </View>
        <View style={{marginBottom: 15}}>
            <Button title="Subtrair" onPress={()=> Alert.alert(`Subtração: ${inputs.n1 - inputs.n2}`)}/>
        </View>
        <View style={{marginBottom: 15}}>
            <Button title="Dividir" onPress={()=> Alert.alert(`Divisão: ${parseFloat(inputs.n1) / parseFloat(inputs.n2)}`)}/>
        </View>
        <View style={{marginBottom: 15}}>
            <Button title="Multiplicar" onPress={()=> Alert.alert(`Multiplicação: ${parseFloat(inputs.n1) * parseFloat(inputs.n2)}`)}/>
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