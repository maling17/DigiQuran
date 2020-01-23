import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DailyInsightList from '../../components/DailyInsight/DailyInsightList';
import HeaderDailyInsight from '../../components/DailyInsight/HeaderDailyInsight';
class DailyInsightScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <HeaderDailyInsight {...this.props}/>
        <DailyInsightList {...this.props}/>
      </View>
    );
  }
}

export default DailyInsightScreen;
