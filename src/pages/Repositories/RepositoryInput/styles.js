import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.basePadding,
    // backgroundColor: colors.primary,
  },
  input: {
    flex: 1,
    height: 34,
    paddingHorizontal: metrics.basePadding / 2,
    borderRadius: metrics.borderRadius,
    color: colors.dark,
    backgroundColor: colors.white,
  },
  button: {
    marginLeft: metrics.baseMargin,
  },
  icon: {
    color: colors.dark,
  },
});

export default styles;
