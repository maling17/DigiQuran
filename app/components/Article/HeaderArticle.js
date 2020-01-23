import React, { Component } from 'react';
import { View, Text, Image,TouchableOpacity,StyleSheet,Dimensions } from 'react-native';
import { Typography } from '../../theme';

var _WIDTH = Dimensions.get('window').width;

class HeaderArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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

  render() {
   
    return (
      <View>

        <View style={styles.header}>

          <TouchableOpacity onPress={this.onBack.bind(this)} style={styles.back_button} >
            <Image source={require('../../../assets/images/arrow_back.png')}/>
          </TouchableOpacity>

          <Text style={styles.textJudul} > {this.getKajian()}</Text>
         
          <TouchableOpacity style={styles.menu} >
            <Image source={require('../../../assets/images/menu.png')}/>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  
  textJudul:{
    width:_WIDTH-50,
    marginLeft:15,
    marginTop:15,
    color:'white',
    ...Typography.Header
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

  menu:{
    marginTop:18,
    marginLeft:320,
    position: 'absolute',
  },

 
})

export default HeaderArticle;
