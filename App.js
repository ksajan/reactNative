import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableHighlight, TouchableOpacity } from 'react-native';


export default class extends React.Component {
  state = {
    email: "",
    password: ""
  }
  render() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOL</Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Email/Username"
          style={styles.inputText}
          onChangeText={text => this.setState({ email: text})} />
      </View>

      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={styles.inputText}
          onChangeText={text => this.setState({password: text})}/>

      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom:70
  },
  inputView: {
    backgroundColor: '#465881',
    justifyContent: 'center',
    width: '80%',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    padding:20
  },
  inputText: {
    height: 50,
    color: 'white'
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 12,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5b',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 40
  },
  loginText: {
    color: 'white'
  }
});
