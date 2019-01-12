import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class RepositoryInput extends Component {
  state = {
    inputText: '',
  };

  static propTypes = {
    query: PropTypes.func.isRequired,
  };

  render() {
    const { inputText } = this.state;
    const { query } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar novo repositório"
          value={inputText}
          onChangeText={(text) => {
            this.setState({ inputText: text });
          }}
        />
        <TouchableOpacity style={styles.button} onPress={() => query(inputText)}>
          <Icon style={styles.icon} name="plus" size={20} />
        </TouchableOpacity>
      </View>
    );
  }
}
