import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Alert} from 'react-native';

export default function App() {
    const [inputs, setInputs] = useState({
      name: '',
      email: '',
    });
  
    const alert = () =>{
      Alert.alert(inputs.name, inputs.email)
      setInputs({
        name: '',
        email: '',
      })
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputs}
          placeholder="Nome"
          onChangeText={text => setInputs({...inputs, name: text})}
          value={inputs.name}
        />
        <TextInput
          placeholder="Email"
          style={styles.inputs}
          onChangeText={text => setInputs({...inputs, email: text})}
          value={inputs.email}
        />
        <Button title="Alert" onPress={alert}/>
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