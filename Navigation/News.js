import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Cool'
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications'
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});

const MyApp = createStackNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Notifications: {
    screen: MyNotificationsScreen
  }
});

export default MyApp;
