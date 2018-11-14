import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from "./Login"
import * as Expo from "expo";

export default class Home extends React.Component {
  state = {
    isLoading: true,
    isLoggedIn: false
  }

  constructor (props) {
    super(props)
  }

  async componentWillMount () {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({isLoading: false})
    console.log(this.props)
  }

  render () {
    if (this.state.isLoading) {
      return <Expo.AppLoading/>
    }
    if (this.state.isLoggedIn) {
      return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
    } else {
      return <Login/>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
