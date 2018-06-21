import React from 'react';
import { View, FlatList } from 'react-native';
import Data from '../data';
import NewsItem from '../Components/NewsItem';
import { SearchBar } from 'react-native-elements';

class HomeScreen extends React.Component {
  state = {
    searchValue: ''
  };

  componentWillMount() {
    this.setState({
      data: Data
    });
  }

  _keyExtractor = (item, index) => String(index);

  _renderItem = ({ item }) => (
    <NewsItem
      onPressItem={this.props.navigation.navigate}
      company={item.company}
      image={item.image}
      score={item.score}
      parentCompany={item.parentCompany}
      highlights={item.highlights}
      articles={item.articles}
      alternateSuggestions={item.alternateSuggestions}
    />
  );

  _filterItems = term => {
    if (term !== '') {
      var regExTest = RegExp(term, 'gi');
      const struff = this.state.data.filter(item => {
        return item.tags.filter(el => {
          return el.match(regExTest);
        });
      });
    }
  };
  _clearItems = () => {};

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SearchBar
          lightTheme
          onChangeText={this._filterItems}
          onClear={() => {}}
          placeholder="Type Here..."
        />
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default HomeScreen;
