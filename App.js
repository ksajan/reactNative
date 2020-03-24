import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setoutputText] = useState('Hello I am Working on my firat app!');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Text Converstion" onPress = {() => setoutputText("Hope you like it")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
