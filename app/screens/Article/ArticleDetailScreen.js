import React, { Component } from 'react';
import { 
  View, 
  Text,
  ScrollView, 
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions } from 'react-native';
import HTML from 'react-native-render-html';
import Moment from 'react-moment';

var _WIDTH = Dimensions.get('window').width;

class ArticleDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagsStyles: { p: {fontSize:14,color:'#2d2d2d',lineHeight:28 } },
      
    };
  }

  onBack=()=>{
    this.props.navigation.goBack();
  
  }

  render() {
    const {navigation}=this.props
    const isi=navigation.getParam('content')
    const title=navigation.getParam('title')
    const kajian=navigation.getParam('kajian')
    const date=navigation.getParam('date')
    const url=navigation.getParam('url')
  
    return (

        <ScrollView >
          <View style={{flex: 1}}>
            {console.log(url)}
            {/* View Header */}
            <View>
                
                <Image style={styles.image} source={url}/>
                {/* tombol back */}
                <TouchableOpacity style={styles.back_button} onPress={this.onBack.bind(this)} >
                    
                    <View>
                        <Image source={require('../../../assets/images/back-btn.png')}  />
                    </View>

                </TouchableOpacity>
            </View>
        
            {/* View Judul Artikel */}
            <Text style={styles.textJudul} >{title}</Text>

            {/* View untuk jenis kajian dan Waktu  */}
            <View style={{flexDirection: 'row'}} >
                
                {/* View untuk jenis kajian */}
                <View style={styles.jenisKajian}>
                
                    <Image source={require('../../../assets/images/fa-solid_folder.png')}/>
                    <Text style={styles.fontSmallGrayKajian}>{kajian}</Text>

                </View>

                {/* View untuk waktu artikel */}
                <View style={styles.waktuKajian}>
                
                    <Image source={require('../../../assets/images/clock.png')}/>
                    <Moment format="DD MMMM YYYY" element={Text} style={styles.fontSmallGrayWaktu}>{date}</Moment>

                </View>

            </View>

            {/* Isi Artikel */}
            <View style={styles.body}>

              <HTML html={isi} tagsStyles={this.state.tagsStyles}/>

            </View>
                
        </View>
    </ScrollView>

    );
  }
}
const styles = StyleSheet.create({

  image:{
    height:201,
  },
  
  textJudul:{
    width:_WIDTH-50,
    marginLeft:21,
    marginTop:20,
    fontSize:20,
    fontWeight:'bold'
  },
  
  back_button:{
    marginLeft:20,
    marginTop:20,
    position: 'absolute'
  },

  jenisKajian:{
    flexDirection:'row',
    marginTop:7,
    marginLeft:23
  },

  waktuKajian:{
    flexDirection:'row',
    marginTop:10,
    marginLeft:15
  },

  fontSmallGrayKajian:{
    fontSize:10,
    color:'#4F4F4F',
    marginTop:3, 
    marginLeft:7
  },
  
  fontSmallGrayWaktu:{
    fontSize:10,
    color:'#4F4F4F', 
    marginLeft:7
  },
  body:{
    width:_WIDTH-40,
    marginTop:26,
    marginLeft:22,
    marginBottom:20
  }
})

export default ArticleDetailScreen;
