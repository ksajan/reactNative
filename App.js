import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Email/Username"
                      style={styles.input} />
      <TextInput placeholder="Password"
                      style={styles.input} />
      <View style={styles.item1}>
        <Button title="Login" />
        <Button title="Register" />
      </View>
      <View style={styles.item2}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 60
  },
  item1: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item2: {
    backgroundColor: '#f456',
    //alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 0.8,
    padding: 5,
    color: 'white'
  }
});
