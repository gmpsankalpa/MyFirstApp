import React from 'react';
import { Text, View, Button } from 'react-native';

function App(): JSX.Element {

  return (
    <View style={{
      alignItems:'center',
    }}>
      <Text style={{
        fontSize: 40,
        color: 'red',
        // marginLeft: 10,
        marginTop: 10,
      }} >
        Hello
      </Text>
      <Text style={{
        fontSize: 30,
        // marginLeft: 40,
        color: 'blue',
        marginBottom:10
      }}>
        React native
      </Text>
      <Button title='Click me' />
    </View>
  );
}

export default App;
