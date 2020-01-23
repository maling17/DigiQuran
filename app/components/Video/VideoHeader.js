import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import axios from 'axios';
import YouTube from 'react-native-youtube';
import getYoutubeId from 'get-youtube-id';


class VideoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video:[]
    };
  } 

  componentWillUnmount(){
    this.render=false;
  }
  //untuk tombol kembali ke screen sebelumnya
    onBack=()=>{
      this.props.navigation.goBack();
    }

  render() {    

    const{navigation}=this.props

    // variabel yang dibutuhkan untuk membuka youtube
    //mengambil nilai yang dilempar home footer
    var url= navigation.getParam('url');
  
    // untuk mengambil id link di youtube contoh : 8b47NO16yGQ dari https://www.youtube.com/embed/8b47NO16yGQ
    var getYouTubeID = require('get-youtube-id');
    var idYoutube = getYouTubeID(url,{fuzzy: false});
    
    return (
      <View>
        <View>
     
          <YouTube
              apiKey="AIzaSyCcr5-npWU7p6fgfZzlsdJzg6r0BsUAkJw"
              videoId={idYoutube} // The YouTube video ID
              loop // control whether the video should loop when ended
              onReady={e => this.setState({ isReady: true })}
              onChangeState={e => this.setState({ status: e.state })}
              onChangeQuality={e => this.setState({ quality: e.quality })}
              onError={e => this.setState({ error: e.error })}
              style={{ alignSelf: 'stretch', height: 300 }}
              
            />
       
        </View>
    </View>
    );
  }
}

export default VideoHeader;
