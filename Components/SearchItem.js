import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
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
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          marginBottom: 15,
          shadowOffset: { height: 5 },
          shadowColor: 'black',
          shadowOpacity: 0.2
        }}
      >
        {this.props.image ? (
          <Image
            source={{ uri: this.props.image }}
            style={{ width: 144, minHeight: 125 }}
          />
        ) : null}
        <View style={{ padding: 10, flex: 1 }}>
          <Text>{this.props.company}</Text>
          <TouchableHighlight onPress={this._onPress}>
            <Text style={{ color: 'blue', marginTop: 10 }}>Read More</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default NewsItem;
