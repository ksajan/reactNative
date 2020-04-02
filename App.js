import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Email/Username"
      style={{borderColor: 'black', borderWidth: 0.8, padding: 5, color: 'white'}} />
      <TextInput placeholder="Password"
      style={{borderColor: 'black', borderWidth: 0.8, padding: 5, color: 'white'}} />
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
    justifyContent: 'center',
    padding: 70
  },
  item1: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item2: {
    backgroundColor: '#f456',
    //alignItems: 'center',
    justifyContent: 'center'
  }
});
