import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <Button title="Register" />
      </View>
      <View style={styles.item2}>
        <Button title="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  item1: {
    backgroundColor: '#f456',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  item2: {
    backgroundColor: '#f456',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  }
});
