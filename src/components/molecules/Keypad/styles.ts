import { StyleSheet } from 'react-native';
import { margin } from '../../../styles/common';

export default StyleSheet.create({
  container: {
    margin: margin.xs,
    paddingBottom: 20,
    height: '60%',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    margin: margin.xs,
    backgroundColor: '#F2F2F2',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  text: {
    color: '#555555',
    fontSize: 30,
    fontWeight: '500',
  },
  clear: {
    color: '#E4684C',
  },
  operator: {
    color: '#569415',
  },
  equalKey: {
    backgroundColor: '#68B31A',
    borderColor: '#75A444',
  },
  equalText: {
    color: '#FAFAFA',
  },
});
