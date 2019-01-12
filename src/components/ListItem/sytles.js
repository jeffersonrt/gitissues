import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: metrics.basePadding,
    // paddingHorizontal: metrics.basePadding / 2,
    marginHorizontal: metrics.baseMargin,
    marginBottom: metrics.baseMargin / 2,
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.white,
  },

  avatar: {
    width: 50,
    height: 50,
  },

  infoContainer: {
    flex: 1,
    paddingHorizontal: metrics.basePadding,
    // backgroundColor: '#f5f5f5',
  },

  title: {
    color: colors.dark,
    fontSize: 18,
    fontWeight: 'bold',
  },

  organization: {
    marginTop: 5,
    color: colors.regular,
    fontSize: 16,
    fontWeight: '100',
  },

  icon: {
    color: colors.light,
  },
});

export default styles;
