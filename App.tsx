import React from 'react';
import { StatusBar, View } from 'react-native';
import Main from './src/pages/Main';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle='light-content' />
      <Main />
    </View>
  );
}
