import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

class NewsItem extends Component {
  constructor(props) {
    super(props);
  }

  _onPress = () => {
    this.props.onPressItem('Detail', {
      company: this.props.company,
    });
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text>{this.props.company}</Text>
          <Image source={{uri: this.props.image}} style={{width: 100, height: 100}}/>
        </View>
      </TouchableOpacity>
    );
  }
}

export default NewsItem;
