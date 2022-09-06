import {View, Text} from 'react-native';
import React from 'react';
import store from './src/app/store';
import {Provider} from 'react-redux';
import Home from './src/pages/Home';
import Routes from './src/routes';
import {NavigationContainer} from '@react-navigation/native';




export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </Provider>
  );
}
