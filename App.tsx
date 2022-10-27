import React from 'react';
import {StatusBar} from 'react-native';

import AuthProvider from './src/context/AuthContext';
import TabNavigation from './src/components/TabNavigation';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar barStyle="dark-content" />
      <TabNavigation />
    </AuthProvider>
  );
};

export default App;
