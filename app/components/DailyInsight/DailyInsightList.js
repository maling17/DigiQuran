import React, { Component } from 'react';
import { View, Text,Image,FlatList,TouchableOpacity } from 'react-native';
import axios from 'axios';
import  Share from 'react-native-share';

class DailyInsightList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pic:[]
    };
  }

  componentDidMount(){
    axios.get(`https://digiquran.id/api/daily-inspiration/`)
        .then(res=>{
            const pic=res.data;
            this.setState({pic});
    })
  }

  clickEvent=()=>{
     const shareOptions = {
    title: 'Share via',
    message: 'some message',
    url: 'some share url',
    social: Share.Social.WHATSAPP,
    whatsAppNumber: +62895339418926,  // country code + phone number(currently only works on Android)
    filename: 'test' , // only for base64 file in Android 
};
Share.shareSingle(shareOptions);
  }
   // untuk keyExtractornya
   keyExtractor=(item, index)=>index.toString()

   // untuk render item
   renderItem = ({item}) => (

   <View >
     <View style={{elevation:10,marginBottom:20,borderRadius:3}}> 
        <Image style={{height:370,}} source={{uri:`https://digiquran.id/${item.img}`}}/>
        
        <TouchableOpacity style={{backgroundColor: 'white',}} onPress={this.clickEvent.bind(this)} >
          <Text style={{textAlign:'center',fontSize:20,padding:10,color:'#08869F'}}>Share</Text>
       </TouchableOpacity>    
    </View>
                  
       </View> 
)

  render() {
      let url_pic=this.state.pic.img;
      
    return (
      <View style={{backgroundColor: '#f4f4f4',}}>
         <FlatList
         keyExtractor ={this.keyExtractor}
         data={this.state.pic}
         renderItem={this.renderItem}
         
         /> 
       </View>
    );
  }
}

export default DailyInsightList;
