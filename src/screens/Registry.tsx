import React from 'react';
import WebView from 'react-native-webview';

const Registry = () => {
  return (
    <WebView
      source={{uri: 'https://amborisa-selene-ma-web.vercel.app/history'}}
    />
  );
};

export default Registry;
