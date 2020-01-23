import React, {Component} from 'react';
import {Text, View, StyleSheet,Image,ScrollView, TouchableOpacity} from 'react-native';
import HomeHeader from '../../components/Home/HomeHeader';
import HomeFooter from '../../components/Home/HomeFooter';
import ButtonFitur from '../../components/Home/ButtonFitur';
import DailyInsight from '../../components/Home/DailyInsight';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
    return(
        <ScrollView 
            style={{flex: 1}}
            showsVerticalScrollIndicator={false} >
            <View >
                <ButtonFitur {...this.props}/>
                <HomeHeader {...this.props} />  
                
            </View>
                <HomeFooter {...this.props}/>
                <DailyInsight {...this.props}/>
        </ScrollView>
        
        
        );
     } // end render
};

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

export default HomeScreen;
