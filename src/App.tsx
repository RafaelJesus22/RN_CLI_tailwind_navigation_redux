import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './routes';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
