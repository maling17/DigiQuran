import React, { Component } from 'react';
import { View, Text,Image,StyleSheet, TouchableOpacity,FlatList} from 'react-native';
import axios from 'axios';

  
class HomeFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        video:[]
    };
  }

    toArticleList = () => {
        this.props.navigation.navigate('ArticleList');
        console.log(this.props);
    }
    VideoList = () => {
        this.props.navigation.navigate('VideoList');
        console.log(this.props);
    }

    toVideo = (item) => {
        this.props.navigation.navigate('VideoScreen',{id:item.id});
        console.log(ItemId);
    }

    //untuk request ke api
    componentDidMount(){
        axios.get(`https://digiquran.id/api/video?per_page=5`)
            .then(res=>{
                const video=res.data;
                this.setState({video});
        })
    }

    // untuk keyExtractornya
    keyExtractor=(item, index)=>index.toString()

    // untuk render item
    renderItem = ({item}) => (

    <View>
                               
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('VideoScreen',{id:item.id,url:item.url,chapter:item.chapter})} style={{height:148,width:174,borderRadius:5,marginLeft:15,marginTop:10}} >
       
        <Image style={{width:167,height:86,borderRadius:3}} source={{uri:`https://digiquran.id/${item.thumbnail}`}}/>
    
        <Text style={{fontSize:14,fontWeight:'bold',color:'#343434',marginTop:5}}>{item.chapter}</Text>
       
    </TouchableOpacity>

    </View> 
)

  render(){
    return (
        <View>

            {/* View untuk Rekomendasi Kajian */}
            <View>

                {/*Text Rekomendasi dan Artikel Lainya  */}
                <View style={{flexDirection:'row'}}>
                    <Text style={{marginLeft:20,color:'#484E50',fontSize:18,fontWeight:'bold'}}>Rekomendasi Kami</Text> 
                    <TouchableOpacity style={{marginLeft:90,marginTop:5,}} onPress={()=>this.props.navigation.navigate('ArticleList',{id:'',kategori:'Artikel'})}>
                        <Text style={{color:'#A9A9A9',fontSize:12}}>Artikel Lainnya</Text>
                    </TouchableOpacity>
                     
                </View>


                {/* View untuk Kajian */}
                <View style={{height:135,backgroundColor:'#f4f4f4',marginTop:10,marginBottom: 32,}}>

                    {/* card Kajian untuk satu row */}
                    <View style={{flexDirection:'row'}}>
                        
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('ArticleList',{id:1,kategori:'Doa'})} 
                    style={{elevation:2, flexDirection:'row',height:34,width:154,borderRadius:5,backgroundColor:'#fff',marginLeft:18,marginTop:20}} >

                        <View style={{borderRadius:100,backgroundColor:'#08869F',height:10,width:10,marginTop:13,marginLeft:15}}/>
                        <Text style={{fontSize:14,fontWeight:'bold',color:'#343434',marginTop:8,marginLeft:5}}>Doa</Text>
                    
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('ArticleList',{id:10,kategori:'Kajian Fiqih'})} 
                    style={{elevation:2,flexDirection:'row',height:34,width:154,borderRadius:5,backgroundColor:'#fff',marginLeft:15,marginTop:20}} >
                    
                        <View style={{borderRadius:100,backgroundColor:'#08869F',height:10,width:10,marginTop:13,marginLeft:15}}/>
                        <Text style={{fontSize:14,fontWeight:'bold',color:'#343434',marginTop:8,marginLeft:5}}>Kajian Fiqih</Text>
                    
                    </TouchableOpacity>

                    </View> 

                    {/* card Kajian untuk satu row */}
                    <View style={{flexDirection:'row'}}>
                        
                    <TouchableOpacity 
                     onPress={()=>this.props.navigation.navigate('ArticleList',{id:11,kategori:'Kajian Hadist'})}
                     style={{elevation:2,flexDirection:'row',height:34,width:154,borderRadius:5,backgroundColor:'#fff',marginLeft:18,marginTop:20}} >
                    
                        <View style={{borderRadius:100,backgroundColor:'#08869F',height:10,width:10,marginTop:13,marginLeft:15}}/>
                        <Text style={{fontSize:14,fontWeight:'bold',color:'#343434',marginTop:8,marginLeft:5}}>Kajian Hadist</Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('ArticleList',{id:13,kategori:'Sejarah Islam'})} 
                    style={{elevation:2,flexDirection:'row',height:34,width:154,borderRadius:5,backgroundColor:'#fff',marginLeft:15,marginTop:20}} >
                    
                        <View style={{borderRadius:100,backgroundColor:'#08869F',height:10,width:10,marginTop:13,marginLeft:15}}/>
                        <Text style={{fontSize:14,fontWeight:'bold',color:'#343434',marginTop:8,marginLeft:5}}>Sejarah Islam</Text>
                    
                    </TouchableOpacity>

                    </View> 

                </View>

            </View>

            {/* View untuk Rekomendasi Video */}
            <View>

                {/*Text Rekomendasi dan Artikel Lainya  */}
                <View style={{flexDirection:'row'}}>
                    
                    <Text style={{marginLeft:25,color:'#484E50',fontSize:18,fontWeight:'bold'}}>Videos</Text> 
                    <Text style={{marginLeft:190,marginTop:5,color:'#A9A9A9',fontSize:12}} onPress={this.VideoList.bind(this)}>Video Lainnya</Text> 
                
                </View>

            {/* View untuk Video */}    
            <View style={{height:176,marginTop:10,flexDirection:'row'}}>

                <FlatList 

                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={this.state.video}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
            
                />
                            
            </View>
        </View>
    </View> 

        );  
    };
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


export default HomeFooter;
