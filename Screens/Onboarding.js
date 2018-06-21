import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class OnBoardingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>OnBoardingScreen!</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Continue"
          color="red"
        />
      </View>
    );
  }
}

export default OnBoardingScreen;
