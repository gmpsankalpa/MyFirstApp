import React from 'react';
import { Text, View, Button } from 'react-native';
import MyComponents from './src/components/MyComponents';

function App(): JSX.Element {

  return (
    <View style={{ alignItems: 'center' }}>
      <MyComponents />
    </View>
  );
}

export default App;
