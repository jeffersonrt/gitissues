import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  list: {
    // paddingVertical: metrics.basePadding,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    color: colors.primary,
  },
  msg: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.secundary,
    margin: metrics.baseMargin,
    paddingVertical: metrics.basePadding,
  },
  iconHand: {
    color: colors.primary,
    margin: metrics.baseMargin,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.light,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
  },
  buttonText: {
    fontWeight: 'bold',
    color: colors.regular,
    textAlign: 'center',
  },
  buttonTextActive: {
    color: colors.dark,
    fontWeight: 'bold',
  },
});

export default styles;
