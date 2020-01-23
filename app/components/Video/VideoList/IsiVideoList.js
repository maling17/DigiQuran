import React, { Component } from 'react';
import { View, Text,TouchableOpacity,FlatList,Image } from 'react-native';
import axios from 'axios';
class IsiArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  toArticleDetail = () =>{
    this.props.navigation.navigate('ArticleDetailScreen');
  }

   onBack=()=>{
    this.props.navigation.goBack();
  
  }
  toVideo = () => {
    this.props.navigation.navigate('VideoScreen',{id:this.state.video.id});
    console.log(this.props);
}
//untuk request ke api
componentDidMount(){
  axios.get(`https://digiquran.id/api/video`)
      .then(res=>{
          const video=res.data;
          this.setState({video});
  })
}

// untuk keyExtractornya
keyExtractor=(item, index)=>index.toString()

// untuk render item
renderItem = ({item}) => (

<View style={{backgroundColor: '#f4f4f4',}}>                         
<TouchableOpacity 
    onPress={()=>this.props.navigation.navigate('VideoScreen',{id:item.id,url:item.url,chapter:item.chapter})} 
    style={{height:120,width:330,borderRadius:5 ,marginTop:15, marginBottom:5,flexDirection:'row',backgroundColor: 'white',marginLeft:10}} >
 
  <Image style={{width:127,height:80,marginTop:20,marginLeft:15,borderRadius:3}} source={{uri:`https://digiquran.id/${item.thumbnail}`}}/>

  <Text style={{fontSize:14,fontWeight:'bold',color:'#343434',marginTop:30,marginLeft:15,height:60,width:162}}>{item.chapter}</Text>
 
</TouchableOpacity>
</View>

)
  
  render() {

  
    return (
      <View>
        <FlatList
        
        data={this.state.video}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

export default IsiArticleList;
