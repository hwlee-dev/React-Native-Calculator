import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../../atoms/Button';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  font: {
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
  equalButton: {
    backgroundColor: '#68B31A',
    borderColor: '#75A444',
  },
  equalFont: {
    color: '#FAFAFA',
  },
});

/**
 * 계산기 입력부
 */
const Keypad = () => {
  const handlePress = (type: string, value: any = null) => {
    console.log(type);
    console.log(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button
          fontStyle={[styles.font, styles.clear]}
          buttonStyle={styles.button}
          text='C'
          pressFunction={() => handlePress('clear')}
        />
        <Button
          fontStyle={[styles.font, styles.operator]}
          buttonStyle={styles.button}
          text='()'
          pressFunction={() => handlePress('bracket')}
        />
        <Button
          fontStyle={[styles.font, styles.operator]}
          buttonStyle={styles.button}
          text='%'
          pressFunction={() => handlePress('percentage')}
        />
        <Button
          fontStyle={[styles.font, styles.operator]}
          buttonStyle={styles.button}
          text='÷'
          pressFunction={() => handlePress('operator', '/')}
        />
      </View>

      <View style={styles.row}>
        <Button
          fontStyle={styles.font}
          buttonStyle={styles.button}
          text='7'
          pressFunction={() => handlePress('number', 7)}
        />
        <Button
          fontStyle={styles.font}
          buttonStyle={styles.button}
          text='8'
          pressFunction={() => handlePress('number', 8)}
        />
        <Button
          fontStyle={styles.font}
          buttonStyle={styles.button}
          text='9'
          pressFunction={() => handlePress('number', 9)}
        />
        <Button
          fontStyle={[styles.font, styles.operator]}
          buttonStyle={styles.button}
          text='×'
          pressFunction={() => handlePress('operator', '*')}
        />
      </View>

      <View style={styles.row}>
        <Button
          fontStyle={styles.font}
          buttonStyle={styles.button}
          text='4'
          pressFunction={() => handlePress('number', 4)}
        />
        <Button
          fontStyle={styles.font}
          buttonStyle={styles.button}
          text='5'
          pressFunction={() => handlePress('number', 5)}
        />
        <Button
          fontStyle={styles.font}
          buttonStyle={styles.button}
          text='6'
          pressFunction={() => handlePress('number', 6)}
        />
        <Button
          fontStyle={[styles.font, styles.operator]}
          buttonStyle={styles.button}
          text='－'
          pressFunction={() => handlePress('operator', '-')}
        />
      </View>

      <View style={styles.row}>
        <Button
          fontStyle={styles.font}
          buttonStyle={styles.button}
          text='1'
          pressFunction={() => handlePress('number', 1)}
        />
        <Button
          fontStyle={styles.font}
          buttonStyle={styles.button}
          text='2'
          pressFunction={() => handlePress('number', 2)}
        />
        <Button
          fontStyle={styles.font}
          buttonStyle={styles.button}
          text='3'
          pressFunction={() => handlePress('number', 3)}
        />
        <Button
          fontStyle={[styles.font, styles.operator]}
          buttonStyle={styles.button}
          text='＋'
          pressFunction={() => handlePress('operator', '+')}
        />
      </View>

      <View style={styles.row}>
        <Button
          fontStyle={styles.font}
          buttonStyle={styles.button}
          text='＋/－'
          pressFunction={() => handlePress('posneg')}
        />
        <Button
          fontStyle={styles.font}
          buttonStyle={styles.button}
          text='0'
          pressFunction={() => handlePress('number', 0)}
        />
        <Button
          fontStyle={styles.font}
          buttonStyle={styles.button}
          text='.'
          pressFunction={() => handlePress('number', '.')}
        />
        <Button
          fontStyle={[styles.font, styles.equalFont]}
          buttonStyle={[styles.button, styles.equalButton]}
          text='＝'
          pressFunction={() => handlePress('equal')}
        />
      </View>
    </View>
  );
};

export default Keypad;
