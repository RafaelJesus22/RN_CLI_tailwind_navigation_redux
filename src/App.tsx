import React from 'react';
import {StatusBar} from 'react-native';
import {Home} from './screens/Home';
import {Provider} from 'react-redux';
import {store} from './store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Home />
    </Provider>
  );
}

export default App;
