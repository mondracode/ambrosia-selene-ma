import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import tw from 'twrnc';

const Home = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>¡Hola, Pepito!</Text>
        <Text style={styles.textSection}>Por acá debemos traer info</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.textTitle}>Acciones rápidas</Text>
        <Text style={styles.textSection}>Y por acá también</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: tw`px-8 py-4`,
  textTitle: tw`font-bold text-black text-2xl`,
  textSection: tw`italic`,
});

export default Home;
