import { StyleSheet } from 'react-native';
import { colors, margin } from '../../../styles/common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  displayText: {
    flex: 1,
    marginTop: 30,
    marginRight: 20,
    marginBottom: 50,
    fontSize: 40,
  },
  divider: {
    width: '92%',
    alignSelf: 'center',
    borderBottomColor: colors.divider,
    borderBottomWidth: 2,
    marginVertical: margin.md,
  },
});
