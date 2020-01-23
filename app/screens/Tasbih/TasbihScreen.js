import React, { Component } from 'react';
import { View, StyleSheet, Dimensions,Text,TouchableOpacity,Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import BodyTasbih from '../../components/Tasbih/BodyTasbih';
import HeaderTasbih from '../../components/Tasbih/HeaderTasbih';

class TasbihScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
       
        };
  }
  
  render() {

    return (
    <View style={{flex:1}}>
      
    
    <BodyTasbih {...this.props}/>
  
  </View>
    );
    
  }
  
}

const styles = StyleSheet.create({
  
  
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#563636',
    marginTop: 40
    },
    bgcolor:{
        backgroundColor: '#08869F',
    }
});

export default TasbihScreen;
