import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Courses = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Mis cursos</Text>
        <Text style={styles.textSection}>Lo que estoy viendo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: tw`px-8 py-4`,
  textTitle: tw`font-bold text-black text-2xl`,
  textSection: tw`italic`,
});

export default Courses;
