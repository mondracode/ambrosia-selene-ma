import React from 'react';
import WebView from 'react-native-webview';

const Courses = () => {
  return (
    <WebView
      source={{uri: 'https://amborisa-selene-ma-web.vercel.app/schedule'}}
    />
  );
};

export default Courses;
