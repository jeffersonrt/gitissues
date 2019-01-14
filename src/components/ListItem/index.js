import React from 'react';
// import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './sytles';

const ListItem = props => (
  <TouchableOpacity
    onPress={() => {
      if (props.repository.url.startsWith('http')) {
        Linking.openURL(props.repository.url);
      } else {
        props.navigation.navigate('Issues', {
          url: props.repository.url,
        });
      }
    }}
    style={styles.container}
  >
    <Image
      style={styles.avatar}
      resizeMode="cover"
      borderRadius={25}
      source={{ uri: props.repository.image }}
    />
    <View style={styles.infoContainer}>
      <Text numberOfLines={1} style={styles.title}>
        {props.repository.title}
      </Text>
      <Text style={styles.organization}>{props.repository.subtitle}</Text>
      {/* <Text style={styles.organization}>{props.repository.state}</Text> */}
    </View>

    <Icon name="chevron-right" size={20} style={styles.icon} />
  </TouchableOpacity>
);
export default withNavigation(ListItem);
