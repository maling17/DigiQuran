import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
class HeaderTasbih extends Component {
  constructor(props) {
    super(props);
    this.state = {
        index: 0,
        routes: [
            { key: 'Arabic', title: 'Arabic' },
            { key: 'Indonesia', title: 'Indonesia' },
            { key: 'Terjemahan', title: 'Terjemahan' },
            ],
           
    };
  }

  render() {
      
    const FirstRoute = () => (
 
        <View style={ { backgroundColor: '#08869F',flex:1 }}>
            
             <View >
                 <Text style={{textAlign: 'center',width:365 ,fontSize:16,color:'white',marginTop:10}}>Arabic</Text>
             </View>
            
        </View>
       );
       
       const SecondRoute = () => (
         
         <View style={ { backgroundColor: '#08869F' }}>
              <View>
                 <Text style={{textAlign: 'center',width:365 ,fontSize:16,color:'white',marginTop:10}}>Indonesia</Text>
             </View>
           
         </View>
       );
       const ThirdRoute = () => (
          
          <View style={ { backgroundColor: '#08869F' }}>
                <View>
                 <Text style={{textAlign: 'center',width:365 ,fontSize:16,color:'white',marginTop:10}}>Terjemahan</Text>
             </View>
           
          </View>
         );
    return (
      <View style={{flex:1}}>
         <TabView
          navigationState={this.state}
          renderScene=
          {SceneMap({
            Arabic: FirstRoute,
            Indonesia: SecondRoute,
            Terjemahan:ThirdRoute
          })}
          renderTabBar={props =>
              <TabBar
                  {...props}
                  indicatorStyle={{backgroundColor: 'yellow'}}
                  tabStyle={styles.bgcolor}/>
              }
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
          
        />

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
export default HeaderTasbih;
