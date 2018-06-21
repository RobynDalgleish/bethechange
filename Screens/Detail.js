import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DetailScreen extends React.Component {
  render() {
    console.log(this.props.navigation);
    const { company, data } = this.props.navigation.state.params;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{company}</Text>
        <Text>{data}</Text>
      </View>
    );
  }
}

export default DetailScreen;
