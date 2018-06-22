import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Button,
  Dimensions,
  Image,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { Text, Card } from 'react-native-elements';
import { Constants } from 'expo';

import Data from '../data';
class DetailScreen extends React.Component {
  _keyExtractor = (item, index) => String(index);
  render() {
    const {
      company,
      image,
      score,
      parentCompany,
      highlights,
      articles,
      alternateSuggestions
    } = this.props.navigation.state.params;

    return (
      <View
        style={{
          flex: 1,
          paddingTop: Constants.statusBarHeight
        }}
      >
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingHorizontal: 25,
            flexDirection: 'row'
          }}
        >
          <Button
            onPress={() => this.props.navigation.navigate('Home')}
            title="Go Back"
          />
          <Text h5>{company}</Text>
        </View>
        <ScrollView contentInset={{ bottom: 50 }}>
          <Image
            source={{ uri: image }}
            style={{
              width: Dimensions.get('window').width,
              height: 200
            }}
          />
          <View style={{ paddingHorizontal: 25 }}>
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'stretch',
                flexDirection: 'row',
                paddingVertical: 10
              }}
            >
              <View style={{ alignItems: 'stretch', marginRight: 25 }}>
                <Text style={{ color: '#9B9B9B' }}>Score</Text>
                <Text style={{ color: '#F5A623', fontSize: 36 }}>{score}</Text>
              </View>
              <View style={{ alignItems: 'stretch', marginRight: 25 }}>
                <Text style={{ color: '#9B9B9B' }}>Parent</Text>
                <Text style={{ color: '#000' }}>{parentCompany}</Text>
              </View>
            </View>
            <View style={{ paddingVertical: 25 }}>
              <FlatList
                data={highlights}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => (
                  <Text style={{ marginBottom: 25 }}>- {item}</Text>
                )}
              />
            </View>
            <View>
              <Text h4>News</Text>
              <FlatList
                data={articles}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => (
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
                    {item.articleImage ? (
                      <Image
                        source={{ uri: item.articleImage }}
                        style={{ width: 144, minHeight: 135 }}
                      />
                    ) : (
                      <Image
                        source={require('../assets/noImage.jpg')}
                        style={{ width: 144, height: 144 }}
                      />
                    )}
                    <View
                      style={{ padding: 10, flex: 1, justifyContent: 'center' }}
                    >
                      <Text>{item.articleTitle}</Text>
                      <TouchableHighlight
                        onPress={() =>
                          this.props.navigation.navigate('News', {
                            uri: item.articleLink
                          })
                        }
                      >
                        <Text style={{ color: 'blue', marginTop: 10 }}>
                          Read More
                        </Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                )}
              />
            </View>
            <View>
              <Text h4>Alternatives</Text>
              <FlatList
                data={alternateSuggestions}
                keyExtractor={this._keyExtractor}
                horizontal
                renderItem={({ item }) => (
                  <View
                    style={{
                      marginBottom: 25,
                      backgroundColor: 'white',
                      paddingHorizontal: 15,
                      paddingVertical: 25,
                      marginTop: 10
                    }}
                  >
                    <Text style={{ fontSize: 18 }}>{item}</Text>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DetailScreen;
