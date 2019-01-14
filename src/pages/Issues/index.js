import React, { Component } from 'react';
import api from '~/services/api';

import {
  View, Text, FlatList, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import ListItem from '~/components/ListItem';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '~/components/Header';

import styles from './styles';

export default class Issues extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    issues: [],
    isLoading: false,
    refreshing: false,
    issuesState: 'all',
  };

  componentDidMount() {
    this.getIssues();
  }

  getIssues = async (stateList = 'all') => {
    this.setState({ isLoading: true, refreshing: true, issuesState: stateList });
    const { navigation } = this.props;
    const repository = navigation.getParam('url');
    const { data } = await api.get(`/repos/${repository}/issues?state=${stateList}`);

    const issues = data.map(issue => ({
      id: issue.id,
      url: issue.html_url,
      image: issue.user.avatar_url,
      title: issue.title,
      subtitle: issue.user.login,
      state: issue.state,
    }));

    this.setState({ issues, isLoading: false, refreshing: false });
  };

  hasIssue = () => {
    const { issues, refreshing, issuesState } = this.state;
    return issues.length > 0 ? (
      <FlatList
        style={styles.list}
        data={issues}
        keyExtractor={issue => String(issue.id)}
        renderItem={this.renderItem}
        onRefresh={() => this.getIssues(issuesState)}
        refreshing={refreshing}
      />
    ) : (
      <Text style={styles.msg}>
        Uauu! Esse repositório não tem nenhuma Issue.
        <Icon style={styles.iconHand} name="hand-peace" size={30} />
      </Text>
    );
  };

  renderItem = ({ item }) => <ListItem repository={item} />;

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Issues" backbutton />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.getIssues();
            }}
          >
            <Text style={(styles.buttonText, styles.buttonTextActive)}>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.getIssues('open');
            }}
          >
            <Text style={styles.buttonText}>Abertas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.getIssues('closed');
            }}
          >
            <Text style={styles.buttonText}>Fechadas</Text>
          </TouchableOpacity>
        </View>

        {isLoading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator style={styles.loader} size="large" />
          </View>
        ) : (
          this.hasIssue()
        )}
      </View>
    );
  }
}
