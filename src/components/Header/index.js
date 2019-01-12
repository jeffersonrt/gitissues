import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Header = ({ title, backbutton }) => (
  <View style={styles.container}>
    {backbutton && (
      <TouchableOpacity style={styles.backbutton} onPress={() => {}}>
        <Icon style={styles.icon} name="chevron-left" size={18} />
      </TouchableOpacity>
    )}
    <Text style={styles.title}>{title}</Text>
  </View>
);

Header.defaultProps = {
  backbutton: false,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  backbutton: PropTypes.bool,
};

export default Header;
