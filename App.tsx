import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';

import Home from './src/screens/Home';
import Navbar from './src/components/Navbar';
import tw from 'twrnc';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.mainView}>
        <Home name={'aaa'} />
      </ScrollView>

      <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: tw`h-[93%]`,
});

export default App;
