import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Typography} from '../../theme';

var _WIDTH = Dimensions.get('window').width;
class HeaderJadwalShalat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onBack=()=>{
    this.props.navigation.goBack();
  
  }

  render() {
    return (
      <View  style={{width:_WIDTH}}>
          <View>
              <Image source={require('../../../assets/images/headerjadwal.png')} />

              <TouchableOpacity style={style.backButton} onPress={this.onBack.bind(this)} >
                    
                    <View>
                        <Image source={require('../../../assets/images/back-btn.png')}  />
                    </View>

                </TouchableOpacity>
             <View style={style.containerLogo}>
             <View style={style.styleViewLogo}>
                <Icon
                    name="md-alarm" 
                    size={27} 
                    style={style.styleLogo}/>
              </View>
               </View> 
             
            <View style={style.containerText}>
              <Text style={style.textJudul}> Jadwal Shalat </Text>
              <Text style={style.textLocation}> Jakarta </Text>
            </View>
             
          </View>
      </View>
    );
  }
}

const style=StyleSheet.create({
    colorBg:{
        color:'#08869F'
    },
    textJudul:{
      fontFamily:'Barlow',
      color:'#08869F',
      textAlign:'center',
      fontSize:24,
      ...Typography.Header
     
    },
    textLocation:{
      fontFamily:'Barlow',
      color:'#000',
      textAlign:'center',
      fontSize:14,
      marginTop:15,
      ...Typography.Heading.bold
    },

    containerLogo:{
      paddingVertical:90,
      position: 'absolute',
      width:_WIDTH,
    },
    styleViewLogo:{
      backgroundColor:'#08869F',
      padding:10,
      borderRadius:10,
      width:50,
      height:50,
      alignSelf:'center'
    },

    styleLogo:{
      paddingHorizontal:4,
      paddingVertical:3,
      color:"#fff"
    },
    containerText:{
      position:'absolute',
      alignSelf:'center', 
      paddingVertical:170,
      
    },
    backButton:{
      paddingHorizontal:20,
      paddingVertical:30,
      position: 'absolute',}


})

export default HeaderJadwalShalat;
