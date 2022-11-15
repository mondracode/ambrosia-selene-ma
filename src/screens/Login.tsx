import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Text} from 'react-native';
import tw from 'twrnc';

// @ts-ignore
const Login = ({saveAuth}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Ambrosia</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Usuario"
        onChangeText={u => setUsername(u)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        placeholder="Contraseña"
        onChangeText={p => setPassword(p)}
      />
      <View style={styles.button}>
        <Button
          color={'#1c9888'}
          title="Login"
          onPress={() =>
            saveAuth({
              token: password, //not final!
              username: username,
              name: 'Pepito Perez',
            })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headline: tw`font-bold text-2xl text-center`,
  textInput: tw`mx-5 my-2 bg-zinc-200 p-3 rounded-md`,
  button: tw`m-5 rounded-md`,
  container: tw`mt-3`,
});

export default Login;
