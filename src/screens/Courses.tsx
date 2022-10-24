import {StyleSheet, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Courses = () => {
  return (
    <>
      <Text style={styles.textTitle}>AAAAAAAAAAAZAAAAAA</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: tw`px-8 py-4`,
  textTitle: tw`font-bold text-black text-2xl`,
  textSection: tw`italic`,
  week: tw`px-4`,
});

export default Courses;
