import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const App = () => {
  console.log('// DEBUG: testing');
  return (
    <Provider store={createStore(reducers)}>
    <View>
      <Text>Hi</Text>
    </View>
  </Provider>
  );
};

export default App;
