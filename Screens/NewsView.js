import React from 'react';
import { WebView, View, Button } from 'react-native';
import { Constants } from 'expo';

class NewsView extends React.Component {
  render() {
    const { uri } = this.props.navigation.state.params;
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
            onPress={() => this.props.navigation.goBack()}
            title="Go Back"
          />
        </View>
        <WebView source={{ uri }} style={{ marginTop: 20 }} />
      </View>
    );
  }
}

export default NewsView;
