import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class NewsItem extends Component {
  constructor(props) {
    super(props);
  }

  _onPress = () => {
    this.props.onPressItem('Detail', {
      title: this.props.title,
      data: this.props.body
    });
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text>{this.props.title}</Text>
          <Text>{this.props.body}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default NewsItem;
