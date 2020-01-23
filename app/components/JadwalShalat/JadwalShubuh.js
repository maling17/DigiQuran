import React, { Component } from 'react';
import { View, Text,Switch,StyleSheet } from 'react-native';
import axios from 'axios'
import Sound from 'react-native-sound';
import RNAlarm from 'react-native-alarm';
import moment from 'moment';
import AsyncStorage  from '@react-native-community/async-storage';
import { Typography } from '../../theme';

var whoosh = new Sound('adzan.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
   
    
  });
class JadwalShubuh extends Component {
  constructor(props) {
    super(props);
    this.state = {
        jadwal:[],
        shubuh:false,
    };
    this.onShubuhChange  = this.onShubuhChange.bind(this);
  }

  setCountItem = async () => {

    const valueShubuh  = ["shubuhKey" , this.state.shubuh.toString()]
  
    
    try {
     
     await AsyncStorage.setItem("shubuhKey" , this.state.shubuh.toString())
     console.log(" : "+valueShubuh);
    
    } catch(e) {
        console.log(e);
        
    }

  }

  getData = async () => {
    const {shubuh}=this.state

    let valueShubuh;
    
    try {
     
        await AsyncStorage.getItem('shubuhKey').then((res) => {
          
          valueShubuh = res == null ? false : res;
        })

        if (valueShubuh ==="true") {
          valueShubuh=true
          
        }if (valueShubuh ==="false") {
          valueShubuh=false
          
        }
        
        this.setState(() => ({ shubuh  : valueShubuh}))
      
      } catch(e) {
        
        console.log(e);// error reading value
        
      }

    }
  
  onShubuhChange(value) {
      const {jadwal, shubuh}=this.state
      
    // change the tracked state to the current value
    this.setState({
      shubuh: value,
    });
    
    //mengambil waktu sekarang
    let timeNow = new Date().toLocaleTimeString()

    //mengsplit menjadi [jj, mm] dari jj:mm
    let SplitTime = timeNow.split(":")

    //jam dikalikan 3600000 ms untuk mengambil berapa ms waktu sekarang
    let jam = parseInt (SplitTime[0]*3600000);
    
    //menit dikalikan 60000 ms untuk mengambil berapa ms waktu sekarang 
    let menit = parseInt(SplitTime[1]*60000);

    //di total jam dan menit 
    let totalTime = jam + menit;
     
    // mengambil jadwal shalat shalat
    let Shalat= jadwal.Fajr
   
    //mengsplit menjadi [jj, mm] dari jj:mm
    let splitJadwal = Shalat.split(":");
    
    //jam dikalikan 3600000 ms untuk mengambil berapa ms waktu shalat
    let jamShalat = parseInt(splitJadwal[0]*3600000);

    //menit dikalikan 3600000 ms untuk mengambil berapa ms waktu shalat
    let menitShalat = parseInt(splitJadwal[1]*60000);

    //ditotalkan jam dan menit
    let totalJadwal = jamShalat + menitShalat;
    
    /* waktu di kurangkan untuk mendapat kan selisih waktu sekarang dengan waktu shalat 
    yang akan di tambah saat menset waktu alarm */
    let totalSemua=totalJadwal-totalTime;
    
    //untuk suara valuenya terbalik di switch false value = true sedangkan di switch true value = false 
    if(shubuh==false){
      RNAlarm.setAlarm(
        (Date.now()+totalSemua).toString(),  // waktu sekarang ditambahkan ke totalSemua tadi 
        'Adzan Shubuh', //Pesan yang mau di berikan
        'adzan',   // leave this as empty string for default sound
        () => {
          console.log('berhasil')
        },
        () => {
          console.log('Failure!')
        }
      );
      
      }
  }

  componentDidMount(){
    const {shubuh,dzuhur,ashar,maghrib,isya}=this.state
    this.getData()
   
     axios.get(`https://digiquran.id/api/v2/jadwal-salat/today/-6.285601/106.727883`)
       .then(res=>{
           const jadwal=res.data;
           this.setState({jadwal});
          //  console.log(jadwal);
   })
}

  componentWillUnmount(){
    const {shubuh}=this.state
     this.setCountItem() 
    console.log("shubuh: "+ shubuh);
  }


  render() {
    const {jadwal}=this.state
    return (
        <View>

            <View style={styles.viewJadwal}>

              <View style={styles.containerJadwal}>
                <Text style={styles.textJadwalShalat}> Subuh(Fajr) </Text>
              </View>
               <View style={styles.containerWaktu}>
                  
                  <Text style={styles.textWaktu}> {jadwal.Fajr} </Text>
                  <Switch 
                    value={this.state.shubuh} // set the value into the tracked state
                    onValueChange={this.onShubuhChange} // give the function that would handle value change for this component
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
export default JadwalShubuh;
