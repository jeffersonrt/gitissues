import React, { Component } from 'react';

import {
  View, Text, TextInput, FlatList, TouchableOpacity, AsyncStorage,
} from 'react-native';

import ListItem from '~/components/ListItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '~/components/Header';
import api from '~/services/api';

import styles from './styles';

export default class Repositories extends Component {
  state = {
    data: [],
    refreshing: false,
    inputText: '',
    error: false,
  };

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.loadData();
    // AsyncStorage.clear();
  }

  renderItem = ({ item }) => <ListItem repository={item} />;

  getNewRepo = async () => {
    const { inputText, data } = this.state;
    this.setState({ error: false });

    try {
      const response = await api.get(`/repos/${inputText}`);
      this.setState({
        data: [
          ...data,
          {
            id: response.data.id,
            url: inputText,
            image: response.data.organization.avatar_url,
            title: response.data.name,
            subtitle: response.data.organization.login,
          },
        ],
        inputText: '',
      });
    } catch (error) {
      this.setState({ error: true });
    }

    this.saveData();
  };

  loadData = async () => {
    this.setState({ refreshing: true });
    const response = await AsyncStorage.getItem('@GitIssues:repos');
    if (response) this.setState({ data: JSON.parse(response) });
    this.setState({ refreshing: false });
  };

  saveData = async () => {
    const { data } = this.state;
    await AsyncStorage.setItem('@GitIssues:repos', JSON.stringify(data));
  };

  render() {
    const {
      data, refreshing, inputText, error,
    } = this.state;

    return (
      <View style={styles.container}>
        <Header title="GitIssues" />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
            placeholder="Adicionar novo repositório"
            value={inputText}
            onChangeText={text => this.setState({ inputText: text })}
          />
          <TouchableOpacity style={styles.button} onPress={this.getNewRepo}>
            <Icon style={styles.icon} name="plus" size={24} />
          </TouchableOpacity>
        </View>
        {error && <Text style={styles.errorMsg}>Repositório inválido.</Text>}
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={repo => String(repo.id)}
          renderItem={this.renderItem}
          onRefresh={this.loadData}
          refreshing={refreshing}
        />
      </View>
    );
  }
}
