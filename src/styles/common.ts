import { Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors = {
  primary: '#010101',
  secondary: '#171717',
  tertiary: '#353535',
  operator: '#9CD260',
  clear: '#E4684C',
  equal: '#427E04',
  text: '#FAFAFA',
  result: '#656565',
  divider: '#4F4F4F',
};

export const padding = {
  xs: 5,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const margin = {
  xs: 5,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const fonts = {
  xs: 10,
  sm: 20,
  md: 40,
  lg: 60,
  xl: 80,
};
