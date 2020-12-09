import React from 'react';
import { View } from 'react-native';
import Calculator from '../../components/templates/Calculator';
import styles from './styles';

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
};

export default Main;
