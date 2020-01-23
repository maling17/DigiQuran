import React, { Component } from 'react';
import { ScrollView,Text,Image,View, SafeAreaView} from 'react-native';
import VideoHeader from '../../components/Video/VideoHeader';
import VideoList from '../../components/Video/VideoList';


class VideoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{flex: 1,}}>
         
          <VideoHeader {...this.props} />
          <VideoList {...this.props} />
          
       </SafeAreaView>
  
    );
  }
}

export default VideoScreen;
