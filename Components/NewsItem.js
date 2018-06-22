import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';

class NewsItem extends Component {
  constructor(props) {
    super(props);
  }

  _onPress = () => {
    this.props.onPressItem('News', {
      uri: this.props.url
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
          shadowOpacity: 0.2,
          minHeight: 135
        }}
      >
        {this.props.urlToImage ? (
          <Image
            source={{ uri: this.props.urlToImage }}
            style={{ width: 144, minHeight: 135 }}
          />
        ) : (
          <Image
            source={require('../assets/noImage.jpg')}
            style={{ width: 144, height: 144 }}
          />
        )}
        <View style={{ padding: 10, flex: 1, justifyContent: 'center' }}>
          <Text>{this.props.title}</Text>
          <TouchableHighlight onPress={this._onPress}>
            <Text style={{ color: 'blue', marginTop: 10 }}>Read More</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default NewsItem;
