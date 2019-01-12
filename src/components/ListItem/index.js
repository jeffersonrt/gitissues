import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './sytles';

// console.tron.log(repository.organization);
const ListItem = ({ repository }) => (
  <View style={styles.container}>
    <Image
      style={styles.avatar}
      resizeMode="cover"
      borderRadius={25}
      source={{ uri: repository.organization.avatar }}
    />
    <View style={styles.infoContainer}>
      <Text numberOfLines={1} style={styles.title}>
        {repository.name}
      </Text>
      <Text style={styles.organization}>{repository.organization.name}</Text>
    </View>

    <Icon name="chevron-right" size={20} style={styles.icon} />
  </View>
);

ListItem.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    organization: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default ListItem;
