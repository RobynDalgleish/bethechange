import React from 'react';
import { WebView, View } from 'react-native';
import { Button } from 'react-native-elements';
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
            flexDirection: 'row',
            paddingHorizontal: 25,
            paddingVertical: 25
          }}
        >
          <Button
            clear
            onPress={() => this.props.navigation.goBack()}
            title="Go Back" 
          />
        </View>
        <WebView source={{ uri }} />
      </View>
    );
  }
}

export default NewsView;
