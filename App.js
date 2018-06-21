import React, { Component } from 'react';
import { SecureStore } from 'expo';

import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Home from './Screens/Home';
import Detail from './Screens/Detail';
import Onboarding from './Screens/Onboarding';

const homeDetailRoutes = createStackNavigator({
  Home: Home,
  Detail: Detail
});

class MainApp extends Component {
  state = {
    onboarded: false
  };

  // componentWillMount() {
  //   try {
  //     SecureStore.deleteItemAsync('onboarded')
  //   } catch (error) {
  //     console.log('oops')
  //   }
  // }

  componentDidMount() {
    try {
      SecureStore.getItemAsync('onboarded').then(() =>
        this.setState({ onboarded: true })
      );
    } catch (err) {
      this.setState({ onboarded: false });
    }
  }

  render() {
    return React.createElement(
      createStackNavigator(
        {
          Home: Home,
          Detail: Detail
        },
        {
          headerMode: 'none'
        }
      )
    );
  }
}

export default MainApp;
