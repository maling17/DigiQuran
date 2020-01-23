import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,TouchableOpacity  } from 'react-native';
import axios from 'axios';


class DailyInsight extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pic:[]
    };
  }

  componentDidMount(){
    axios.get(`https://digiquran.id/api/daily-inspiration/latest`)
        .then(res=>{
            const pic=res.data;
            this.setState({pic});
    })
  }

  clickEvent=()=>{
      console.log('click');
      
  }

  render() {
      let url_pic=this.state.pic.img
    return (
      <View>
          <Image source={require('../../../assets/images/islamic-lantern.png')} style={{width:50,height:50,marginLeft:160,marginBottom:20,marginTop:10}} />
          <Text style={{fontSize:16,fontWeight:'bold',marginLeft:135,marginBottom:30,fontFamily:'Roboto'}} > Daily Insight</Text>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('DailyInsightScreen')}style={{height:350,width:330,marginBottom:50,marginLeft:15}}>
               <Image source={{uri:'https://digiquran.id/'+url_pic}}style={{height:350,width:330,marginBottom:50,}} />
          </TouchableOpacity>
          
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

export default DailyInsight;
