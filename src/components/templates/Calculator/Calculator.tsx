import React, { useState } from 'react';
import { View } from 'react-native';
import Display from '../../molecules/Display';
import Keypad from '../../molecules/Keypad';
import calculator from '../../../utils/calculator';
import styles from './styles';

const Calculator = () => {
  const [values, setValues] = useState({
    displayValue: '0',
    previousValue: '',
    currentValue: '0',
    operator: '',
  });

  const handlePress = (newType: string, newValue: string) => {
    const result = calculator({
      type: newType,
      value: newValue,
      ...values,
    });

    setValues({
      ...values,
      ...result,
    });
  };

  return (
    <View style={styles.container}>
      <Display displayValue={values.displayValue} />
      <View style={styles.divider} />
      <Keypad handlePress={handlePress} />
    </View>
  );
};

export default Calculator;
