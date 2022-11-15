import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import tw from 'twrnc';

// @ts-ignore
const Menu = ({auth, saveAuth}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Sesión iniciada como {auth.name}</Text>
      <Text style={styles.tagline}>Usuario {auth.username}</Text>
      <View style={styles.button}>
        <Button
          color={'#1c9888'}
          title="Logout"
          onPress={() =>
            saveAuth({
              token: '',
              username: '',
              name: '',
            })
          }
        />
      </View>
      <View>
        <Text style={styles.headline}>Ambrosia V1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headline: tw`text-center text-base font-bold`,
  tagline: tw`text-center italic`,
  button: tw`m-5 rounded-md`,
  container: tw`mt-3 px-3`,
});

export default Menu;
