import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Dialog from "react-native-dialog";
class Lingkaran extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dialogVisible: this.props.dialogVisible
    };
  }

  render() {
    return (
     <View style={{position: 'absolute',}}>
     
        <View  style={{
            position:'absolute',
            overflow: "hidden",
            borderRadius:300,
            borderColor:"#0DA2BF",
            width:250,
            height:250,
            top:225 ,
            left:60,
            borderWidth:1,}}>
        </View>   
        
        <View style={{
            position:'absolute',
            overflow: "hidden",
            borderRadius:300,
            borderColor:"#0DA2BF",
            width:250,
            height:250,
            top:230 ,
            left:60,
            borderWidth:1,}}>
          </View>        
     
    </View>
    );
  }
}

export default Lingkaran;
