import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';

class NewsItem extends Component {
  constructor(props) {
    super(props);
  }

  _onPress = () => {
    this.props.onPressItem('Detail', {
      company: this.props.company,
      ...this.props
    });
  };

  render() {
    return (
      <Card title={this.props.company} image={{ uri: this.props.image }}>
        <Button onPress={this._onPress} title={'Read Now'} />
      </Card>
    );
  }
}

export default NewsItem;
