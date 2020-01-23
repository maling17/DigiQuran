import React, { Component } from 'react';
import { View, Text,FlatList,Image, SafeAreaView,TouchableOpacity, ScrollView} from 'react-native';
import axios from 'axios';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video:[],
      refreshing:false
    };
  }

  componentDidMount(){

    // Mengambil id video yang dilempar
    const id=this.props.navigation.getParam('id')

    // untuk request ke api
      axios.get(`https://digiquran.id/api/video`)
      .then(res=>{
        const video=res.data;
        this.setState({video});
    })
  }

  onBack=()=>{
    this.props.navigation.goBack();
  }

  // untuk keyExtractornya
  keyExtractor=(item, index)=>index.toString()

  // untuk renderItem
  renderItem = ({item}) => (
  <View>
                               
  <TouchableOpacity 
        onPress={()=>this.props.navigation.navigate('VideoScreen',{id:item.id,url:item.url,chapter:item.chapter})} 
        style={{height:110,borderRadius:5,marginTop:10,flexDirection:'row',backgroundColor:'#fff'}} >

      <Image style={{width:167,height:86,borderRadius:3,marginLeft:15,marginTop:11}} source={{uri:`https://digiquran.id/${item.thumbnail}`}}/>
  
      <Text style={{fontSize:14,fontWeight:'bold',color:'#343434',marginTop:15,marginLeft:15,width:150}}>{item.chapter}</Text>
     
  </TouchableOpacity>

 </View> 
)
  render() {
    const{navigation}=this.props

    //mengambil nilai 
    var chapter = navigation.getParam('chapter')
    var id=navigation.getParam('id')

    //function untuk memfilter id yang sekarang di play tidak muncul di list
    function isNumber(obj) {
      return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
    }

    function filterByID(item) {
      if (isNumber(item.id) && item.id !== id) {
        return true;
        } 
      }//End

    //function untuk mengacak nilai di array 
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      while (0 !== currentIndex) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        
      }
      return array;
    }

    //mengambil array video
    var arr=this.state.video
    
    //mengacak array video
    arr=shuffle(arr);
    
    //memfilter list video dgn function filterById
    var VideoArray=arr.filter(filterByID);
    console.log(VideoArray);
  
    return (
      <ScrollView style={{backgroundColor: '#E5E5E5',flex: 1,}}>
       
        
         <View style={{flexDirection:'row',backgroundColor: '#fff',height:73}}>
            
            {/* Tombol Back */}
            <TouchableOpacity onPress={this.onBack.bind(this)}>

                <Image  source={require('../../../assets/images/back-btn-black.png')} style={{marginLeft:10,marginTop:13}}/>
                
            </TouchableOpacity>

            {/* Judul Video  */}
            <Text style={{fontSize:14,color:'#343434',marginTop:15,fontFamily:'Barlow-Reqular',width:295}}>{chapter}</Text>

          </View>

         {/* List Video Lainnya */}
        <View>
            <Text style={{fontSize:18,fontWeight:'bold',color:'#484E50',marginLeft:20,marginBottom:10,marginTop:15}}> Video Yang Lain</Text>
        </View>
      
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={VideoArray}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          refreshing={this.state.refreshing}
          extraData={this.props}
          />  
    
      </ScrollView>
    );
  }
}

export default VideoList;
