import React, { Component } from 'react';
import { View, Text,FlatList,TouchableOpacity,Image,ScrollView, SafeAreaView } from 'react-native';
import HeaderArticle from '../../components/Article/HeaderArticle'
import IsiArticleList from '../../components/Article/IsiArticleList';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     
    <SafeAreaView  >
      <View>
       <HeaderArticle {...this.props}/>
      
        <IsiArticleList {...this.props}/>
      </View>
      </SafeAreaView>
    );
  }
}

export default ArticleList