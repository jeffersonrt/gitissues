import React, { Component } from 'react';

import { View, Text } from 'react-native';

import Header from '~/components/Header';

import styles from './styles';

export default class Repositories extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Header title="GitIssues" />
        <Text>Repositories</Text>
      </View>
    );
  }
}
