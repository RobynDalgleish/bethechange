import React from 'react';
import { View, FlatList } from 'react-native';

import NewsItem from '../Components/NewsItem';

const data = [
  { title: 'hello', id: 1, body: 'this is the body and it is supe cool' },
  { title: 'item 2', id: 1, body: 'this is the body' }
];
class HomeScreen extends React.Component {
  _keyExtractor = (item, index) => String(index);

  _renderItem = ({ item }) => (
    <NewsItem
      id={item.id}
      onPressItem={this.props.navigation.navigate}
      title={item.title}
      body={item.body}
    />
  );

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default HomeScreen;
