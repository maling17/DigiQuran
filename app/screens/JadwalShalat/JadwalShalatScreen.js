import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
import HeaderJadwalShalat from '../../components/JadwalShalat/HeaderJadwalShalat';
import BodyJadwalShalat from '../../components/JadwalShalat/BodyJadwalShalat';

class JadwalShalatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView>
      <HeaderJadwalShalat {...this.props}/>
      <BodyJadwalShalat {...this.props}/>
      </ScrollView>
    );
  }
}

export default JadwalShalatScreen;
