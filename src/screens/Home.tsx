import React from 'react';
import WebView from 'react-native-webview';

const Home = () => {
  return <WebView source={{uri: 'https://www.google.com'}} />;
};

export default Home;
