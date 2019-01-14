import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

// const { props } = this.props;
const Header = ({ title, backbutton, navigation }) => (
  <View style={styles.container}>
    {backbutton && (
      <TouchableOpacity
        style={styles.backbutton}
        onPress={() => {
          navigation.goBack();
        }}
      >
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

export default withNavigation(Header);
