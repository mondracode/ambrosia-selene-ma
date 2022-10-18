import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Registry = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Esta es la historia académica</Text>
        <Text style={styles.textSection}>Por acá debemos traer info</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.textTitle}>Tu progreso</Text>
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

export default Registry;
