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
          minHeight: 135,
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
        <View style={{ padding: 15, flex: 1, justifyContent: 'space-between' }}>
          <Text>{this.props.title}</Text>


          {/* for read more button edit touchable highlight*/}
          <TouchableHighlight 
            onPress={this._onPress}
            activeOpacity={0}
          >
            <Text 
              style={{ 
                color: '#0B6EFD', 
                marginTop: 10
              }}>
                READ MORE
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default NewsItem;
