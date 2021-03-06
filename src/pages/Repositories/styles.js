import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: metrics.basePadding,
    margin: metrics.baseMargin,
    // backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  input: {
    flex: 1,
    height: 44,
    paddingHorizontal: metrics.basePadding / 2,
    borderRadius: metrics.borderRadius,
    color: colors.dark,
    backgroundColor: colors.white,
  },
  button: {
    // paddingLeft: metrics.basePadding / 2,
    marginLeft: metrics.baseMargin,
  },
  icon: {
    color: colors.dark,
  },
  list: {
    flex: 1,
    // backgroundColor: colors.primary,
  },
  errorMsg: {
    color: colors.danger,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: metrics.basePadding,
    // backgroundColor: colors.primary,
  },
});

export default styles;
