import { StyleSheet } from 'react-native';
import { colors, dimensions, fonts, margin } from '../../../styles/common';

const defaultStyle = StyleSheet.create({
  normalKey: {
    width: dimensions.fullWidth / 4 - margin.xs * 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.tertiary,
    borderRadius: dimensions.fullWidth / 2,
  },
  doubleKey: {
    width: dimensions.fullWidth / 2 - margin.xs * 3,
    alignItems: 'flex-start',
    paddingLeft: (dimensions.fullWidth / 4 - margin.lg) / 2,
  },
  equalKey: {
    borderColor: colors.equal,
    backgroundColor: colors.equal,
  },
  normalText: {
    color: colors.text,
    fontSize: fonts.md,
    fontWeight: 'bold',
  },
  operatorText: {
    color: colors.operator,
  },
  clearText: {
    color: colors.clear,
  },
});

export default {
  normal: {
    key: defaultStyle.normalKey,
    text: defaultStyle.normalText,
  },
  double: {
    key: [defaultStyle.normalKey, defaultStyle.doubleKey],
    text: defaultStyle.normalText,
  },
  equal: {
    key: [defaultStyle.normalKey, defaultStyle.equalKey],
    text: [defaultStyle.normalText],
  },
  operator: {
    key: defaultStyle.normalKey,
    text: [defaultStyle.normalText, defaultStyle.operatorText],
  },
  clear: {
    key: defaultStyle.normalKey,
    text: [defaultStyle.normalText, defaultStyle.clearText],
  },
};
