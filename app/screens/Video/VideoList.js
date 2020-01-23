import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import HeaderVideo from '../../components/Video/VideoList/HeaderVideo';
import IsiVideoList from '../../components/Video/VideoList/IsiVideoList';
class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        <HeaderVideo {...this.props}/>
        <IsiVideoList {...this.props}/>
      </View>
    );
  }
}

export default VideoList;
