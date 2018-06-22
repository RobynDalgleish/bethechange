import React, { Component } from 'react';
import { SecureStore, Font } from 'expo';

import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Home from './Screens/Home';
import Detail from './Screens/Detail';
import NewsView from './Screens/NewsView';
import Onboarding from './Screens/Onboarding';

const homeDetailRoutes = createStackNavigator({
  Home: Home,
  Detail: Detail
});

class MainApp extends Component {
  state = {
    onboarded: false,
    fontLoaded: false
  };



  async componentDidMount() {

    await Font.loadAsync({
      'muli-regular': require('./assets/fonts/Muli-Regular.ttf'),
    });

    try {
      await SecureStore.getItemAsync('onboarded').then(() =>
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
          News: NewsView,
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
