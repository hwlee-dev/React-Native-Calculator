import { StyleSheet } from 'react-native';
import { colors, fonts, margin } from '../../../styles/common';

export default StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-end' },
  text: {
    marginRight: margin.md,
    color: colors.text,
    fontSize: fonts.xl,
    textAlign: 'right',
  },
});
