import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Text, Card } from 'react-native-elements';

import Data from '../data';
class DetailScreen extends React.Component {
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
    console.log(highlights);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text h2>{company}</Text>
        <Text>{score}</Text>
        <Text>{parentCompany}</Text>
        {highlights.map((d, i) => <Text key={i}>{d}</Text>)}
        {alternateSuggestions.map((d, i) => <Text key={i}>{d}</Text>)}
        {articles.map((d, i) => (
          <Card title={d.ArticleTitle} image={{ uri: d.ArticleImage }} key={i}>
            <Button onPress={() => {}} title="Read More" />
          </Card>
        ))}
      </View>
    );
  }
}

export default DetailScreen;
