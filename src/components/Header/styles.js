import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    backgroundColor: colors.white,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  icon: {
    color: colors.dark,
  },
});

export default styles;
