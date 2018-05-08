import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyD2zUFgvrpV9Vq0hS4k2VQt0v5zb8o6Mrs',
    authDomain: 'auth-92b44.firebaseapp.com',
    databaseURL: 'https://auth-92b44.firebaseio.com',
    storageBucket: 'auth-92b44.appspot.com',
    messagingSenderId: '592755444006'
  });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
export default App;
