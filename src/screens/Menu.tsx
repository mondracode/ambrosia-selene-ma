import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Plan = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Menú</Text>
        <Text style={styles.textSection}>No sé ni qué poner acá</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: tw`px-8 py-4`,
  textTitle: tw`font-bold text-black text-2xl`,
  textSection: tw`italic`,
});

export default Plan;
