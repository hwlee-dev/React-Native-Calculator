import React from 'react';
import { View } from 'react-native';
import Button from '../../atoms/Button';
import styles from './styles';

interface keypadProps {
  handlePress: (type: string, value: any) => void;
}

/**
 * 계산기 입력부
 */
const Keypad: React.FC<keypadProps> = (props: keypadProps) => {
  const handlePress = (type: string, value = '') => {
    props.handlePress(type, value);
  };

  return (
    <View style={styles.container}>
      {/* ROW 1 */}
      <View style={styles.row}>
        <Button
          customStyle={{
            text: [styles.text, styles.clear],
            button: styles.button,
          }}
          text='C'
          handlePress={() => handlePress('clear')}
        />
        <Button
          customStyle={{
            text: [styles.text, styles.operator],
            button: styles.button,
          }}
          text='( )'
          handlePress={() => handlePress('bracket')}
        />
        <Button
          customStyle={{
            text: [styles.text, styles.operator],
            button: styles.button,
          }}
          text='%'
          handlePress={() => handlePress('percentage')}
        />
        <Button
          customStyle={{
            text: [styles.text, styles.operator],
            button: styles.button,
          }}
          text='÷'
          handlePress={() => handlePress('operator', '/')}
        />
      </View>
      {/* ROW 2 */}
      <View style={styles.row}>
        <Button
          customStyle={{ text: styles.text, button: styles.button }}
          text='7'
          handlePress={() => handlePress('number', 7)}
        />
        <Button
          customStyle={{ text: styles.text, button: styles.button }}
          text='8'
          handlePress={() => handlePress('number', 8)}
        />
        <Button
          customStyle={{ text: styles.text, button: styles.button }}
          text='9'
          handlePress={() => handlePress('number', 9)}
        />
        <Button
          customStyle={{
            text: [styles.text, styles.operator],
            button: styles.button,
          }}
          text='×'
          handlePress={() => handlePress('operator', '*')}
        />
      </View>
      {/* ROW 3 */}
      <View style={styles.row}>
        <Button
          customStyle={{ text: styles.text, button: styles.button }}
          text='4'
          handlePress={() => handlePress('number', 4)}
        />
        <Button
          customStyle={{ text: styles.text, button: styles.button }}
          text='5'
          handlePress={() => handlePress('number', 5)}
        />
        <Button
          customStyle={{ text: styles.text, button: styles.button }}
          text='6'
          handlePress={() => handlePress('number', 6)}
        />
        <Button
          customStyle={{
            text: [styles.text, styles.operator],
            button: styles.button,
          }}
          text='－'
          handlePress={() => handlePress('operator', '-')}
        />
      </View>
      {/* ROW 4 */}
      <View style={styles.row}>
        <Button
          customStyle={{ text: styles.text, button: styles.button }}
          text='1'
          handlePress={() => handlePress('number', 1)}
        />
        <Button
          customStyle={{ text: styles.text, button: styles.button }}
          text='2'
          handlePress={() => handlePress('number', 2)}
        />
        <Button
          customStyle={{ text: styles.text, button: styles.button }}
          text='3'
          handlePress={() => handlePress('number', 3)}
        />
        <Button
          customStyle={{
            text: [styles.text, styles.operator],
            button: styles.button,
          }}
          text='＋'
          handlePress={() => handlePress('operator', '+')}
        />
      </View>
      {/* ROW 5 */}
      <View style={styles.row}>
        <Button
          customStyle={{ text: styles.text, button: styles.button }}
          text='＋/－'
          handlePress={() => handlePress('posneg')}
        />
        <Button
          customStyle={{ text: styles.text, button: styles.button }}
          text='0'
          handlePress={() => handlePress('number', 0)}
        />
        <Button
          customStyle={{ text: styles.text, button: styles.button }}
          text='.'
          handlePress={() => handlePress('number', '.')}
        />
        <Button
          customStyle={{
            text: [styles.text, styles.equalText],
            button: [styles.button, styles.equalButton],
          }}
          text='＝'
          handlePress={() => handlePress('equal')}
        />
      </View>
    </View>
  );
};

export default Keypad;
