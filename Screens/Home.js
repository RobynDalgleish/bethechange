import React from 'react';
import {
  View,
  FlatList,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  Animated
} from 'react-native';
import Data from '../data';
import SearchItem from '../Components/SearchItem';
import NewsItem from '../Components/NewsItem';
import { SearchBar, Text, Button } from 'react-native-elements';

class HomeScreen extends React.Component {
  state = {
    data: Data.sort(),
    news: [],
    searching: false,
    term: ''
  };

  componentDidMount() {
    this._getFiles();
  }

  _getFiles = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=lgbt-boycott&apiKey=3b87723479df421ebd40f0ff2171db84`
      );

      await res.json().then(data => {
        this.setState({ news: data.articles });
      });
    } catch (err) {
      console.log('error', err);
    }
  };

  _keyExtractor = (item, index) => String(index);

  _renderItem = ({ item }) => (
    <SearchItem
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

  _renderNews = ({ item }) => {
    return <NewsItem {...item} onPressItem={this.props.navigation.navigate} />;
  };

  _filterItems = term => {
    if (!this.state.searching) {
      this.myScroll.scrollTo({ x: 0, y: 260, animated: false });
    }

    console.log(term);

    if (term !== '') {
      var searchTerm = RegExp(term, 'ig');
      var filtered = this.state.data.filter(item => {
        const test = item.tags.filter(val => {
          return searchTerm.test(val) === true;
        });
        return test.length;
      });

      this.setState({
        term,
        data: filtered,
        searching: true
      });
    } else {
      this.setState({ data: Data, searching: false });
    }
  };

  _clearItems = () => {
    this.setState({ data: Data, searching: false });
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20 }}
        ref={ref => (this.myScroll = ref)}
      >
        <View style={styles.searchBar}>
          <View style={{ paddingHorizontal: 20, alignItems: 'flex-start' }}>
            <Image
              source={require('../assets/logo.png')}
              style={{ width: 165, height: 62 }}
            />
            <Text
              h4
              style={{ color: 'gray', fontWeight: '300', marginTop: 25 }}
            >
              Be an ally and shop responsibly by searching for products before
              you use them
            </Text>
          </View>
          <ImageBackground
            source={require('../assets/wave.png')}
            style={{
              width: Dimensions.get('window').width,
              height: 220,
              justifyContent: 'center'
            }}
          >
            <View>
              <SearchBar
                ref={search => (this.search = search)}
                lightTheme
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderBottomColor: 'transparent',
                  borderTopColor: 'transparent'
                }}
                noIcon
                inputStyle={{ height: 50 }}
                autoCapitalize={'none'}
                onChangeText={this._filterItems}
                onClear={() => {}}
                placeholder="Search for a company or product"
                icon={{ type: 'font-awesome', name: 'search' }}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.displayList}>
          {!this.state.searching ? (
            <View>
              <Text h3 style={{ marginBottom: 15, fontWeight: '300' }}>
                News
              </Text>
              <FlatList
                data={this.state.news}
                renderItem={this._renderNews}
                keyExtractor={this._keyExtractor}
              />
            </View>
          ) : (
            <View>
              {this.state.data.length ? (
                <View>
                  <Text
                    h3
                    style={{
                      marginBottom: 15,
                      fontWeight: '300'
                    }}
                  >
                    Results for {this.state.term}
                  </Text>
                  <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                  />
                </View>
              ) : (
                <View style={{ paddingBottom: 400 }}>
                  <Text h3>No Results</Text>
                </View>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayList: {
    padding: 10
  }
});

export default HomeScreen;
