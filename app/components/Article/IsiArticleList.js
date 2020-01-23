import React, { Component } from 'react';
import { Dimensions, View, Text,TouchableOpacity,FlatList,Image,StyleSheet } from 'react-native';
import axios from 'axios';
import HTML from 'react-native-render-html';

var _WIDTH = Dimensions.get('window').width;

class IsiArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article:[],
      tagsStyles: { p: {fontFamily:'Barlow-Regular', fontSize:14,color:'#828282',width:180,marginTop:5,marginLeft:18,height:20 } },      
    };
  }

  toArticleDetail = () =>{
    this.props.navigation.navigate('ArticleDetailScreen');
  }

   onBack=()=>{
    this.props.navigation.goBack();
  
  }
  getKajian=()=>{
    const{navigation}=this.props
    var kajian=navigation.getParam('kategori');
    console.log(kajian);
    return kajian
  }

   //untuk request ke api
   componentDidMount(){
     var id=this.props.navigation.getParam('id')
      axios.get(`https://blog.digiquran.id/wp-json/wp/v2/posts?categories=${id}&&_embed`)
        .then(res=>{
            const article=res.data;
            this.setState({article});
            console.log(article);
    })
}
     // untuk keyExtractornya
    keyExtractor=(item, index)=>index.toString()

    // untuk render item
    renderItem = ({item}) => (

      <View style={{width:330,height:116,marginLeft:15,marginTop:20,backgroundColor: '#fff',borderRadius:3,elevation:8}}>
        <TouchableOpacity 
        onPress={()=> this.props.navigation.navigate('ArticleDetailScreen',
        {
        title  : item.title.rendered,kajian:this.getKajian(), 
        content : item.content.rendered,date:item.date, 
        url     :{uri: item._embedded['wp:featuredmedia'][0].source_url}
        })} >

         <View style={{flexDirection:'row'}}>

              {/* Untuk Text judul dan Isi */}
               <View>
                   <Text style={styles.textJudul}>
                       {item.title.rendered}
                   </Text>

                   <HTML html={item.excerpt.rendered} tagsStyles={this.state.tagsStyles}/>

               </View>
              {console.log(item._embedded['wp:featuredmedia'][0].source_url)
              }
           {/* gambar Article */}
               <Image style={styles.image} source={{uri:item._embedded['wp:featuredmedia'][0].source_url}} />
           </View> 
        </TouchableOpacity>
      </View>
    )

    getMoment=()=>{

    }

  render() {

    const {navigation}=this.props

    return (
      <View>
        <View style={styles.body}>
          <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.article}
          renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  textJudul:{
    width:_WIDTH-230,
    fontSize:14,
    fontWeight:'bold',
    color:'#343434',
    marginTop:23,
    marginLeft:18,
    fontFamily:'Barlow-Regular'
  },
  
  back_button:{
    marginTop:20,
    marginLeft:24
  },

  header:{
    height:57,
    backgroundColor:'#08869F',
    flexDirection:'row',
    elevation:10
  },

  image:{
    width:104,
    height:76,
    marginTop:15,
    marginLeft:10
  },
  body:{
    marginBottom:50,
    marginStart:_WIDTH-360
  }  

 
})


export default IsiArticleList;
