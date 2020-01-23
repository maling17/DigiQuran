import React, { Component } from 'react';
import { View, Text,Switch,StyleSheet } from 'react-native';
import axios from 'axios'
import Sound from 'react-native-sound';
import RNAlarm from 'react-native-alarm';
import moment from 'moment';
import AsyncStorage  from '@react-native-community/async-storage';

import JadwalShubuh from './JadwalShubuh';
import JadwalDzuhur from './JadwalDzuhur';
import JadwalAshar from './JadwalAshar';
import JadwalMaghrib from './JadwalMaghrib';
import JadwalIsya from './JadwalIsya';

// var whoosh = new Sound('adzan.mp3', Sound.MAIN_BUNDLE, (error) => {
//     if (error) {
//       console.log('failed to load the sound', error);
//       return;
//     }
//     // loaded successfully
//     console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
   
    
//   });

class BodyJadwalShalat extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  
  }
  render() {
      const {jadwal}=this.state
      
    return (
      <View style={styles.container}>

        <JadwalShubuh {...this.props}/>
        <JadwalDzuhur {...this.props}/>
        <JadwalAshar {...this.props}/>
        <JadwalMaghrib {...this.props}/>
        <JadwalIsya {...this.props}/>

      </View>
    );
  }
}


const styles=StyleSheet.create({

  container:{
    paddingHorizontal:20,
    paddingVertical:20
  },
    
  textJadwalShalat:{
    fontSize:14,
    color:'black',
    marginLeft:10,
    marginTop:15,
    width:85,
    fontFamily:'Roboto Medium'
  },

  textWaktu:{
    fontSize:14,
    color:'black',
    marginLeft:110,
    marginTop:15,width:45
  },

  viewJadwal:{
    elevation:3,
    width:333,
    height:50, 
    flexDirection:'row',
    marginLeft:15,
    borderRadius:3,
    marginTop:10
  }


});

export default BodyJadwalShalat;
