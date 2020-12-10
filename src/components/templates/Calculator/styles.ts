import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch' },
  displayWrapper: { flex: 4 },
  displayContainer: { flex: 1 },
  displayInput: {
    flex: 3,
    marginTop: 30,
    marginRight: 20,
    marginBottom: 50,
    fontSize: 40,
  },
  displayResult: {
    flex: 1,
    marginRight: 20,
    marginBottom: 30,
    justifyContent: 'center',
    fontSize: 25,
  },
  deleteWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  deleteButton: {
    width: 30,
    height: 25,
    marginRight: 30,
  },
  divider: {
    width: '92%',
    alignSelf: 'center',
    borderBottomColor: '#E1E1E1',
    borderBottomWidth: 2,
  },
});
