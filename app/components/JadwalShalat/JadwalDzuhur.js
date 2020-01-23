import React, { Component } from 'react';
import { View, Text,Switch,StyleSheet } from 'react-native';
import axios from 'axios'
import Sound from 'react-native-sound';
import RNAlarm from 'react-native-alarm';
import moment from 'moment';
import AsyncStorage  from '@react-native-community/async-storage';
import {Typography} from '../../theme';

var whoosh = new Sound('adzan.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
   
    
  });
class JadwalDzuhur extends Component {
  constructor(props) {
    super(props);
    this.state = {
        jadwal:[],
        dzuhur:false,
    };
    this.onDzuhurChange  = this.onDzuhurChange.bind(this);
  }

  setCountItem = async () => {

    const valueDzuhur  = ["dzuhurKey" , this.state.dzuhur.toString()]
    
    try {
     
     await AsyncStorage.setItem("dzuhurKey" , this.state.dzuhur.toString())
     console.log(" : "+valueDzuhur);
    
    } catch(e) {
        console.log(e);
        
    }

  }

  getData = async () => {
    const {dzuhur}=this.state

    let valueDzuhur;
    
    try {
     
        await AsyncStorage.getItem('dzuhurKey').then((res) => {
          
          valueDzuhur = res == null ? false : res;
        })

        if (valueDzuhur ==="true") {
          valueDzuhur=true
          
        }if (valueDzuhur ==="false") {
          valueDzuhur=false
          
        }
        
        this.setState(() => ({ dzuhur  : valueDzuhur}))
      
      } catch(e) {
        
        console.log(e);// error reading value
        
      }

    }
  
    onDzuhurChange(value) {

      const {jadwal,dzuhur}=this.state
       // change the tracked state to the current value
       this.setState({
        dzuhur: value,
      });
  
      let timeNow = new Date().toLocaleTimeString()
      //console.log(jadwalShalat);
      let SplitTime = timeNow.split(":")
      // console.log(SplitTime);
      let jam = parseInt (SplitTime[0]*3600000);
      //console.log(jam);
      let menit = parseInt(SplitTime[1]*60000);
      let totalTime = jam + menit;
      //  console.log('ini total time:'+totalTime);
  
      let Shalat= jadwal.Dhuhr
      // console.log(jadwalShalat);
      let splitJadwal = Shalat.split(":");
      //console.log(splitJadwal);
      let jamShalat = parseInt(splitJadwal[0]*3600000);
      let menitShalat = parseInt(splitJadwal[1]*60000);
      let totalJadwal = jamShalat + menitShalat;
  
      // console.log('ini total jadwal: '+totalJadwal);
      // console.log('ini waktu sekarang'+Date.now());
      // console.log('ini total semua: '+parseInt( totalJadwal-totalTime));
  
      let totalSemua=totalJadwal-totalTime;
      //untuksuara valuenya terbalik di switch false value = true sedangkan di switch true value = false 
      if(dzuhur==false){
        RNAlarm.setAlarm(
          (Date.now()+totalSemua).toString(),  // alarm will fire in one minute (60000 milliseconds)
          'Adzan Dzuhur',
          'adzan',   // leave this as empty string for default sound
          () => {
            console.log('berhadil')
          },
          () => {
            console.log('Failure!')
          }
        );
          //whoosh.play()
      
        }
    }

  componentDidMount(){
    const {dzuhur}=this.state
    this.getData()
   
     axios.get(`https://digiquran.id/api/v2/jadwal-salat/today/-6.285601/106.727883`)
       .then(res=>{
           const jadwal=res.data;
           this.setState({jadwal});
          //  console.log(jadwal);
   })
}

  componentWillUnmount(){
    const {dzuhur}=this.state
     this.setCountItem() 
    
  }


  render() {
    const {jadwal}=this.state
    return (
        <View>

            <View style={styles.viewJadwal}>
              <View style={styles.containerJadwal}>
                <Text style={styles.textJadwalShalat}> Dzuhur </Text>
              </View>
              <View style={styles.containerWaktu}>
                <Text style={styles.textWaktu}> {jadwal.Dhuhr} </Text>
                <Switch
                    value={this.state.dzuhur} // set the value into the tracked state
                    onValueChange={this.onDzuhurChange} // give the function that would handle value change for this component
                    style={{paddingHorizontal:15}}/>
              </View>
              
          </View>
        </View>
    );
  }
}
const styles=StyleSheet.create({
  
  containerJadwal:{
    flex:1,
  },

  containerWaktu:{
    flex:1,
    flexDirection:'row'
  },
  
  textJadwalShalat:{
    fontSize:14,
    color:'black',
    marginLeft:10,
    marginTop:15,
    ...Typography.Body.regular
  },

  textWaktu:{
    fontSize:14,
    color:'black',
    ...Typography.Body.regular,
    marginTop:15,width:45
  },


  viewJadwal:{
    borderWidth:0.5,
    height:50, 
    flexDirection:'row',
    marginLeft:15,
    marginRight:15,
    borderRadius:3,
    marginTop:10
  }
  
  
  });
export default JadwalDzuhur;
