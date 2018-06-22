import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Button,
  Dimensions,
  Image,
  FlatList
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
                <Text style={{ color: '#000' }}>{score}</Text>
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
                      marginBottom: 25,
                      backgroundColor: 'white',
                      paddingHorizontal: 15,
                      paddingVertical: 10,
                      marginTop: 10
                    }}
                  >
                    <Image source={{ uri: item.ArticleImage }} />
                    <Text style={{ fontSize: 18 }}>{item.ArticleTitle}</Text>
                  </View>
                )}
              />
            </View>
            <View>
              <Text h4>Alternatives</Text>
              <FlatList
                data={alternateSuggestions}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => (
                  <View
                    style={{
                      marginBottom: 25,
                      backgroundColor: 'white',
                      paddingHorizontal: 15,
                      paddingVertical: 10,
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
