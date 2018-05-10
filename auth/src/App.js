import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD2zUFgvrpV9Vq0hS4k2VQt0v5zb8o6Mrs',
      authDomain: 'auth-92b44.firebaseapp.com',
      databaseURL: 'https://auth-92b44.firebaseio.com',
      storageBucket: 'auth-92b44.appspot.com',
      messagingSenderId: '592755444006'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  onLogout = () => {
    firebase.auth().signOut();
  }

  renderContent = () => {
    console.log(`Logged in: ${this.state.loggedIn}`);
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <Text style={styles.textStyle}>You're in!!</Text>
            <View style={styles.logOutStyle}>
              <Button action={this.onLogout}>
                Log out
              </Button>
            </View>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    marginTop: 100
  },
  logOutStyle: {
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 18,
    color: 'green',
    justifyContent: 'center',
    alignSelf: 'center'
  }
};

export default App;
