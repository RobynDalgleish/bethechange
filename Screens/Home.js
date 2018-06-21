import React from 'react';
import { View, FlatList } from 'react-native';
import Data from '../data';
import NewsItem from '../Components/NewsItem';

class HomeScreen extends React.Component {
  _keyExtractor = (item, index) => String(index);

  _renderItem = ({ item }) => (
    <NewsItem
      onPressItem={this.props.navigation.navigate}
      company={item.company}
      image={item.image}
      score={item.score}
      parentCompany={item.parentCompany}
      description={item.description}
      articles={item.articles}
      alternateSuggestions={item.alternateSuggestions}
    />
  );

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={Data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default HomeScreen;
