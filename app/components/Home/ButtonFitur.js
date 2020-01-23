import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,StyleSheet } from 'react-native';

class ButtonFitur extends Component {
    static navigationOptions = {
            title: `Dzikir`,     
    }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  changePress = () => {
    this.props.navigation.navigate('TasbihScreen');
   
}
  toJadwalShalat = () => {
    this.props.navigation.navigate('JadwalShalatScreen');
   }

  render() {
    return (
      <View>
        {/* View untuk button Al-Quran, Jadwal Shalat, Dzikir */}
        <View style={{ 
                    position:'absolute',
                    flexDirection:'row', 
                    top:400,width:332, 
                    height:80,
                    marginTop:20,
                    
                   }}>

                
            {/* Button Al-Quran */}
            <TouchableOpacity style={{marginLeft:50,width:77, height:77}}>
                <View style={{backgroundColor:'#f4f4f4', borderRadius:20, width:77, height:77}}>  
                    <View >

                        <Image source={require('../../../assets/images/quran.png')} style={{marginTop:10,marginLeft:20}} />
                        <Text style={{fontSize:14,fontWeight:'bold',marginTop:5,marginLeft:11 }}>Al Quran</Text>

                    </View>
                </View>
            </TouchableOpacity>
   

            {/* Button Jadwal Shalat */}
            <TouchableOpacity style={{marginLeft:20,width:77, height:77}}  onPress={this.toJadwalShalat.bind(this)}>
                <View style={{backgroundColor:'#f4f4f4', borderRadius:20, width:77, height:77}}>  
                    <View>

                        <Image source={require('../../../assets/images/circular-clock.png')} style={{marginTop:5,marginLeft:22}} />
                        <Text style={{fontSize:14,fontWeight:'bold',marginLeft:2,textAlign:'center' }}>Jadwal Shalat</Text>

                    </View>
                </View>
            </TouchableOpacity>
            {/* Button Dzikir */}
            <TouchableOpacity style={{marginLeft:20,width:77, height:77}} onPress={this.changePress.bind(this)}>
                <View style={{backgroundColor:'#f4f4f4', borderRadius:20, width:77, height:77}}>  
                    <View>

                        <Image source={require('../../../assets/images/tasbih.png')} style={{marginTop:10,marginLeft:22}} />
                        <Text style={{fontSize:14,fontWeight:'bold', marginLeft:2 , textAlign:'center' }}> Dzikir</Text>

                    </View>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style=StyleSheet.create({
    
    textHeader:{
        position:'absolute',
        top:15,
        left:22,
        fontSize:14,
        fontWeight:'bold',
        color:'#fff'
    },

    relative:{
        flex:1,
        position:'relative'
    },

    textArtikel:{
        
        top:151,
        left:40,
        fontSize:14,
        color:'#fff',
        fontWeight:'bold'
    },

    judulCard:{
        position :'absolute',
        width:362,
        height:100,
        top:178,
        left:22,
        right:24,
        backgroundColor:'#08869F'
    },

    judulCard2:{
        position :'absolute',
        width:362,
        height:110,
        left:22,
        right:24,
        top:278,
        backgroundColor:'#f4f4f4'
    },
    textJudulArtikel:{
        width:300,
        
        top:23,
        left:18,
        fontSize:18,
        color:'#fff',
        fontWeight:'bold'
    },
    fontBold:{
        fontWeight:'bold',
        top:26,
        left:50,
        fontSize:14
    }

});

export default ButtonFitur;
