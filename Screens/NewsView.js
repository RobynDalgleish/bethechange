import React from 'react';
import { WebView } from 'react-native';

class NewsView extends React.Component {
  render() {
    const { uri } = this.props.navigation.state.params;
    return <WebView source={{ uri }} style={{ marginTop: 20 }} />;
  }
}

export default NewsView;
