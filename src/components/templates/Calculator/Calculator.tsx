import React, { useState } from 'react';
import {
  View,
  NativeSyntheticEvent,
  TextInputSelectionChangeEventData,
  Text,
  TouchableOpacity,
} from 'react-native';
import Display from '../../molecules/Display';
import Keypad from '../../molecules/Keypad';
import calculator from '../../../services/calculator';
import styles from './styles';

const Calculator: React.FC = () => {
  const [displayValues, setDisplayValues] = useState({
    expression: '',
    result: '',
    cursorPosition: 0,
  });

  const handlePress = (type: string, value = '') => {
    const result = calculator(
      type,
      value,
      displayValues.expression,
      displayValues.cursorPosition,
    );

    setDisplayValues({
      ...displayValues,
      ['expression']: result?.expression,
      ['cursorPosition']: result?.cursorPosition,
    });
    // console.log(`calculator.tsx : ${type} ${value} ${displayValues.expression}`);
  };

  const handleSelectionChange = (
    event: NativeSyntheticEvent<TextInputSelectionChangeEventData>,
  ) => {
    setDisplayValues({
      ...displayValues,
      ['cursorPosition']: event.nativeEvent.selection.start,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayWrapper}>
        <Display
          style={{
            container: styles.displayContainer,
            input: styles.displayInput,
            result: styles.displayResult,
          }}
          expression={displayValues.expression}
          result={displayValues.result}
          handleSelectionChange={handleSelectionChange}
        />
      </View>
      <View style={styles.deleteWrapper}>
        <TouchableOpacity style={styles.deleteButton}>
          <Text>Del</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <Keypad handlePress={handlePress} />
    </View>
  );
};

export default Calculator;
