import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import tw from 'twrnc';

// @ts-ignore
const Login = ({saveAuth}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput placeholder="Usuario" onChangeText={u => setUsername(u)} />
      <TextInput placeholder="Contraseña" onChangeText={p => setPassword(p)} />
      <Button
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
  );
};

const styles = StyleSheet.create({
  navbar: tw`flex-row items-center justify-center mb-100`,
  navButton: tw`w-15 items-center justify-center mx-1`,
  buttonTitle: tw`text-xs font-semibold text-black`,
});

export default Login;
