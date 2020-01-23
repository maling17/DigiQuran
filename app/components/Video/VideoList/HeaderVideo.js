import React, { Component } from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';

class HeaderArticle extends Component {
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
      <View>
        <View style={{height:57,backgroundColor:'#08869F',flexDirection:'row',elevation:10}}>

          <TouchableOpacity onPress={this.onBack.bind(this)} style={{marginTop:20,marginLeft:24}} >
            <Image source={require('../../../../assets/images/arrow_back.png')}/>
          </TouchableOpacity>

          <Text style={{color:'#fff',fontSize:20,marginLeft:20,marginTop:15}} > Video</Text>
         
         
        </View>
      </View>
    );
  }
}

export default HeaderArticle;
